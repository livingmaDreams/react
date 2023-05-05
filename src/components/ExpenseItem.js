import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/card'


function ExpenseItem(props) {
  return (
    <Card className='expense-items'>
      <ExpenseDate date={props.date}/>
      <ExpenseDetails amount={props.amount} location={props.location} />
    </Card>
  );
}

export default ExpenseItem;
