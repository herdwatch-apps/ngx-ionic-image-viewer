import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {NgxIonicImageViewerComponent} from './ngx-ionic-image-viewer.component';
import {NgxIonicImageViewerDirective} from './ngx-ionic-image-viewer.directive';
import {ViewerModalComponent} from './viewer-modal/viewer-modal.component';

@NgModule({
  declarations: [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent],
  imports: [CommonModule, IonicModule],
  exports: [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgxIonicImageViewerModule {
}
