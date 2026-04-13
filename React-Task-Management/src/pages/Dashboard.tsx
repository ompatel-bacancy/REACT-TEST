import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTasks } from '../state/TaskContext'

export default function Dashboard() {
  const { tasks, addTask, editTask, toggleStatus, deleteTask, addSub, deleteSub } = useTasks()
  const [title, setTitle] = useState('')
  const [filter, setFilter] = useState('All')

  const visible = tasks.filter(t => filter === 'All' || t.status === filter)

  return (
    <div className="page">
      <hr />
      <h2>Dashboard for Task Management</h2>
      <hr />
      
      <div className="row">
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="New task" />
        <button onClick={() => { addTask(title); setTitle('') }}>Add</button>
      </div>
      
      <div className="row">
        {['All','Pending','Completed'].map(f => <button key={f} onClick={() => setFilter(f)}>{f}</button>)}
      </div>
      
      {visible.map(t => (
        <div key={t.id} className="card">
          <input value={t.title} onChange={e => editTask(t.id, e.target.value)} />
          <Link to={`/dashboard/${t.id}`}>View task in detail</Link>
          <div className="row">
            <button onClick={() => toggleStatus(t.id)}>{t.status}</button>
            <button onClick={() => deleteTask(t.id)}>Delete</button>
          </div>
              <div className="sub">
                {t.subs.map((s:any) => (
                  <div key={s.id}>
                    <Link to={`/dashboard/${t.id}`}>{s.text}</Link>
                    <button onClick={() => deleteSub(t.id, s.id)}>×</button>
                  </div>
                ))}
            <button onClick={() => addSub(t.id, 'New Sub Task')}>Add Sub</button>
          </div>
        </div>
      ))}

    </div>
  )
}