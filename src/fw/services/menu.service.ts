import {Injectable} from '@angular/core';

export interface MenuItem{
    text: string,
    route: string,
    submenu: Array<MenuItem>
}

@Injectable()
export class MenuService{
    items: Array<MenuItem>;
    isVertical = false;
    showingLeftSideMenu = false;

toogleLeftSideMenu() : void{
    this.isVertical = true;
    this.showingLeftSideMenu = !this.showingLeftSideMenu;
}

}