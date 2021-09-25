import * as type from './types';

export const setResponsable = (payload) => ({
  type: type.SET_RESPONSABLE,
  payload,
});

export const setSuccessResponsable = () => ({
  type: type.SET_SUCCESS_RESPONSABLE,
});

export const setLoadingState = (payload) => ({
  type: type.SET_LOADING,
  payload,
});

export const getResponsables = () => ({
  type: type.GET_RESPONSABLES,
});

export const setResponsableList = (payload) => ({
  type: type.SET_RESPONSABLE_LIST,
  payload,
});

export const updateResponsable = (payload) => ({
  type: type.UPDATE_RESPONSABLE,
  payload,
});

export const setSuccesUpdatedResponsable = () => ({
  type: type.SET_SUCCESS_UPDATE_RESPONSABLE,
});
