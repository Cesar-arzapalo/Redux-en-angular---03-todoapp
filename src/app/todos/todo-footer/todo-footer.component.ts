import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as FiltrosAction from '../../filtro/filtro.actions';
import { FiltrosValidos } from '../../filtro/filtro.actions';
import { borrarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual: FiltrosAction.FiltrosValidos;
  filtros: FiltrosValidos[] = ['todos', 'completados', 'pendientes'];
  pendientes: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe( ({todos, filtro}) => {
      this.filtroActual = filtro;
      this.pendientes = todos.filter( todo => !todo.completado).length;
    });
  }

  modificarFiltro(filter: FiltrosValidos){
    this.filtroActual = filter;
    this.store.dispatch(FiltrosAction.setFilter({filtro: filter}));
  }

  borrarCompletados(){
    this.store.dispatch(borrarCompletados());
  }

}
