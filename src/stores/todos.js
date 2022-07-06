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
    todayLowTodos() {
      return sortByPin(
        this.todos.filter((v) => v.type === "daily" && v.force === "low")
      );
    },
    todayMediumTodos() {
      return sortByPin(
        this.todos.filter((v) => v.type === "daily" && v.force === "medium")
      );
    },
    todayHighTodos() {
      return sortByPin(
        this.todos.filter((v) => v.type === "daily" && v.force === "high")
      );
    },
    weeklyTodos() {
      return sortByPin(
        this.todos.filter((v) => v.type === "weekly" && v.force === "medium")
      );
    },
    monthlyTodos() {
      return sortByPin(
        this.todos.filter((v) => v.type === "monthly" && v.force === "medium")
      );
    },
    sixMonthlyTodos() {
      return sortByPin(
        this.todos.filter(
          (v) => v.type === "six-monthly" && v.force === "medium"
        )
      );
    },
    yearlyTodos() {
      return sortByPin(
        this.todos.filter((v) => v.type === "yearly" && v.force === "medium")
      );
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
        this.saveTodos([]);
        this.todos = [];
      }
    },
    createTodo({ title, desc, force, type, pin }) {
      this.todos.push({
        id: uuid4(),
        title,
        desc,
        force,
        type,
        pin,
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

      if (i !== -1) {
        this.todos.splice(i, 1);
        this.saveTodos();
      }
    },
    doneOrUndoneTodo({ id, done }) {
      const i = this.todos.findIndex((value) => value.id === id);

      if (i !== -1) {
        this.todos[i].done = done;
        this.saveTodos();
      }
    },
    pinOrUnpinTodo({ id, pin }) {
      const i = this.todos.findIndex((value) => value.id === id);

      if (i !== -1) {
        this.todos[i].pin = pin;
        this.saveTodos();
      }
    },
    saveTodos(defaultTodos) {
      localStorage.setItem("todos", JSON.stringify(defaultTodos ?? this.todos));
    },
  },
});
