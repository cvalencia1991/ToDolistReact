import React from "react";
import styles from "./todoItem.module.css"

export default class TodoItem extends React.Component{
 
    render(){
        const { completed, id, title } = this.props.todo
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
          }
        return <li className={styles.item}>
                    <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => this.props.handleChangeProps(id)}/>
                    <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
                    <span style={this.props.todo.completed ? completedStyle : null}>
                    {title}
                    </span>
                </li>
            }

}