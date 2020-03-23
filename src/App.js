import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
             <Header />
             <Tehnologies />
        </div>
    );
}

const Tehnologies = () => {
  return(
      <div >
        <ul>
          <li>HTML</li>
          <li>react</li>
          <li>css</li>
        </ul>
      </div>
  )
}
const Header = () => {
    return (
        <div>
            <ul>
                <a href={1}>Menu</a>
                <a href={2}>Contact</a>
                <a href={3}>Order</a>
            </ul>
        </div>
    );
}

export default App;
