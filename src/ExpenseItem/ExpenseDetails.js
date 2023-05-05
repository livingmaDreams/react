import './ExpenseDetails.css';

function ExpenseDetails(props) {
    return (
      <div class='expense-details'>
        <p>{props.amount}</p>
        <p>{props.location}</p>
      </div>
    );
  }
  
  export default ExpenseDetails;