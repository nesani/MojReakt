import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
const firstBook = {
author:'James Clear',
title: 'Atomic Habits',
img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg'
};


const secondBook = {
  author:'Jordan Moore',
  title: 'Interesting Facts for Curios Minds',
  img: 'https://m.media-amazon.com/images/I/518z5dvykPL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
  }; 
  
const Booklist = () =>{
return <section className="booklist">
  <Book img = {firstBook.img} title = {firstBook.title} author ={ firstBook.author} />
  <Book img = {secondBook.img} title = {secondBook.title} author ={ secondBook.author} />
</section>
}
 
const Book = ({img, title, author}) =>{

  return(
  <article className="book">
     <img src={img} alt={title} />
     <h2>{title}</h2>
     <h4>{author}</h4>
  </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist />)
