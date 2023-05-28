import "./App.css";
import { useState } from "react";
import ShowList from "./ShowLists";
import BookForm from "./BookForm";

function App() {
  const [showList, setShowList] = useState(false);
  return (
    <>
      <div className="App">
        {!showList && <BookForm setShowList={setShowList} />}
        {showList && <ShowList setShowList={setShowList} />}
      </div>
      <div id="footer">Unstop © by Ayush Verma </div>
    </>
  );
}

export default App;
