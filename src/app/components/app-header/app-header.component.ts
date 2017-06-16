import { Component, OnInit } from '@angular/core';
import { AppSidenavStateService} from '../app-sidenav/app-sidenav-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(private sidenavStateService: AppSidenavStateService) { }

  ngOnInit() {
  }

  get showNavigationToggle(): boolean {
    return this.sidenavStateService.isClosable;
  }

  toggleNavigation() {
    this.sidenavStateService.toggleNavigation();
  }
}