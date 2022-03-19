import React, { useState } from 'react'
import './table.css'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import ItemTable from './itemTable/ItemTable'

const TableTasks = ({ setStatusAdd, todos, setTodos }) => {

  const [statusSort, SetStatusSort] = useState('')

  return (
    <div className='t'>
      <Table striped className='t-table'>
        <thead className='t-head'>
          <tr>
            <th><p>#</p></th>
            <th className='pointer' onClick={() => { SetStatusSort('name'); }}><p>Task Name</p></th>
            <th className='pointer' onClick={() => { SetStatusSort('date'); }}><p>Date</p></th>
            <th className='t-button' onClick={() => { SetStatusSort('completed'); }}>
              Status
              <Button
                variant="primary"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setStatusAdd(true);
                }}>
                  Add New Task</Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {statusSort === 'name' ?
            todos.sort((a, b) => a.text > b.text ? 1 : a.text < b.text ? -1 : 0).map((item, index) => (
              <ItemTable
                index={index}
                todo={item}
                todos={todos}
                setTodos={setTodos}
                key={item.id}
              />
            ))
            :
            statusSort === 'date' ?
              todos.sort((a, b) => new Date(a.date) > new Date(b.date) ? 1 : new Date(a.date) < new Date(b.date) ? -1 : 0).map((item, index) => (
                <ItemTable
                  index={index}
                  todo={item}
                  todos={todos}
                  setTodos={setTodos}
                  key={item.id}
                />
              ))
              :
              statusSort === 'completed' ?
                todos.sort((a, b) => a.completed > b.completed ? -1 : a.completed < b.completed ? 1 : 0).map((item, index) => (
                  <ItemTable
                    index={index}
                    todo={item}
                    todos={todos}
                    setTodos={setTodos}
                    key={item.id}
                  />
                ))
                :
                todos.map((item, index) => (
                  <ItemTable
                    index={index}
                    todo={item}
                    todos={todos}
                    setTodos={setTodos}
                    key={item.id}
                  />
                ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default TableTasks