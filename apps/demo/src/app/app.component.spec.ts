import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

import { AppComponent } from './app.component';
import { NgxIonicImageViewerModule } from '@herdwatch/ngx-ionic-image-viewer';
import { MockInstance } from 'ng-mocks';

describe('AppComponent', () => {

  let platformMock: { ready: jest.Mock };
  let statusBarMock: { styleDefault: jest.Mock };
  let splashScreenSpy: { hide: jest.Mock } ;

  beforeEach((() => {
    platformMock = {
      ready: MockInstance(Platform, 'ready', jest.fn(() => Promise.resolve()) as jest.Mock  )
    };

    statusBarMock = {
      styleDefault: MockInstance(StatusBar, 'styleDefault', jest.fn()  )
    };

    splashScreenSpy = {
      hide: MockInstance(SplashScreen, 'hide', jest.fn()  )
    };

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: StatusBar, useValue: statusBarMock },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformMock },
      ],
      imports: [NgxIonicImageViewerModule]
    }).compileComponents();
  }));

  xit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformMock.ready).toHaveBeenCalled();
    await platformMock.ready;
    expect(statusBarMock.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
  });

  // TODO: add more tests!

});
