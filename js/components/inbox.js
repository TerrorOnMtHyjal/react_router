import React from 'react';
import {Link} from 'react-router';

export default function Inbox(props){

  return (
    <div>
      <h3>This is the inbox!</h3>

      {props.route.inboxEmails.map(email => {
        return (
          <div className="singleEmail">
            <Link to={'/inbox/'+ email.id}>{email.title}</Link><br/>
            <p>{email.from}</p>
          </div>
        );
      })}
    </div>
  );
}
