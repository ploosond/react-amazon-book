import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import './index.css';

// vars
const firstBook = {
  author: 'Colleen Hoover',
  title: 'It Ends with Us: A Novel',
  img: 'https://images-na.ssl-images-amazon.com/images/I/71EwoNQypZL._AC_UL604_SR604,400_.jpg'
};

const secondBook = {
  author: 'Hopscotch Girls',
  title: 'I Am Confident, Brave & Beautiful: A Coloring Book for Girls',
  img: 'https://images-na.ssl-images-amazon.com/images/I/71AIzioFxTL._AC_UL604_SR604,400_.jpg'
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
