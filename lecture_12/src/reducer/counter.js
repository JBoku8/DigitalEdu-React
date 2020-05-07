function reducer(prevState, action) {
  switch (action.type) {
    default:
      throw new SyntaxError('Something went wrong');

    case 'PLUS':
      return { count: prevState.count + 1 };
    case 'MINUS':
      return { count: prevState.count - 1 };
    case 'RESET':
      return { count: 0 };
  }
}

export default reducer;
