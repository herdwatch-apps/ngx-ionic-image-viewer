import { Directive, ElementRef, HostListener, Input, Renderer2, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { ViewerModalComponent } from './viewer-modal/viewer-modal.component';

@Directive({
  selector: '[ionImgViewer]',
  standalone: true,
})
export class NgxIonicImageViewerDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2, public modalController: ModalController) { }

  @Input() cssClass?: string | string[];
  @Input() scheme?: string;
  @Input() slideOptions?: object;
  @Input() src!: string;
  @Input() srcFallback?: string;
  @Input() srcHighRes?: string;
  @Input() swipeToClose?: boolean;
  @Input() text?: string;
  @Input() title?: string;
  @Input() titleSize?: string;

  @HostListener('click') onClick() {
    this.viewImage(
      this.src,
      this.srcFallback,
      this.srcHighRes,
      this.title,
      this.titleSize,
      this.text,
      this.scheme,
      this.slideOptions,
      this.swipeToClose
    );
  }

  @HostListener('error', ['$event']) onError() {
    if (this.src !== this.el.nativeElement.src) {
      this.src = this.el.nativeElement.src;
    }
    if (this.srcFallback) {
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.srcFallback);
    }
  }

  ngOnInit() {
    if (!this.el.nativeElement.hasAttribute('src')) {
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.src);
    }
  }

  async viewImage(
    src: string,
    srcFallback = '',
    srcHighRes = '',
    title = '',
    titleSize = '',
    text = '',
    scheme = 'auto',
    slideOptions: object = {},
    swipeToClose = true
  ) {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src,
        srcFallback,
        srcHighRes,
        title,
        titleSize,
        text,
        scheme,
        slideOptions,
        swipeToClose
      },
      cssClass: this.cssClass && this.cssClass instanceof Array
        ? ['ion-img-viewer', ...this.cssClass]
        : ['ion-img-viewer', this.cssClass as string],
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }
}
