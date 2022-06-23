import { v4 as uuid4 } from "uuid";

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

export const fakeLoading = (s) => {
  return new Promise((resolve) => setTimeout(() => resolve(), s));
};

export const defaultENTodos = [
  {
    id: uuid4(),
    title: "Follow ToDoList on Social Networks 🌎",
    desc: "You can follow us on social media to help us progress and stay up to date with the latest updates",
    force: "medium", // low - medium - high
    type: "daily", // daily - weekly - monthly - six-monthly - yearly
    draging: false,
    dragOver: false,
    pin: false,
    done: false,
  },
  {
    id: uuid4(),
    title: "Donate to us 💎",
    desc: "We need money to keep this platform alive",
    force: "high",
    type: "daily",
    draging: false,
    dragOver: false,
    pin: false,
    done: false,
  },
  {
    id: uuid4(),
    title: "Introduce ToDoList to your friends 🧠",
    desc: "Help your friends manage their time better",
    force: "low",
    type: "daily",
    draging: false,
    dragOver: false,
    pin: false,
    done: false,
  },
  {
    id: uuid4(),
    title: "Read the guide section 📿",
    desc: "To use the ToDoList better, be sure to read its guide so that you do not get into trouble later",
    force: "high",
    type: "daily",
    draging: false,
    dragOver: false,
    pin: false,
    done: false,
  },
  {
    id: uuid4(),
    title: "🏀🏀🏀🏀🏀🏀🏀🏀🏀🏀🏀🏀🏀🏀",
    desc: "To use the ToDoList better, be sure to read its guide so that you do not get into trouble later",
    force: "low",
    type: "daily",
    draging: false,
    dragOver: false,
    pin: false,
    done: false,
  },
  {
    id: uuid4(),
    title: "🇮🇷🇮🇷🇮🇷🇮🇷🇮🇷🇮🇷🇮🇷🇮🇷🇮🇷🇮🇷🇮🇷🇮🇷",
    desc: "To use the ToDoList better, be sure to read its guide so that you do not get into trouble later",
    force: "medium",
    type: "daily",
    draging: false,
    dragOver: false,
    pin: false,
    done: false,
  },
  {
    id: uuid4(),
    title: "🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿",
    desc: "To use the ToDoList better, be sure to read its guide so that you do not get into trouble later",
    force: "high",
    type: "daily",
    draging: false,
    dragOver: false,
    pin: false,
    done: false,
  },
  {
    id: uuid4(),
    title: "❌❌❌❌❌❌",
    desc: "To use the ToDoList better, be sure to read its guide so that you do not get into trouble later",
    force: "medium",
    type: "daily",
    draging: false,
    dragOver: false,
    pin: false,
    done: false,
  },
  {
    id: uuid4(),
    title: "🚸🚸🚸🚸🚸🚸🚸🚸🚸🚸🚸🚸🚸",
    desc: "To use the ToDoList better, be sure to read its guide so that you do not get into trouble later",
    force: "high",
    type: "daily",
    draging: false,
    dragOver: false,
    pin: false,
    done: false,
  },
];
