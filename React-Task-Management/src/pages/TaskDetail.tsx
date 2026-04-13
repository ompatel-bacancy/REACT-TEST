import { useParams } from 'react-router-dom'
import { useTasks } from '../state/TaskContext'

export default function TaskDetail() {
  const { taskId } = useParams()
  const { tasks } = useTasks()
  const task = tasks.find((t:any) => t.id === taskId)

  if (!task) return <div className="page">Task not found</div>

  return (
    <div className="page">
      <h2>{task.title}</h2>
      <hr />
      <p>Status: {task.status}</p>
      <hr />
      <h4>Sub Tasks</h4>
      <hr />
      {task.subs.map((s:any) => <p key={s.id}>{s.text}</p>)}
    </div>
  )
}