import { Component, OnInit } from '@angular/core';
import { SidenavStateService} from 'app/shared';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(private sidenavStateService: SidenavStateService) { }

  ngOnInit() {
  }

  get showNavigationToggle(): boolean {
    return this.sidenavStateService.isClosable;
  }

  toggleNavigationOpenState() {
    this.sidenavStateService.toggleNavigationOpenState();
  }
}