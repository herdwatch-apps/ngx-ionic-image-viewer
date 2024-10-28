import { TestBed } from '@angular/core/testing';

import { NgxIonicImageViewerService } from './ngx-ionic-image-viewer.service';

describe('NgxIonicImageViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({providers: [NgxIonicImageViewerService]}));

  it('should be created', () => {
    const service = TestBed.inject(NgxIonicImageViewerService);
    expect(service).toBeTruthy();
  });
});
