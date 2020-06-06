import { createAction, props } from '@ngrx/store';

export type FiltrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFilter = createAction('[Filtro] set filter', props<{filtro: FiltrosValidos}>());
