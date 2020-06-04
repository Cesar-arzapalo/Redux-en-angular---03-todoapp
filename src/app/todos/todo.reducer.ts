import {createReducer, on, ActionCreator} from '@ngrx/store';
import { crear } from './todo.actions';
import { Todo } from './models/todo.model';
import { Action } from 'rxjs/internal/scheduler/Action';


export const initialState: Todo[] =  [
    new Todo('salvar al mundo'),
    new Todo('vencer a thanos'),
    new Todo('comprar el traje de ironman'),
    new Todo('robar el escudo del capitan america')];

const _TODO_REDUCER = createReducer(
    initialState,     on(crear, (state, {texto}) => [ ...state, new Todo(texto)])
);

export function todoReducer(state: Todo[], action: ActionCreator){
    return _TODO_REDUCER(state, action);
}



