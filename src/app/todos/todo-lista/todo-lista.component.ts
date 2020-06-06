import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-todo-lista',
  templateUrl: './todo-lista.component.html',
  styleUrls: ['./todo-lista.component.css']
})
export class TodoListaComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('todo').subscribe(value => this.todos = value);
  }


}
