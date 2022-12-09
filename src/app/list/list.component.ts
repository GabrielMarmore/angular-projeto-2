import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public items = [
    'Tarefa número 1',
    'Tarefa número 2',
    'Tarefa número 3',
    'Tarefa número 4',
  ];
  public tarefa = '';

  addTarefa() {
    this.items.push(this.tarefa);
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  removeTarefa(item) {
    this.items.splice(this.items.indexOf(item), 1);
    localStorage.setItem('items', JSON.stringify(this.items));
  }
  /*
  localStorage.setItem('user', this.login);
  localStorage.setItem('password', this.password);
  */
  ngOnInit() {
    if (JSON.parse(localStorage.getItem('items')) != null)
      this.items = JSON.parse(localStorage.getItem('items'));
  }
}
