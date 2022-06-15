export const sortByPin = (todos) => {
  const sortedTodos = [];
  todos.forEach((value) => {
    if (value.pin) {
      sortedTodos.unshift(value);
    } else {
      sortedTodos.push(value);
    }
  });

  return sortedTodos;
};

export const sortByTime = (todos) => {
  todos = todos.map((v) => {
    v.date = new Date(v.date);
    return v;
  });
  todos.sort((a, b) => a.date - b.date);

  return sortByPin(todos);
};

export const sortByDone = (todos) => {
  todos.sort((a, b) => a.done - b.done);
  return sortByPin(todos.reverse());
};

export const sortByForce = (todos) => {
  todos.sort((a, b) => a.force - b.force);
  return sortByPin(todos.reverse());
};
