export default function QueueDisplay({ queue,onUpdateStatus,onRemoveFromQueue }) {

   const getStatusColor = (status) => {
        switch (status) {
            case "waiting":
                return "var(--warning)"
            case "serving":
                return "var(--success)"
            case "completed":
                return "var(--info)"
            default:
                return "var(--text)"

        }
    }

  return (
    <div className="queue-display">
      <h2>Current Queue</h2>
      {queue.length === 0 ? (
        <p className="empty-queue">The queue is empty.</p>
      ) : (
        <ul className="queue-list">
          {queue.map((customer) => (
            <li key={customer.id} className="queue-item">
              <h3>{customer.name}</h3> 
              <p>{customer.email}</p> 
              <p>{customer.service}</p> 
             <span className="status" style={{ color: getStatusColor(customer.status) }}>{customer.status}</span>
            </li>
            ))}
        </ul>
    )}
      
    </div>
  );
}