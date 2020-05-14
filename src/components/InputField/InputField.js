import React from 'react'

export default function InputField(props) {

    if(props.itemValidity){
        return (
            <div>
                <input type="text" onChange={props.itemHandler} 
                    value={props.currentItem || ''} onKeyPress={props.enterPressed}/>
                <button onClick={props.click}>Add to List</button><br />
            </div>
        )
    }else{
        return (
            <div>
                <input type="text" onChange={props.itemHandler} 
                    value={props.currentItem || ''}/>
                <button disabled>Add to List</button><br />
            </div>
        )
    }
   
}
