interface ITodo {
  id: string
  title: string
  description: string
  level: Level
  pin: boolean
  done: boolean
  archive: boolean
}

interface ICreateTodo {
  title: string
  description: string
  level: Level
}

interface IUpdateTodo {
  id: string
  title: string
  description: string
}

interface IDeleteTodo {
  id: string
}

interface IDoneToggleTodo {
  id: string
  done: boolean
}

interface IArchiveTodo {
  id: string
}
