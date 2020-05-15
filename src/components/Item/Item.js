import React from 'react'
import Button from 'react-bootstrap/Button';


export default function Item(props) {

    if(!props.enabled){
        return (
            <tr>
                <td>{props.index+1}.</td>
                <td>{props.name}</td>
                <td>{props.pcs} &nbsp;
                    <Button onClick={props.addBtn}>+</Button>
                    <Button onClick={props.minusBtn}>-</Button>
                </td>
                <td>&nbsp;
                    <Button onClick={props.deleteBtn}>Delete</Button>
                    <Button onClick={props.onEditClick}>Edit</Button>
                </td>
            </tr>
            )
    }else{
        return (
            <tr>
                <td>{props.index+1}.</td>
                <td><input value={props.name} onChange={props.onNameChange}/></td>
                <td>{props.pcs} &nbsp;
                    <button onClick={props.addBtn}>+</button>
                    <button onClick={props.minusBtn}>-</button>
                </td>
                <td>&nbsp;
                    <button onClick={props.deleteBtn}>Delete</button>
                    <button onClick={props.onEditClick}>Save</button>
                </td>
            </tr>
        )
    }
  
}
