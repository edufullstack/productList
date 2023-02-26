import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../action-types/ActionTypes'

export const mostrarAlerta = (alerta) => {
  return (dispatch) => {
    dispatch(crearAlerta(alerta))
  }
}

const crearAlerta = (alerta) => {
  return { type: MOSTRAR_ALERTA, payload: alerta }
}

export const ocultarAlertaAction = () => {
  return (dispatch) => {
    dispatch(ocultarAlerta())
  }
}

const ocultarAlerta = () => {
  return { type: OCULTAR_ALERTA }
}
