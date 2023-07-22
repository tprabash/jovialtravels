import { Component, OnInit } from '@angular/core';
import { Options } from 'sortablejs';

@Component({
  selector: 'app-sortablejs',
  templateUrl: './sortablejs.component.html',
  styleUrls: ['./sortablejs.component.scss']
})
export class SortablejsComponent implements OnInit {

  
  // - Simple List - //

  simpleItems = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6'
  ];





  // - Transfer Between Lists - //

  sharedItems1 = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6'
  ];

  sharedItems2 = [
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
    'Item 11',
    'Item 12'
  ];

  sharedOptions: Options = {
    group: 'shared-group',
  };





  // - Clone items - //

  cloneItems1 = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6'
  ];

  cloneItems2 = [
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
    'Item 11',
    'Item 12'
  ];

  clone1Options: Options = {
    group: {
      name: 'clone-group',
      pull: 'clone',
    },
  };

  clone2Options: Options = {
    group: {
      name: 'clone-group',
      pull: 'clone',
    },
  };





  // - Disabling Sorting - //

  disablingSortingItems1 = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6'
  ];

  disablingSortingItems2 = [
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
    'Item 11',
    'Item 12'
  ];

  disablingSorting1Options: Options = {
    group: {
      name: 'disable-group',
      pull: 'clone',
      put: false,
    },
    sort: false
  };

  disablingSorting2Options: Options = {
    group: {
      name: 'disable-group',
    },
  };





  // - Disabled options - //

  draggableItems = [
    { draggable: true, text: 'Item 1' },
    { draggable: true, text: 'Item 2' },
    { draggable: false, text: 'Item 3' },
    { draggable: true, text: 'Item 4' },
    { draggable: true, text: 'Item 5' }
  ];

  draggableOptions: Options = {
    draggable: '.draggable',
  };





  // - Events - //

  eventItems = [
    1,
    2,
    3,
    4,
    5
  ];

  eventUpdateCounter = 0;
  eventOptions: Options = {
    onUpdate: () => this.eventUpdateCounter++,
  };



  constructor() { }

  ngOnInit(): void {
  }

}
