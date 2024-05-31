import './Book.css';

export default function Book(props) {
  // handle add request button click
  function clickRequestHandler() {
    props.liftBookToAppHandler(props.book);
  }
  
  return (
    <div className="book-card">
      <img src={props.book.img}></img>
      <h3>{props.book.title}</h3>
      <h4>{props.book.author}</h4>
      <p>Published {props.book.published} in {props.book.language}</p>
      <p>{props.book.description}</p>
      <button className="request-button" onClick={clickRequestHandler}>Request Book</button>
    </div>
  )
}