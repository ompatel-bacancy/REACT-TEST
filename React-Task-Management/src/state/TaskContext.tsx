import { createContext, useContext, useState } from 'react'

const TaskContext = createContext<any>(null)

export function TaskProvider({ children }: { children: JSX.Element }) {
  const [tasks, setTasks] = useState<any[]>([])

  const addTask = (title: string) => setTasks(
    [...tasks, { id: crypto.randomUUID(), 
      title, status: 'Pending', 
      subs: [] 
    }])


  const editTask = (id: string, title: string) => setTasks(
    tasks.map(
      t => t.id === id ? 
      { ...t, title } : t
    ))
  
  
    const toggleStatus = (id: string) => setTasks(
    tasks.map(t => t.id === id ? 
      { ...t, status: t.status === 'Pending' ? 'Completed' : 'Pending' } 
      : t
    ))
  
  
    const deleteTask = (id: string) => setTasks(
    tasks.filter(t => t.id !== id)
  )
  
  
  const addSub = (
    taskId: string, text: string) => setTasks(
      tasks.map(t => t.id === taskId ? 
        { ...t, subs: [...t.subs, 
          { id: crypto.randomUUID(), 
            text }] } : 
            t))
  
  
   const deleteSub = (taskId: string, subId: string) => setTasks(
    tasks.map(t => t.id === taskId ? 
      { ...t, subs: t.subs.filter((s:any) => s.id !== subId) }
       : t
      ))

  return <TaskContext.Provider 
  value={{ tasks, addTask, editTask, toggleStatus, deleteTask, addSub, deleteSub }}>
    {children}
  </TaskContext.Provider>
}

export const useTasks = () => useContext(TaskContext)