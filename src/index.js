import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'

const Booklist = () =>{

return <section className="booklist">
  <Book />
  <Book />
  <Book />
  <Book />
</section>
}

const author ='James Clear'
const Book = () =>{
  const title = 'Atomic Habits'
  return(
  <article className="book">
     <img src="https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg" alt="Atomic Habits" />
     <h2>{title}</h2>
     <h4>{author}</h4>
  </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist />)
