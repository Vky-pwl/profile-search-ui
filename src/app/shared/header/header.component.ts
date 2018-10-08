import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../../core/app-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuState : string = 'in';
  constructor(private appState: AppStateService) { }

  ngOnInit() {
    this.appState.toggleMenu$.subscribe(state => {
      this.menuState = state;
    });
  }

  toggleMenu(){
  this.appState.toggleMenu$.next(this.menuState === 'out' ? 'in' : 'out');
  debugger;
  }

}
