import React from "react";

function EmailInput(props) {
  return (
    <div>
      <label>Email</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default EmailInput;
