require('babel-polyfill');
import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import EmailApp from './components/email-app';
import Sidebar from './components/sidebar';
import Inbox from './components/inbox';
import Spam from './components/spam';
import Email from './components/email';

import ContentDisplay from './components/content-display';

const emails = {
        inbox: [
          {
              id: 0,
              from: "billg@microsoft.com",
              to: "TeamWoz@Woz.org",
              title: "Possible work opportunity",
              content: "Dear Woz.  Fancy a job at Mister Softee?  Bill x"
          },
          {
              id: 1,
              from: "zuck@facebook.com",
              to: "TeamWoz@Woz.org",
              title: "Do you know PHP?",
              content: "Dear Woz.  We are in need of a PHP expert.  Fast.  Zuck x"
          },
          {
              id: 2,
              from: "marcy@facebook.com",
              to: "Jared@Woz.org",
              title: "Hey Jared, does this still work?",
              content: "Unless Jacob came in and broke it, it should!"
          }
        ],
        spam: [
            {
              id: 0,
              from: "ChEaPFl1ghTZ@hotmail.com",
              to: "TeamWoz@Woz.org",
              title: "WaNt CHEEp FlitZ",
              content: "Theyre CheEp"
            },
            {
              id: 1,
              from: "NiKEAIRJordanZ@hotmail.com",
              to: "TeamWoz@Woz.org",
              title: "JorDanz For SAle",
              content: "Theyre REELY CheEp"
            }
        ]
      };

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={EmailApp}>
            <IndexRoute component={Inbox} inboxEmails={emails.inbox}/>
            <Route path="inbox" component={Inbox} inboxEmails={emails.inbox}/>
            <Route path="inbox/:id" component={Email} />

            <Route path="spam" component={Spam} spamEmails={emails.spam}/>
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(routes, document.getElementById('app'));
});
