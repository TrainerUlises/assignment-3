/*==================================================
src/components/Credits.js
==================================================*/
// Import React and the "useState" Hook for managing input later
import React, { useState } from "react";
// Import Link to move between pages without reloading the app
import { Link } from "react-router-dom";

function Credits({ credits, addCredit, accountBalance }) {
  // 🧠 Local state variables to store user input for new credit
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  // 🧾 Runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading

    // Create a new credit object with user input
    const newCredit = {
      id: credits.length + 1,          // Give it a unique ID
      description: description,        // Use the description input
      amount: parseFloat(amount),      // Convert string input to number
      date: new Date().toISOString(),  // Add the current date
    };

    // Call addCredit() from App.js to update state
    addCredit(newCredit);

    // Reset input fields back to empty
    setDescription("");
    setAmount("");
  };

  // 🧩 What shows on the web page (JSX)
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Credits</h1>

      {/* Link back to Home page */}
      <Link to="/">Home</Link>
      <br /><br />

      {/* Display the current account balance */}
      <h3>Account Balance: {accountBalance.toFixed(2)}</h3>

      {/* ✏️ Form for adding a new credit */}
      <form onSubmit={handleSubmit}>
        {/* Input for description */}
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Update local state
          required
        />

        {/* Input for amount */}
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)} // Update local state
          required
        />

        {/* Submit button */}
        <button type="submit">Add Credit</button>
      </form>

      {/* Listing all credit transactions */}
      <h2>Credit Transactions</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {credits.map((credit) => (
          <li key={credit.id}>
            <strong>{credit.description}</strong> – ${credit.amount.toFixed(2)}{" "}
            on {new Date(credit.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Credits;
