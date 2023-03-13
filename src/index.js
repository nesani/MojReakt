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
return <section className="booklist">
<EventExamples />
{books.map((books)=> {
  return (
    <Book book={books} key={books.id}/>
  )
})}
</section>
}
const EventExamples = () =>{
  return( <section>
    <form>
      <h2>Typical form</h2>
      <input onChange={(e) => console.log(e.target.value)} type='text' name ='example' style={{margin:'1rem 0'}}/>
      <button type='submit'> Submit</button>
    </form>
    <button type='button' onClick={()=> console.log('click me')}> click me</button>
  </section> 
  )}

const Book = ({book:{img, title, author}}) =>{
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
