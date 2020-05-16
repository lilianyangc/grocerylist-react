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
                    <Button variant="danger" onClick={props.deleteBtn}>Delete</Button>
                    <Button variant="warning" onClick={props.onEditClick}>Edit</Button>
                </td>
            </tr>
            )
    }else{
        return (
            <tr>
                <td>{props.index+1}.</td>
                <td><input value={props.name} onChange={props.onNameChange}/></td>
                <td>{props.pcs} &nbsp;
                    <Button onClick={props.addBtn}>+</Button>
                    <Button onClick={props.minusBtn}>-</Button>
                </td>
                <td>&nbsp;
                    <Button  variant="danger" onClick={props.deleteBtn}>Delete</Button>
                    <Button variant="success"onClick={props.onEditClick}>Save</Button>
                </td>
            </tr>
        )
    }
  
}
