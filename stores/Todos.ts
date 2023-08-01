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
  {
    id: uuid4(),
    title: "Just For Test 98 🍄",
    description:
      "You can follow us on social media to help us progress and stay up to date with the latest updates",
    level: "low",
    pin: false,
    done: true,
    archive: true,
  },
  {
    id: uuid4(),
    title: "Just For Test 99",
    description:
      "You can follow us on social media to help us progress and stay up to date with the latest updates",
    level: "high",
    pin: false,
    done: false,
    archive: true,
  },
]

export const useTodosStore = defineStore("todos", () => {
  const todos = ref<ITodo[]>([])

  const cachedTodos = localStorage.getItem("todos")
  todos.value = cachedTodos ? JSON.parse(cachedTodos) : [...defaultTodos]
  saveTodos()

  // Utility function to find a todo index by ID
  function findTodoIndexById(id: string): number {
    return todos.value.findIndex((todo) => todo.id === id)
  }

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
    return todo
  }
  function doneToggleTodo({ id, done }: IDoneToggleTodo): ITodo {
    const i = findTodoIndexById(id)
    todos.value[i].done = done
    saveTodos()
    return todos.value[i]
  }
  function updateTodo({ id, title, description }: IUpdateTodo): ITodo {
    const i = findTodoIndexById(id)
    todos.value[i].title = title
    todos.value[i].description = description
    saveTodos()
    return todos.value[i]
  }
  function deleteTodo({ id }: IDeleteTodo): boolean {
    const i = findTodoIndexById(id)
    todos.value.splice(i, 1)
    saveTodos()
    return true
  }
  function archiveTodo({ id }: IArchiveTodo): ITodo {
    const i = findTodoIndexById(id)
    todos.value[i].archive = true
    saveTodos()
    return todos.value[i]
  }
  function restoreTodo({ id }: IRestoreTodo): ITodo {
    const i = findTodoIndexById(id)
    todos.value[i].archive = false
    saveTodos()
    return todos.value[i]
  }
  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos.value))
  }

  const lowTodos = computed<ITodo[]>(() =>
    todos.value.filter((v) => v.level === "low" && !v.archive)
  )
  const mediumTodos = computed<ITodo[]>(() =>
    todos.value.filter((v) => v.level === "medium" && !v.archive)
  )
  const highTodos = computed<ITodo[]>(() =>
    todos.value.filter((v) => v.level === "high" && !v.archive)
  )
  const archivedTodos = computed<ITodo[]>(() =>
    todos.value.filter((v) => v.archive)
  )

  return {
    todos,
    lowTodos,
    mediumTodos,
    highTodos,
    archivedTodos,
    createTodo,
    doneToggleTodo,
    deleteTodo,
    archiveTodo,
    restoreTodo,
    saveTodos,
  }
})
