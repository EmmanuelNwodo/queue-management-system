import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

export default function QueueForm({ onAddCustomer }) {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [service, setService] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
            // Validations
            if (!name.trim() || !email.trim() || !service.trim()) {
                alert("Please fill in all fields.");
                return;
               
            }

             onAddCustomer({name, email, service})  
                setName("")
                setEmail("")
                setService("")
    
        };

    return (
        <div className="queue-form">
            <h2>Add Customer to Queue</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Customer Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="email" 
                    placeholder="Customer Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <select 
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                >
                    <option value="">Select Service</option>
                    <option value="consultation">Consultation</option>
                    <option value="payment">Payment</option>
                    <option value="support">Support</option>
                </select>
                <button type="submit" >
                    <FaUserPlus /> 
                    Add Customer to Queue
                </button>
            </form>
        </div>
    );
}