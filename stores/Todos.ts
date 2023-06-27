import { v4 as uuid4 } from "uuid"

const defaultTodos: ITodo[] = [
  {
    id: uuid4(),
    title: "Just For Test 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    level: "low",
    pin: false,
    done: false,
    archive: false,
  },
  {
    id: uuid4(),
    title: "Just For Test 2 🐾",
    description:
      "You can follow us on social media to help us progress and stay up to date with the latest updates",
    level: "low",
    pin: false,
    done: false,
    archive: false,
  },
  {
    id: uuid4(),
    title: "Just For Test 1",
    description:
      "You can follow us on social media to help us progress and stay up to date with the latest updates",
    level: "medium",
    pin: false,
    done: false,
    archive: false,
  },
  {
    id: uuid4(),
    title: "Just For Test 1 🌱",
    description:
      "You can follow us on social media to help us progress and stay up to date with the latest updates",
    level: "high",
    pin: false,
    done: false,
    archive: false,
  },
  {
    id: uuid4(),
    title: "Just For Test 2 🍄",
    description:
      "You can follow us on social media to help us progress and stay up to date with the latest updates",
    level: "high",
    pin: false,
    done: false,
    archive: false,
  },
  {
    id: uuid4(),
    title: "Just For Test 3",
    description:
      "You can follow us on social media to help us progress and stay up to date with the latest updates",
    level: "high",
    pin: false,
    done: false,
    archive: false,
  },
]

export const useTodosStore = defineStore("todos", () => {
  const todos = ref<ITodo[]>([])

  const lowTodos = computed<ITodo[]>(() =>
    todos.value.filter((v) => v.level === "low")
  )
  const mediumTodos = computed<ITodo[]>(() =>
    todos.value.filter((v) => v.level === "medium")
  )
  const highTodos = computed<ITodo[]>(() =>
    todos.value.filter((v) => v.level === "high")
  )

  const cachedTodos = localStorage.getItem("todos")
  todos.value = cachedTodos ? JSON.parse(cachedTodos) : [...defaultTodos]
  saveTodos()

  function createTodo({ title, description, level }: ICreateTodo): ITodo {
    const todo = {
      id: uuid4(),
      title,
      description,
      level,
      pin: false,
      done: false,
      archive: false,
    }
    todos.value.push(todo)
    saveTodos()
    console.log(todos.value)

    return todo
  }
  function doneToggleTodo({ id, done }: IDoneToggleTodo): ITodo {
    const i = todos.value.findIndex((value) => value.id === id)
    todos.value[i].done = done
    saveTodos()
    console.log(todos.value)
    return todos.value[i]
  }
  function updateTodo({ id, title, description }: IUpdateTodo): ITodo {
    const i = todos.value.findIndex((value) => value.id === id)

    todos.value[i].title = title
    todos.value[i].description = description
    saveTodos()
    return todos.value[i]
  }
  function deleteTodo({ id }: IDeleteTodo) {
    const i = todos.value.findIndex((value) => value.id === id)

    todos.value.splice(i, 1)
    saveTodos()
  }
  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos.value))
  }
  return { todos, lowTodos, mediumTodos, highTodos, createTodo, doneToggleTodo }
})
