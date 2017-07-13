import constants from '../app.constants';

function updateExampleData(data) {
  return {
    type: constants.UPDATE_EXAMPLE_TEXT,
    payload: data,
  };
}

export default { updateExampleData };
