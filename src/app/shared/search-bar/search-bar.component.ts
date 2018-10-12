import { Component, OnInit, ViewChild, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { query } from '@angular/animations';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  @ViewChild('search') search;
  @Output() searchKey =  new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  

  @HostListener('keyup')
  keyup(){
    console.log(this.search.nativeElement.value);
    this.searchKey.emit(this.search.nativeElement.value);
  }

}
