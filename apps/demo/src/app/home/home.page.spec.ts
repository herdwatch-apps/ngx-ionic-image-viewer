import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideEnvironmentNgxIonicImageViewer } from '@herdwatch/ngx-ionic-image-viewer';

import HomePage from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      providers: [provideIonicAngular(), provideEnvironmentNgxIonicImageViewer()],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
