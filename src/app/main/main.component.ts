import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { AppStateService } from '../core/app-state.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('sideBarIn', [
      state('in', style({
        left:'0'
      })),
      state('out', style({
        left:'-225px'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
    trigger('mainContentIn', [
      state('in', style({
        marginLeft:'225px',
        width:'calc(100% - 225px)'
      })),
      state('out', style({
        width:'100%'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]

})
export class MainComponent implements OnInit {

  constructor(private appState: AppStateService) { }
  menuState:string = 'in';
 


  ngOnInit() {
    this.appState.toggleMenu$.subscribe(state => {
      this.menuState = state;
    });
  }

}
