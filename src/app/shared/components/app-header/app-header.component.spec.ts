import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from "@angular/material";
import { AppHeaderComponent } from './app-header.component';
import { AppSidenavStateService } from '../app-sidenav/app-sidenav-state.service';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

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
      declarations: [AppHeaderComponent],
      imports: [MaterialModule],
      providers: [{ provide: AppSidenavStateService, useValue: serviceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
