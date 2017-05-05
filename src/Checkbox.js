import React from 'react';

const Checkbox = (props) =>{
  return(
  <label>
    <input
      type="checkbox"
      onChange={()=>{props.onChange(props.label)}}
    /> {props.label}
  </label>
  )
};
export default Checkbox;
