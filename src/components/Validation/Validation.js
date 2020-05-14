import React from 'react'

export default function Validation(props) {

    if(props.nameLength <= 0){
        return (
            <>
                Enter an item name
            </>
        )
    }else{
        return (
            <>
                Valid name
            </>
        )
    }
    
}
