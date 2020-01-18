import React from 'react';
import ReactDOM from 'react-dom';
import snoowrap from 'snoowrap';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

console.log(process.env);

const userAgent = process.env.REACT_APP_USER_AGENT;
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const refreshToken = process.env.REACT_APP_REFRESH_TOKEN;

console.log({
    userAgent,
    clientId,
    clientSecret,
    refreshToken
})

const reddit = new snoowrap({
    userAgent,
    clientId,
    clientSecret,
    refreshToken
});

console.log(reddit.getSubreddit('memes').getHot().map(post => post.title));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
