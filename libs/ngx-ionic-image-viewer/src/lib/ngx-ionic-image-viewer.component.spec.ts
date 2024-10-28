import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgxIonicImageViewerComponent } from './ngx-ionic-image-viewer.component';
import { IonicModule } from '@ionic/angular';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NgxIonicImageViewerComponent', () => {
  let component: NgxIonicImageViewerComponent;
  let fixture: ComponentFixture<NgxIonicImageViewerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxIonicImageViewerComponent ],
      imports: [
        IonicModule.forRoot(),
      ],
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
