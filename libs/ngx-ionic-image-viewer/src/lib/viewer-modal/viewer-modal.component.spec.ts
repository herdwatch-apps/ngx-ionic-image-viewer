import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewerModalComponent } from './viewer-modal.component';
import { IonicModule } from '@ionic/angular';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ViewerModalComponent', () => {
  let component: ViewerModalComponent;
  let fixture: ComponentFixture<ViewerModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerModalComponent ],
      imports: [
        IonicModule.forRoot(),
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
