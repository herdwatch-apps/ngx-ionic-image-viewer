import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from "@angular/router";
import { MockInstance, MockBuilder } from 'ng-mocks';
import { BrowserModule } from '@angular/platform-browser';
import { Platform } from '@ionic/angular/standalone';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let platformMock: {
    ready: jest.Mock,
    backButton: {
      subscribeWithPriority: jest.Mock
    }
  };
  let statusBarMock: { styleDefault: jest.Mock };
  let splashScreenSpy: { hide: jest.Mock } ;

  beforeEach((() => {
    platformMock = {
      ready: MockInstance(Platform, 'ready', jest.fn(() => Promise.resolve()) as jest.Mock  ),
      backButton: {
        subscribeWithPriority: jest.fn(() => Promise.resolve())
      }
    };

    statusBarMock = {
      styleDefault: MockInstance(StatusBar, 'styleDefault', jest.fn()  )
    };

    splashScreenSpy = {
      hide: MockInstance(SplashScreen, 'hide', jest.fn()  )
    };

    TestBed.configureTestingModule({
      imports: [BrowserModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideRouter([]),
        { provide: StatusBar, useValue: statusBarMock },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformMock },
      ],
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
