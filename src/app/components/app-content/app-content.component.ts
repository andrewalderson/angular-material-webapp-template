import { Component, OnInit } from '@angular/core';

import { SidenavStateService } from "app/shared";

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {

  constructor(private sidenavStateService: SidenavStateService) {

  }

  ngOnInit() {
  }

  get navigationOpened(): boolean {
    return this.sidenavStateService.isOpen;
  }

  get navigationMode(): string {
    return this.sidenavStateService.isClosable ? 'over' : 'side';
  }

  get navigationCollapsed(): boolean {
    return this.sidenavStateService.navigationCollapsed;
  }

  get navigationCanBeCollapsed(): boolean {
    return this.navigationMode === 'side';
  }

  toggleNavigationCollapsedState() {
    this.sidenavStateService.toggleNavigationCollapsedState();
  }
}