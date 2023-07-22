import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-chips',
  templateUrl: './ngx-chips.component.html',
  styleUrls: ['./ngx-chips.component.scss']
})
export class NgxChipsComponent implements OnInit {

  items = ['Pizza', 'Pasta', 'Parmesan'];
  itemsAsObjects = [{id: 0, name: 'Pizza', readonly: true}, {id: 1, name: 'Pasta'}, {id: 2, name: 'Parmesan', readonly: true}];
  itemsWithMaxLimit = ['Pizza', 'Pasta', 'Parmesan'];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(item: any) {
    console.log('tag added: value is ' + item.value);
  }

  onSelect(item: any) {
    console.log('tag selected: value is ' + item);
  }

  onTagEdited(item: any) {
    console.log('tag edited: current value is ' + item);    
  }

  onTextChange(text: any) {
    console.log('text changed: value is ' + text);
  }

}
