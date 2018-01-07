import {
  LOADING_COMPLETED,
  LOADING_STARTED
} from 'constants/loaderConst';

export const finishLoading  = ()  =>	({
  type: LOADING_COMPLETED
});

export const startLoading  = () =>	({
  type: LOADING_STARTED
});

