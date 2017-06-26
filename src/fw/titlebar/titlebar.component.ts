import { Component, OnInit } from '@angular/core';
import{ScreenService} from '../services/screen.service';
import {MenuService} from '../services/menu.service';
@Component({
  selector: 'fw-title-bar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor(private screenService:ScreenService,private menuService:MenuService) { }

  ngOnInit() {
  }

}
