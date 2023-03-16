import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
const books = [
  {
    author:'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg',
    id: 1
  },
  {
    author:'Jordan Moore',
    title: 'Interesting Facts for Curios Minds',
    img: 'https://m.media-amazon.com/images/I/518z5dvykPL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    id: 2
  }
];


const Booklist = () =>{
const getBook = (id) =>{
  const book = books.find((book)=> book.id === id)
  console.log(book)
}
return <section className="booklist">
{books.map((books)=> {
  return (
    <Book {...books} key={books.id} getBook ={getBook} />
  )
})}
</section>
}

const Book = (props) =>{
const {img, title, author, id, getBook} = props
const getSingleBook = () =>{
  getBook(id)
}
  return(
  <article className="book">
     <img src={img} alt={title} />
     <h2>{title}</h2>
     <button onClick={getSingleBook}>click me</button>
     <h4>{author}</h4>
  </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist />)
