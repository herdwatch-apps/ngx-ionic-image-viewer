import { makeEnvironmentProviders, Provider } from '@angular/core';
import { NgxIonicImageViewerService } from './ngx-ionic-image-viewer.service';

export function provideNgxIonicImageViewer(): Provider[] {
  return [
    NgxIonicImageViewerService
  ];
}

export function provideEnvironmentNgxIonicImageViewer() {
  return makeEnvironmentProviders(provideNgxIonicImageViewer());
}
