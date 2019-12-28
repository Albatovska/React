import React from 'react'

const ListItem = ({item, changeStatus, remove}) => {
    return(
        <li className={"list-item"}>
            <div className={`title ${item.done ? "done" : ""} ${item.important? "important" : ""}`}>{item.title}</div>
            <div className="icon delete" onClick = {() => remove()}>
                <i className="glyphicon glyphicon-trash "></i>
            </div>
            <div className={`icon important ${item.important? "active" : ""}`} onClick = {() => changeStatus("important")}>
                <i className={"glyphicon glyphicon-star-empty"}></i>
            </div>
            <div className={`icon done ${item.done ? "active" : ""}`}  onClick = {() => changeStatus("done")}>
                <i className={"glyphicon glyphicon-pencil"}></i>
            </div>

        </li>

    )
};

export default ListItem

   