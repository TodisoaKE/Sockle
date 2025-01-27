import { Component, inject, OnInit } from '@angular/core';
import { SIDEBAR } from '../../../constants/sidebar.constant';
import { ISideBar } from '../../../models/sidebar.model';
import { SidebarService } from '../../services/layout/sidebar/sidebar.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sider',
  standalone: true,
  imports: [],
  templateUrl: './sider.component.html',
  styleUrl: './sider.component.scss'
})
export class SiderComponent implements OnInit {
  public sidebar: ISideBar[] = SIDEBAR;
  _sidebarService = inject(SidebarService);
  _router = inject(Router);

  ngOnInit(): void {
    this.sidebar = this._sidebarService.sidebar;
    this.restoreSubLinksState();
  }
  
  restoreSubLinksState(): void {
    const currentRoute = this._router.url;
    this.sidebar.forEach(item => {
      item.showSubLink = item.children.some(child => child?.url ? currentRoute.includes(child.url) : '' );
    });
  }
  onClickOnSubItems(item: ISideBar) {
    this._sidebarService.toggleSubItems(item);
  }
}
