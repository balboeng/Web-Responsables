import * as type from './types';

const initialState: Object = {
  responsables: {},
  succesReqResponsable: false,
  showLoader: false,
  updatedResponsable: false,
};

export default function responsable(state = initialState, action) {
  switch (action.type) {
    case type.SET_RESPONSABLE:
      return {
        ...state,
        responsable: action.payload,
      };
    case type.SET_SUCCESS_RESPONSABLE:
      return {
        ...state,
        succesReqResponsable: true,
      };
    case type.SET_LOADING:
      return {
        ...state,
        showLoader: action.payload,
      };
    case type.SET_RESPONSABLE_LIST:
      return {
        ...state,
        responsables: action.payload,
      };
    case type.SET_SUCCESS_UPDATE_RESPONSABLE:
      return {
        ...state,
        updatedResponsable: true,
      };
    default:
      return state;
  }
}
