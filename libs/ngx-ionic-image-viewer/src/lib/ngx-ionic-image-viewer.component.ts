// tslint:disable-next-line

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from './viewer-modal/viewer-modal.component';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'ion-img-viewer',
  templateUrl: './ngx-ionic-image-viewer.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class NgxIonicImageViewerComponent implements OnInit {
  @Input() alt?: string;
  @Input() cssClass?: string | string[];
  @Input() scheme?: string;
  @Input() slideOptions?: object;
  @Input() src!: string | undefined;
  @Input() srcFallback?: string;
  @Input() srcHighRes?: string;
  @Input() swipeToClose?: boolean;
  @Input() text?: string;
  @Input() title?: string;
  @Input() titleSize?: string;

  constructor(public modalController: ModalController) {}

  async viewImage(
    src: string | undefined,
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

  ngOnInit() {
    /* do nothing */
  }
}
