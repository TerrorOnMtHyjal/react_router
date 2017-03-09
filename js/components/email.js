import React from 'react';
import {Link} from 'react-router';

export default function Email(props){
  return (
    <h2>Howdy, you!{props.params.id}</h2>
  );
}
