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
  const someValue ='ShakeAndBake'
const displayValue = () =>{
  console.log(someValue);
}
return <section className="booklist">
{books.map((books)=> {
  return (
    <Book {...books} key={books.id} displayValue = {displayValue} />
  )
})}
</section>
}

const Book = (props) =>{
const {img, title, author, displayValue} = props
  return(
  <article className="book">
     <img src={img} alt={title} />
     <h2>{title}</h2>
     <button onClick={displayValue}>click me</button>
     <h4>{author}</h4>
  </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist />)
