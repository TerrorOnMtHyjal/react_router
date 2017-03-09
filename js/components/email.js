import React from 'react';
import {Link} from 'react-router';

export default function Email(props){
  let currentEmail = props.route.grabEmail(props.route.emailType, parseInt(props.params.id));
  //console.log(props.route.grabEmail("inbox", props.params.id));
  //console.log(typeof props.params.id);
  return (
    <div>
      <h2>{currentEmail.title}</h2>
      <p>{currentEmail.content}</p>
      <p>To: {currentEmail.to}</p>
      <p>From: {currentEmail.from}</p>
    </div>
  );
}
