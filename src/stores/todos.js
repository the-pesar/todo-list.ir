import { defineStore } from "pinia";
import axios from "axios";
import { sortByPin, defaultENTodos } from "@/utilities/helpers";
import { v4 as uuid4 } from "uuid";

axios.defaults.baseURL = "http://localhost:1323";

export const useTodosStore = defineStore("todos-store", {
  state: () => {
    return {
      todos: null,
    };
  },
  getters: {
    lowTodos() {
      return sortByPin(this.todos.filter((v) => v.type === "low"));
    },
    mediumTodos() {
      return sortByPin(this.todos.filter((v) => v.type === "medium"));
    },
    highTodos() {
      return sortByPin(this.todos.filter((v) => v.type === "high"));
    },
  },
  actions: {
    getTodos() {
      const cacheTodos = localStorage.getItem("todos");

      if (!cacheTodos) {
        this.todos = defaultENTodos;
        this.saveTodos(defaultENTodos);
        return;
      }

      try {
        this.todos = JSON.parse(cacheTodos);
      } catch (error) {
        this.todos = [];
        this.saveTodos();
      }
    },
    createTodo({ title, desc, type }) {
      this.todos.push({
        id: uuid4(),
        title,
        desc,
        type,
        pin: false,
        done: false,
      });

      this.saveTodos();
    },
    updateTodo({ id, title, desc }) {
      const i = this.todos.findIndex((value) => value.id === id);

      this.todos[i].title = title;
      this.todos[i].desc = desc;
      this.saveTodos();
    },
    deleteTodo({ id }) {
      const i = this.todos.findIndex((value) => value.id === id);

      this.todos.splice(i, 1);
      this.saveTodos();
    },
    doneOrUndoneTodo({ id, done }) {
      const i = this.todos.findIndex((value) => value.id === id);

      this.todos[i].done = done;
      this.saveTodos();
    },
    pinOrUnpinTodo({ id, pin }) {
      const i = this.todos.findIndex((value) => value.id === id);

      this.todos[i].pin = pin;
      this.saveTodos();
    },
    saveTodos() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
});
