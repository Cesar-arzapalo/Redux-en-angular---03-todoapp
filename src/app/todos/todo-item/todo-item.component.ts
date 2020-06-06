import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';

import * as ActionTodo from '../todo.actions';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('InputFisico') txtInputFisico: ElementRef;
  form: FormGroup;

  editando = false;

  constructor( private store: Store<AppState>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.checkListener();
    this.textListener();
  }

  crearFormulario(){
    this.form = this.fb.group({
      checkCompletado: [this.todo.completado],
      txtInput: [this.todo.texto, Validators.required]
    });
  }

  editar(){
    this.editando = true;
    setTimeout(() => this.txtInputFisico.nativeElement.focus(),  1  );

  }

  borrar(){
    this.store.dispatch(ActionTodo.borrar({id: this.todo.id}));
  }

  checkListener(){
    this.form.get('checkCompletado').valueChanges.subscribe(value => {
      this.store.dispatch(ActionTodo.toggle({id: this.todo.id}));
      console.log(value);
    });
  }

  textListener(){
    this.form.get('txtInput').valueChanges.subscribe( value => console.log(value));
  }

  terminarEdicion(){
    this.editando = false;

    if (this.form.get('txtInput').invalid || this.form.get('txtInput').value === this.todo.texto){
      return;
    }

    this.store.dispatch(ActionTodo.edit({txt: this.form.get('txtInput').value, id: this.todo.id}));
  }

}
