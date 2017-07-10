import { Component, ViewChild } from '@angular/core';
import { MdMenuTrigger } from '@angular/material';

@Component({
  selector: 'settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent {

  constructor() { }

  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;

  openMenu() {
    this.trigger.openMenu();
  }
}
