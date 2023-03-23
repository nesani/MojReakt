import React from 'react';
import ReactDOM from 'react-dom/client'

import './index.css'
import { books } from './books';
import Book from './book';

const Booklist = () =>{

return <section className="booklist">
{books.map((books)=> {
  return (
    <Book {...books} key={books.id} />
  )
})}
</section>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist />)
