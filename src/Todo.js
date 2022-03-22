import React from 'react'

export default function Todo({todoTask, todoStatus}) {

  function handleStatus() {
    todoStatus(todoTask.id)
  }

  return (
    <div className="form-check">
      <label className="form-check-label">
          <input className="form-check-input" type="checkbox" checked={todoTask.complete} onChange={handleStatus}/>
          {todoTask.name}
      </label>
    </div>
  )
}
