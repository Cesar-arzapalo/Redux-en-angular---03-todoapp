import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as ActionTodo from '../todo.actions';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  form: FormGroup;
  toogleAll: boolean;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.toogleAll = false;
  }

  ngOnInit(): void {
  }


  toggle_all(){
    this.toogleAll = !this.toogleAll;
    this.store.dispatch(ActionTodo.toggleAll({completadoAllValue: this.toogleAll}));
  }

}
