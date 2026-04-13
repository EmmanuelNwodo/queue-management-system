import "./App.css";
import { useState } from "react";
import QueueForm from "./components/QueueForm";

export default function App() {

  const [queue, setQueue] = useState([]);
  const addToQueue = (customer) => {
    // Add new customer to the queue
    setQueue((prevQueue) => [...prevQueue, { ...customer, id: Date.now(), status: "waiting" }]);
  }


  const updateStatus = (id, newStatus) => {
    // Update the status of a customer in the queue
    setQueue((prevQueue) => 
      prevQueue.map((customer) => 
        customer.id === id ? { ...customer, status: newStatus } : customer
      )
    );
  }

  const removeFromQueue = (id) => {
    // Remove a customer from the queue
    setQueue((prevQueue) => prevQueue.filter((customer) => customer.id !== id));
  
    
  }

  return (
    <div className="app">
      <header>
        <h1>Queue Management System</h1>
        <p>Manage your customer queues efficiently</p>
      </header>
      <main>
        <QueueForm onAddCustomer={addToQueue} />
        {/* <QueueDisplay queue={queue} /> */}
      </main>
    </div>
  );
}