import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import * as ActionTodo from '../todo.actions';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.actualizarFormulario();
    this.formListener();
  }

  crearFormulario(){
   this.form = this.fb.group({
    todo: ['', Validators.required]
   });
  }

  actualizarFormulario(){
    this.form.reset({
      todo: ''
    });
  }

  agregar(){
    if (this.form.get('todo').invalid) {
      return;
    }
    this.store.dispatch(ActionTodo.crear({texto: this.form.get('todo').value}));
    this.form.get('todo').setValue('');
  }

  formListener(){
    this.form.valueChanges.subscribe( (form) => console.log(form));
  }

}
