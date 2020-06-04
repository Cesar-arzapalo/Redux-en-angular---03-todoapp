import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListaComponent } from './todo-lista/todo-lista.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoAddComponent,
    TodoListaComponent,
    TodoItemComponent,
    TodoPageComponent,
    TodoFooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoPageComponent
  ]
})
export class TodoModule { }
