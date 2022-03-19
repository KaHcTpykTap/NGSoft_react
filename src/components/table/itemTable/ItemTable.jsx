import React, { useState } from 'react'
import './itemTable.css';
import Button from 'react-bootstrap/Button'

const ItemTable = ({ todo, todos, setTodos, index }) => {

    const [disabled, setDisabled] = useState(true);
    const [textValue, setTextValue] = useState(todo.text);

    const addZero = (number) => number < 10 ? "0" + number : number;

    const fullDate = new Date(todo.date);
    const date = fullDate.getFullYear() + "-" + addZero(fullDate.getUTCMonth()) + "-" + addZero(fullDate.getDate()) + " "
        + addZero(fullDate.getHours()) + ":" + addZero(fullDate.getMinutes());

    //Event Handlers
    const deleteHandler = () => {
        var one_day = 1000 * 60 * 60 * 24;
        const flag = Math.ceil((new Date(todo.date).getTime() - new Date().getTime()) / one_day);
        if (flag < 6) {
            setTodos(todos.filter((el) => el.id !== todo.id));
        }
    };

    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };

    const changeTextHandler = (e) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        text: textValue,
                    };
                }
                return item;
            })
        );
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {disabled ?
                    <p>{todo.text}</p>
                    :
                    <input className='it-input' value={textValue} onChange={(e) => setTextValue(e.target.value)} autoFocus />
                }
            </td>
            <td className='todo-item'>{date}</td>
            <td className='todo-item-checkbox'>
                <input type="checkbox" id="horns" name="horns" onClick={completeHandler} disabled={disabled} checked={todo.completed} />
                {disabled ?
                    <Button variant='primary' size="sm" onClick={() => setDisabled(!disabled)}>Edit</Button>
                    :
                    <Button
                        variant='success'
                        size="sm"
                        onClick={() => {
                            setDisabled(!disabled);
                            changeTextHandler();
                        }}>Save</Button>
                }
                <Button variant="secondary" size="sm" onClick={deleteHandler}>Delete</Button>
            </td>
        </tr>
    )
}

export default ItemTable 