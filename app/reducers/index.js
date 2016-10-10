const socialApp = (
  state = {},
  action
) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        test: 'test',
      };
    default:
      return state;
  }
}

export default socialApp;
