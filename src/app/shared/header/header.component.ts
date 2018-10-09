import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppStateService } from '../../core/app-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideMenu  = new EventEmitter<boolean>();
  toggle:boolean = false;

  constructor() { }

  ngOnInit() {
 
  }

  toggleSideBar(){
    this.toggle = !this.toggle;
    this.toggleSideMenu.emit(true);
  }

}
