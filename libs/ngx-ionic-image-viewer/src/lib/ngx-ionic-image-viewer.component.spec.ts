import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { provideIonicAngular } from '@ionic/angular/standalone';

import { NgxIonicImageViewerComponent } from './ngx-ionic-image-viewer.component';
import { provideNgxIonicImageViewer } from './ngx-ionic-image-viewer.providers';

describe('NgxIonicImageViewerComponent', () => {
  let component: NgxIonicImageViewerComponent;
  let fixture: ComponentFixture<NgxIonicImageViewerComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [NgxIonicImageViewerComponent],
      providers: [provideNgxIonicImageViewer(), provideIonicAngular()],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxIonicImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
