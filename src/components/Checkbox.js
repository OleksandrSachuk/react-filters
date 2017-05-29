import React from 'react';
import {Checkbox} from 'react-bootstrap';

const CheckboxFilter = (props) =>{
  return(
  <Checkbox
    onChange={()=>{props.onChange(props.label)}}
  >
    {props.label}
  </Checkbox>
  )
};
export default CheckboxFilter;
