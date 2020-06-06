import {createAction, props} from '@ngrx/store';

export const crear = createAction(
    '[TODO] crear todo',
    props<{texto: string}>()
);

export const toggle = createAction(
    '[TODO] Toggle todo',
    props<{id: number}>()
);

export const toggleAll = createAction(
    '[TODO] ToggleAll todo',
    props<{completadoAllValue: boolean}>()
);

export const edit = createAction(
    '[TODO] Edit todo',
    props<{txt: string, id: number}>()
);

export const borrar = createAction(
    '[TODO] Borrar todo',
    props<{id: number}>()
);
