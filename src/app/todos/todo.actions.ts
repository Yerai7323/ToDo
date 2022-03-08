import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crear todo',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const editar = createAction(
  '[TODO] Editar Todo',
  props<{ id: number, texto: string }>()
);

export const eliminar = createAction(
  '[TODO] Eliminar Todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] ToggleAll Todo',
  props<{ completado: boolean }>()
);

export const eliminarCompletados = createAction(
  '[TODO] Eliminar Todo completados'
);