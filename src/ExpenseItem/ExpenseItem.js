import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';


function ExpenseItem(props) {
  return (
    <div class='expense-items'>
      <ExpenseDate date={props.date}/>
      <ExpenseDetails amount={props.amount} location={props.location} />
    </div>
  );
}

export default ExpenseItem;
