import { Component } from '@angular/core';
import { SidenavStateService} from 'app/shared';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

  constructor(private sidenavStateService: SidenavStateService) { }

  get showNavigationToggle(): boolean {
    return this.sidenavStateService.isClosable;
  }

  toggleNavigationOpenState() {
    this.sidenavStateService.toggleNavigationOpenState();
  }
}