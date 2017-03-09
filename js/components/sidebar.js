import React from 'react';
import {Link} from 'react-router';

export default function Sidebar(props){
  return (
    <div>
      <Link to={'/inbox'}>Inbox</Link><br/>
      <Link to={'/spam'}>Spam</Link>
    </div>
  );
}