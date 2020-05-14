import React from 'react'

export default function Item(props) {

    if(!props.enabled){
        return (
            <tr>
                <td>{props.index+1}.</td>
                <td>{props.name}</td>
                <td>{props.pcs} 
                    <button onClick={props.addBtn}>+</button>
                    <button onClick={props.minusBtn}>-</button>
                </td>
                    <td>
                    <button onClick={props.deleteBtn}>Delete</button>
                    <button onClick={props.onEditClick}>Edit</button>
                </td>
            </tr>
            )
    }else{
        return (
            <tr>
                <td>{props.index+1}.</td>
                <td><input value={props.name} onChange={props.onNameChange}/></td>
                <td>{props.pcs} 
                    <button onClick={props.addBtn}>+</button>
                    <button onClick={props.minusBtn}>-</button>
                </td>
                <td>
                    <button onClick={props.deleteBtn}>Delete</button>
                    <button onClick={props.onEditClick}>Save</button>
                </td>
            </tr>
        )
    }
  
}
