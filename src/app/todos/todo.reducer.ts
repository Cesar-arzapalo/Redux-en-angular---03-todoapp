import {createReducer, on, ActionCreator, State} from '@ngrx/store';
import { crear, toggle, edit, borrar, toggleAll } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] =  [
    new Todo('salvar al mundo'),
    new Todo('vencer a thanos'),
    new Todo('comprar el traje de ironman'),
    new Todo('robar el escudo del capitan america')];

const _TODO_REDUCER = createReducer(
    initialState,
    on(crear, (state, {texto}) => [ ...state, new Todo(texto)]),
    on(toggle, (state, {id}) => {

        return state.map(todo => {
            if (todo.id === id){
                return {
                    ...todo,
                    completado: !todo.completado
                };
            }else{
                return todo;
            }

        });
    }),
    on (toggleAll, (state, {completadoAllValue}) =>  state.map(todo => {
        return {...todo, completado: completadoAllValue};
    })),
    on(edit, (state, {txt, id}) => {
        return state.map( todo => {
            if (todo.id === id){
                return {
                    ...todo,
                    texto: txt
                };
            }else{
                return todo;
            }
        });
    }),
    on (borrar, (state, {id}) => state.filter( todo => todo.id !== id ))

);

export function todoReducer(state: Todo[], action: ActionCreator){
    return _TODO_REDUCER(state, action);
}



