import React from 'react'

const Filter = ({filter, filterFunc}) => {
    return(
        <>
            <div className={"filters"}>
                <div className="title">My to do list:</div>
                <div className="icons">
                    Filters:
                    <div className={`icon ${filter === "done"? "active" : ""}`} onClick = {() => filterFunc("done")}>
                        <i className={"glyphicon glyphicon-pencil"}></i>
                    </div>
                    <div className={`icon ${filter === "important"? "active" : ""}`} onClick = {() => filterFunc("important")}>
                        <i className={"glyphicon glyphicon-star-empty"}></i>
                    </div>
                    <div className={`icon ${!filter? "active" : ""}`} onClick = {() => filterFunc("all")}>
                        All
                    </div>
                </div>
            </div>
        </>
    )
};

export default Filter