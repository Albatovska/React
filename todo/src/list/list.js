import React from 'react'
import ListItem from '../list-item/list-item'

const List = ({data, changeStatus, remove}) => {
    return(
        <ul className={"list"}>
            {
                data.map((el, ind) => {
                    const { id, ...item } = el;
                    return(
                        <ListItem
                            key={ind}
                            item={item}
                            remove={() => remove(id)}
                            changeStatus={(name) => changeStatus(id, name)} />
                    )
                })
            }
        </ul>
    )
};

export default List

   