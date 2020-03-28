import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id : 1, message : 'Hi, how are you?', likeCounter : 20},
  {id : 2, message : 'Lol, its work!', likeCounter : 2},
  {id : 3, message : 'Lalalalalla omg ', likeCounter : 77},
  {id : 4, message : 'Corona virus !!!11', likeCounter : 15},

]
let dialogs = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Ivan' },
  { id: 4, name: 'Petya' },
  { id: 5, name: 'Ira' }
]

let messages = [
  { id: 1, message: 'Helloo bro ' },
  { id: 2, message: 'Yoooooouuu' },
  { id: 3, message: 'WEgteeeeee' },
  { id: 4, message: 'hohYoooooouuu' },
  { id: 5, message: 'YoooooouuuYoooooouuuYoooooouuuYoooooouuu' }
];




ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
