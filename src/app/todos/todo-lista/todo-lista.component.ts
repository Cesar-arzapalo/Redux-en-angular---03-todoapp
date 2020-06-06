import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { FiltrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-lista',
  templateUrl: './todo-lista.component.html',
  styleUrls: ['./todo-lista.component.css']
})
export class TodoListaComponent implements OnInit {

  todoList: Todo[] = [];

  filtroActual: FiltrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(({todos, filtro}) => {
      this.todoList = todos;
      this.filtroActual = filtro;
    });
  }


}
