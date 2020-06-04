import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';

import { TodoAddComponent } from './todos/todo-add/todo-add.component';
import { TodoListaComponent } from './todos/todo-lista/todo-lista.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { TodoPageComponent } from './todos/todo-page/todo-page.component';
import { TodoFooterComponent } from './todos/todo-footer/todo-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoListaComponent,
    TodoItemComponent,
    TodoPageComponent,
    TodoFooterComponent
  ],
  imports: [
    BrowserModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
