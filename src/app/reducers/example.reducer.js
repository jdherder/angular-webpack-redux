import constants from '../app.constants';

const initialState = {
  text: 'Awesome!',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.UPDATE_EXAMPLE_TEXT:
      return Object.assign({}, state, {
        text: action.payload,
      });
    default:
      return state;
  }
}
