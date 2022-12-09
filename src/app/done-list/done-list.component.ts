import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css'],
})
export class DoneListComponent implements OnInit {
  constructor() {}

  public items_done = [
    'Tarefa número 1',
    'Tarefa número 2',
    'Tarefa número 3',
    'Tarefa número 4',
  ];
  public tarefa = '';

  removeTarefa(item) {
    this.items_done.splice(this.items_done.indexOf(item), 1);
    localStorage.setItem('items_done', JSON.stringify(this.items_done));
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('items_done-done')) != null)
      this.items_done = JSON.parse(localStorage.getItem('items_done-done'));
  }
}
