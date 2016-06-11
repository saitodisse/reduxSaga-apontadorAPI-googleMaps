export function counter(state, action) {
  switch (action.type) {
  case 'RESET':
    return state.set('count', 0);

  case 'INCREMENT':
    return state.set('count', state.get('count') + 1);

  case 'DECREMENT':
    return state.set('count', state.get('count') - 1);

  case 'INCREMENT_IF_ODD':
    if (state.get('count') % 2 !== 0) {
      return state.set('count', state.get('count') + 1);
    }
    return state;

  default:
    return state;
  }
}

export function showLoading(state, action) {
  switch (action.type) {
  case 'SHOW_LOADING':
    return state.set('displayLoading', true);

  case 'HIDE_LOADING':
    return state.set('displayLoading', false);

  default:
    return state;
  }
}

export function fetchToken(state, action) {
  switch (action.type) {

  case 'FETCH_TOKEN_isRequesting':
    return state.set('isRequesting', true);

  case 'FETCH_TOKEN_RESULT':
    return state
      .set('isRequesting', false)
      .set('tokenData', action.data);

  default:
    return state;
  }
}
