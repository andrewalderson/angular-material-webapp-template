import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContentComponent } from './app-content.component';
import { WindowSizeService } from '../../shared/window-size.service';
import { SidenavStateService } from './sidenav-state.service';

describe('AppSidenavComponent', () => {
  let component: AppContentComponent;
  let fixture: ComponentFixture<AppContentComponent>;

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
      declarations: [AppContentComponent],
      providers: [{ provide: SidenavStateService, useValue: serviceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
