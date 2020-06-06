import { createReducer, on, ActionCreator } from '@ngrx/store';
import { setFilter, FiltrosValidos } from './filtro.actions';


export const initialState: FiltrosValidos = 'todos';

const _FILTER_REDUCER = createReducer( initialState,
    on (setFilter, (state, {filtro}) => filtro)) ;

export function filtroReducer(state: FiltrosValidos, action: ActionCreator){
    return _FILTER_REDUCER(state, action);
}

