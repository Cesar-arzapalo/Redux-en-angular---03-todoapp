import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.actualizarFormulario();
    this.formListener();
  }

  crearFormulario(){
   this.form = this.fb.group({
    todo: ['']
   });
  }

  actualizarFormulario(){
    this.form.reset({
      todo: ['hola']
    });
  }

  formListener(){
    this.form.valueChanges.subscribe( (form) => console.log(form));
  }

}
