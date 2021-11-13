import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { data } from '../data/data';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators'
import { FormControl } from '@angular/forms';
import { Idata } from '../interfaces/data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data:Idata[] = data;
  cloneData:Idata[] = data;
  searchText = new FormControl();
  searchSuscription = Subscription;

  @ViewChild('searchInput', { static: true}) searchInput: ElementRef

  constructor() { 
  }

  ngOnInit() {
    this.searchText.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe( (val) => {
      this.filterData({ name:val });
    })
  }

  filterData({name}:{name:string}){
    this.data = this.cloneData.filter(item => {
      return item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    })
  }

}
