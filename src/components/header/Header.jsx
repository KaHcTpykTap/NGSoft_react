import React from 'react'
import './header.css';
import Item from './item/Item';

const Header = ({todos}) => {

    return (
        <div className='h'>
            <Item text={"Total Tasks"} value={todos.length} color={'#7BCED7'}/>
            <Item text={"Tasks Completed"} value={todos.filter(i => i.completed).length} color={'#57BE85'}/>
            <Item text={"Tasks Remaining"} value={todos.filter(i => !i.completed).length} color={'#D87575'}/>
        </div>
    )
}

export default Header;