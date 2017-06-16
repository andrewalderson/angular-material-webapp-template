import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidenavComponent } from './app-sidenav.component';
import { WindowSizeService } from '../../shared/window-size.service';
import { AppSidenavStateService } from './app-sidenav-state.service';

describe('AppSidenavComponent', () => {
  let component: AppSidenavComponent;
  let fixture: ComponentFixture<AppSidenavComponent>;

  const serviceStub = {
    get isOpen() {
      return true;
    },
    get isClosable() {
      return false;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppSidenavComponent],
      providers: [{ provide: AppSidenavStateService, useValue: serviceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
