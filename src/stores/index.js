import { defineStore } from "pinia";
import axios from "axios";
import { sortByPin, defaultENTodos } from "@/utilities/helpers";
import { v4 as uuid4 } from "uuid";

axios.defaults.baseURL = "http://localhost:1323";

export const useStore = defineStore("main", {
  state: () => {
    return {
      todos: null,
      sortBy: localStorage.getItem("sortBy") || null,
      loading: false,
      theme: localStorage.getItem("theme") || "no-background", // no-background || background
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
        localStorage.setItem("todos", JSON.stringify(defaultENTodos));
        this.todos = defaultENTodos;
        return;
      }

      try {
        this.todos = JSON.parse(cacheTodos);
      } catch (error) {
        localStorage.setItem("todos", "[]");
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

      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    updateTodo({ id, title, desc }) {
      const i = this.todos.findIndex((value) => value.id === id);
      this.todos[i].title = title;
      this.todos[i].desc = desc;
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    deleteTodo({ id }) {
      const i = this.todos.findIndex((value) => value.id === id);

      if (i !== -1) {
        this.todos.splice(i, 1);
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    },
    doneOrUndoneTodo({ id, done }) {
      const i = this.todos.findIndex((value) => value.id === id);

      if (i !== -1) {
        this.todos[i].done = done;
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    },
    pinOrUnpinTodo({ id, pin }) {
      const i = this.todos.findIndex((value) => value.id === id);

      if (i !== -1) {
        this.todos[i].pin = pin;
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    },
  },
});
