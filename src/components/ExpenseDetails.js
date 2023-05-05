
import Card from '../UI/card'

function ExpenseDetails(props) {
    return (
      <Card className='expense-details'>
        <p>{props.amount}</p>
        <p>{props.location}</p>
      </Card>
    );
  }
  
  export default ExpenseDetails;