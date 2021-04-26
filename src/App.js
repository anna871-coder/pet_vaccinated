import "./App.css";
import { useState } from "react";
import Client from "./components/Client";

const App = () => {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");

  const fetcher = () => {
    setClients([]);
    fetch(`api/clients?search=${search}`)
      .then((response) => response.json())
      .then((data) => setClients(data))
      .catch((err) => setClients(null));
    console.log(clients);
  };
  return (
    <div className="App">
      <h5>Veterinarian admin - clients</h5>
      <input onChange={(e) => setSearch(e.target.value)}></input>
      <button disabled={search.length < 3} onClick={fetcher}>
        Search
      </button>
      {clients
        ? clients.map((client) => (
            <Client name={client.name} pets={client.pets} />
          ))
        : null}
    </div>
  );
};

export default App;
