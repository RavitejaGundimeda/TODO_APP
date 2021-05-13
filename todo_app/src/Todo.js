import {   List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import './Todo.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from 'react'
import db from './firebase';

function Todo(props) {
    return (
        <List classname ="todo_list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary = { props.todo.todo} secondary = "Dead Line : 🤦‍♂️" />
            </ListItem>
            <DeleteForeverIcon onClick = {event => db.collection('todos').doc(props.todo.id).delete() }> 💥  DELETE ME </DeleteForeverIcon>
        </List>
    )
}

export default Todo
