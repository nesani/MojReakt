import React from 'react';
import ReactDOM from 'react-dom/client'

function Greeting(){
    return(
        <div>
          <Person />
          <Message />
        </div>
    )
};

const Person = () => <h2> Tihomir Ilic </h2>;
const Message = () =>{
 return (
    <p> ovo je moja drama</p>
 )  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />)
