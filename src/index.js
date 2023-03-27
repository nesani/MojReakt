import React from 'react';
import ReactDOM from 'react-dom/client'

import './index.css'
import { books } from './books';
import Book from './book';

const Booklist = () =>{

return(
<>
<h1> List of Best Sellers</h1>
<section className="booklist">
{books.map((books, index)=> {
  return (
    <Book {...books} key={books.id} number ={index} />
  )
  })
}
</section>
</> 
 )
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist />)
