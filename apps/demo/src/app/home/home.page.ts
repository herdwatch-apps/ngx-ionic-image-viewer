import { Component, OnInit } from '@angular/core';
import {
  ModalController,
  IonContent,
  IonText,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonToggle,
  IonImg,
  IonAvatar, IonThumbnail, IonItemDivider, IonButton, IonToolbar, IonTitle, IonHeader
} from '@ionic/angular/standalone';
import { ViewerModalComponent, NgxIonicImageViewerComponent, NgxIonicImageViewerDirective } from '@herdwatch/ngx-ionic-image-viewer';
import { addIcons } from 'ionicons';
import { moon } from 'ionicons/icons';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    IonText,
    NgxIonicImageViewerComponent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonToggle,
    IonImg,
    NgxIonicImageViewerDirective,
    IonAvatar,
    IonThumbnail,
    IonItemDivider,
    IonButton,
    IonToolbar,
    IonTitle,
    IonHeader,
  ],
  standalone: true,
})
export default class HomePage implements OnInit {
  prefersDark = false;

  imgUrl = `https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?&q=80`;

  imgAvatar = {
    id: 237,
    src: 'https://picsum.photos/id/237/200/200.jpg',
    srcHighRes: 'https://picsum.photos/id/237/3500/2095.jpg',
    author: 'André Spieker',
  };
  imgThumbnail = {
    id: 1040,
    src: 'https://picsum.photos/id/1040/200/200.jpg',
    srcHighRes: 'https://picsum.photos/id/1040/4496/3000.jpg',
    author: 'Rachel Davis',
  };

  constructor(public modalController: ModalController) {
    addIcons({ moon });
  }

  ngOnInit() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.toggleTheme();
    }
    // console.log(
    //   window.__coverage__
    //     ? Object.keys(window.__coverage__)
    //     : console.error('__coverage__ not found'),
    // );
  }

  toggleTheme() {
    this.prefersDark = !this.prefersDark;
    document.body.classList.toggle('dark', this.prefersDark);
  }

  async openViewer() {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: this.imgUrl, // required
        title: 'Silhoutte (Programmatic)', // optional
        text: 'Photo by Mayur Gala on Unsplash', // optional
      },
      cssClass: 'ion-img-viewer', // required
      keyboardClose: true,
      showBackdrop: true,
    });

    return await modal.present();
  }
}
