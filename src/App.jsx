import "./App.css";
import AllBooks from "./Components/Catalog/AllBooks.jsx";
import AllRequests from "./Components/Requests/AllRequests.jsx";
import database from "../BookData.json";
import { useState } from "react";

export default function App() {
  const [myRequests, setMyRequests] = useState([]);
  console.log("requests", myRequests);

  const [myBooks, setMyBooks] = useState(database.catalog);
  console.log("books list", myBooks);

  function addToRequestListHandler(bookToAdd) {
    setMyRequests(() => {
      return [...myRequests, bookToAdd];
    });
  }

  function removeFromRequestListHandler(bookToRemove) {
    setMyRequests(() => {
      return myRequests.filter(
        (thisRequest) => thisRequest.id != bookToRemove.id);
    })
  }

  return (
    <main>
      <h1>Library Catalog</h1>
      <nav className="top-nav">
        <ul>
          <li>Home</li>
          <li>Account</li>
        </ul>
      </nav>

      <section id="books-and-requests">
        <AllBooks
          bookList={myBooks}
          addToRequestListHandler={addToRequestListHandler}
        ></AllBooks>
        <AllRequests 
          requestList={myRequests}
          removeFromRequestListHandler={removeFromRequestListHandler}
          ></AllRequests>
        
      </section>
    </main>
  );
}
