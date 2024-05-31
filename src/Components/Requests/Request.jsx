import './Request.css'
export default function Request(props) {
function clickRemoveRequestHandler() {
props.liftRequestToRemoveHandler(props.book);
}
  
  
  return (
    <section className="request-card">
      <p>{props.book.title} by {props.book.author}</p>
     
      <img id="resize-image" src={props.book.img}></img>
      <button 
        id="remove-button"
        onClick={clickRemoveRequestHandler}
       >Remove Book</button>
    </section>
  )
}