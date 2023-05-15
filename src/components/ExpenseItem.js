import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/card'


function ExpenseItem(props) {

  const deleteHandler = () => {
    console.log('Clicked');
  }
  return (
    <Card className='expense-items'>
      <ExpenseDate date={props.date}/>
      <ExpenseDetails amount={props.amount} location={props.location} />
      <button onClick={deleteHandler}>DELETE</button>
    </Card>
  );
}

export default ExpenseItem;
