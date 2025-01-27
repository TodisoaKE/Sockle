import { Injectable } from '@angular/core';
import { ISideBar } from '../../../../models/sidebar.model';
import { SIDEBAR } from '../../../../constants/sidebar.constant';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public sidebar: ISideBar[] = SIDEBAR;

  toggleSubItems(item: ISideBar): void {
    item.showSubLink = !item.showSubLink;
    this.sidebar.forEach(sidebarItem => {
      if(item !== sidebarItem) {
        sidebarItem.showSubLink = false;
      }
    })
  }
}
