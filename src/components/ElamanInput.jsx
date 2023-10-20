import React from "react";

function ElamanInput(props) 
   {
    return (
      <div>
        <label>{props.labelText}</label>
        <input
          type={props.type}
          firstName={props.firstname}
          secondName={props.secondname}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    );
  }


export default ElamanInput;
