import {createReducer, on, ActionCreator} from '@ngrx/store';
import { crear } from './todo.actiones';
import { Todo } from './models/todo.model';
import { Action } from 'rxjs/internal/scheduler/Action';


export const initialState: Todo[] =  [];

const _TODO_REDUCER = createReducer(
    initialState,     on(crear, (state, {texto}) => [ ...state, new Todo(texto)])
);

export function todoReducer(state: Todo[], action: ActionCreator){
    return _TODO_REDUCER(state, action);
}



