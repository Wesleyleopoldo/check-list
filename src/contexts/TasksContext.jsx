import { createContext, useState } from 'react'
import { tasks as initialTasks } from '../datas/data'

export const TasksContext = createContext(null)

export function TasksProvider({ children }) {
  const [tasksState, setTasksState] = useState(initialTasks)
  const [completed, setCompleted] = useState(Array(initialTasks.length).fill(false))

  return (
    <TasksContext.Provider value={{ tasksState, setTasksState, completed, setCompleted }}>
      {children}
    </TasksContext.Provider>
  )
}
