require('babel-polyfill');
import React from 'react';
import ReactDom from 'react-dom';
import EmailApp from './components/email-app';

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(<EmailApp/>, document.getElementById('app'));
});

