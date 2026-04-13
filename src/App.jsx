import "./App.css";
import { useState, useEffect } from "react";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

export default function App() {

  const [queue, setQueue] = useState(() => {
  const savedQueue = localStorage.getItem("queue");
  return savedQueue ? JSON.parse(savedQueue) : [];
});

useEffect(() => {
  localStorage.setItem("queue", JSON.stringify(queue));
}, [queue]);

  const addToQueue = (customer) => {
    // Add new customer to the queue
    setQueue((prevQueue) => [...prevQueue, { ...customer, id: Date.now(), queueNumber: prevQueue.length + 1, status: "waiting" }]);
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
        <QueueDisplay queue={queue} 
        onUpdateStatus={updateStatus}
        onRemoveFromQueue={removeFromQueue} /> 
      </main>
    </div>
  );
}