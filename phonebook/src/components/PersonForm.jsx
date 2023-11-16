import React from "react";

const PersonForm = (props) => {
    return(
        <div>
            <form onSubmit={props.addName}>
                <div>
                    <p>name: <input value={props.newName} onChange={props.handleNewName}/></p> 
                    <p>number: <input  value={props.newNumber} onChange={props.handleNewNumber}/></p>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )

}

export default PersonForm