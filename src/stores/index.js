import { defineStore } from "pinia";
import axios from "axios";
import {
  sortByTime,
  sortByDone,
  sortByForce,
} from "@/utilities/helpers";

axios.defaults.baseURL = "http://localhost:1323";

export const useStore = defineStore("main", {
  state: () => {
    return {
      todos: null,
      sortBy: localStorage.getItem("sortBy") || null,
      loading: false,
    };
  },
  getters: {
    sortedTodos() {
      if (!this.todos) return [];
      if (this.sortBy === "time") return sortByTime(this.todos);
      if (this.sortBy === "done") return sortByDone(this.todos);
      if (this.sortBy === "force") return sortByForce(this.todos);
      else return sortByTime(this.todos);
    },
  },
  actions: {
    getTodos() {
      return axios
        .get("/get-todos")
        .then(({ data }) => {
          this.todos = sortByTime(data);
        })
        .catch((err) => {
          this.todos = err;
        });
    },
    createTodo({ name, desc, force }) {
      const formdata = new FormData();
      formdata.append("name", name);
      formdata.append("desc", desc);
      formdata.append("force", force);
      this.loading = true;
      return axios
        .post("/create-todo", formdata)
        .then(({ data }) => {
          this.todos && this.todos.push(data.todo);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    deleteTodo({ id }) {
      return axios.delete(`/delete-todo?id=${id}`).then(() => {
        this.todos.splice(
          this.todos.findIndex((value) => value._id === id),
          1
        );
      });
    },
    doneOrUndoneTodo({ id, done }) {
      const formdata = new FormData();
      formdata.append("id", id);
      formdata.append("done", done);
      return axios.patch("/done-or-undone-todo", formdata);
    },
    pinOrUnpinTodo({ id, pin }) {
      const formdata = new FormData();
      formdata.append("id", id);
      formdata.append("pin", pin);
      return axios.patch("/pin-or-unpin-todo", formdata).then(() => {
        const i = this.todos.findIndex((value) => value._id === id);
        this.todos[i].pin = pin;
        const t = this.todos[i];
        this.todos.splice(i, 1);
        if (pin) this.todos.unshift(t);
        else this.todos.push(t);
      });
    },
  },
});
