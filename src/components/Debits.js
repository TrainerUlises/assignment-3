/*==================================================
src/components/Debits.js
==================================================*/
import {Link} from 'react-router-dom';

const Debits = (props) => {
  let debitsView = () => {
    const { debits } = props;
    return debits.map((debit) => {
      let date = debit.date.slice(0, 10);

      let formattedAmount = parseFloat(debit.amount).toFixed(2);

      return (
        <li key={debit.id}>
          Description: {debit.description} | Amount: ${formattedAmount} | Date: {date}
        </li>
      )
    });
  }

  const formattedBalance = props.accountBalance ? parseFloat(props.accountBalance).toFixed(2) : '0.00';

  return (
    <div>
      <h1>Debits</h1>

      <h2>Account Balance: ${formattedBalance}</h2>
      
      <h3>Transaction History</h3>
      <ul>
        {debitsView()}
      </ul>

      {/* Form for Adding Debits */}
      <form onSubmit={props.addDebit}>
        <input type="text" name="description" placeholder="Enter Description" required/>
        {/* Added step="0.01" to guide the user in entering a currency amount */}
        <input type="number" name="amount" step="0.01" placeholder="Enter Amount" required/>
        <button type="submit">Add Debit</button>
      </form>
      <br/>
      
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Debits;