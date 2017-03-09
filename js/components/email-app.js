import React from 'react';
import Sidebar from './sidebar';

export default class EmailApp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    };
  }
  render(){
    return (
      <div>
        <h1>Working! Welcome to JM-Mail!</h1>
        <Sidebar />
        {this.props.children}
      </div>
    );
  }
}