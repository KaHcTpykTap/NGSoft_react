import React, { useState } from 'react'
import './addTask.css'
import { Button, Col, Container, Row } from "react-bootstrap";

const AddTask = ({ todos, setTodos, setStatusAdd }) => {


  const addZero = (number) => number < 10 ? "0" + number : number;
  const getDate = () => {
    const fullDate = new Date();
    return fullDate.getFullYear() + "-" + addZero(fullDate.getMonth() + 1) + "-" + addZero(fullDate.getDate()) + "T"
      + addZero(fullDate.getHours()) + ":" + addZero(fullDate.getMinutes());
  }
  const rem = getDate();

  const [inputText, setInputText] = useState('');
  const [time, setTime] = useState(rem);

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        {
          text: inputText,
          date: time,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
      setStatusAdd(false);
    }
    setInputText("");

  };

  return (
    <div className='add'>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} xs={12} className='item'>
            <h1 className='add-h1'>Create Task</h1>
            <input
              placeholder="Type here..."
              onChange={event => setInputText(event.target.value)}
              type='text'
              value={inputText}
              autoFocus
            />
            <input type="datetime-local" id="meeting-time"
              name="meeting-time" value={time}
              min={time}
              onChange={event => {
                setTime(event.target.value);
              }}
            ></input>
            <Button className='add-button' onClick={(e) => submitTodoHandler(e)}>Create</Button>
            <Button className='add-button' onClick={() => setStatusAdd(false)}>Home page
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AddTask