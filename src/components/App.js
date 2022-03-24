import { useState, useEffect } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const poemsAPI = "http://localhost:8004/poems";
function App() {
  const [poems, setPoems] = useState([]);
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetch(poemsAPI)
      .then((res) => res.json())
      .then(setPoems);
  }, []);

  function handleAddPoem (newPoem) {
    setPoems([...poems, newPoem])
  }


  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={() => setShowForm(!showForm)}>Show/hide new poem form</button>
        {showForm ? <NewPoemForm onAddPoem={handleAddPoem}/> : null}
      </div>
      <PoemsContainer poems={poems} />
    </div>
  );
}

export default App;
