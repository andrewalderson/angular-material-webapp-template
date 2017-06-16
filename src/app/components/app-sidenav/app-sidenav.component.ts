import { Component, OnInit } from '@angular/core';

import { AppSidenavStateService } from "./app-sidenav-state.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './app-sidenav.component.html',
  styleUrls: ['./app-sidenav.component.scss']
})
export class AppSidenavComponent implements OnInit {

  constructor(private sidenavStateService: AppSidenavStateService) {

  }

  ngOnInit() {
  }

  get navigationOpened(): boolean {
    return this.sidenavStateService.isOpen;
  }

  get navigationMode(): string {
    return this.sidenavStateService.isClosable ? 'over' : 'side';
  }
}