import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2022');

  const saveExpenseFilterHandler = (filter) => {
    setSelectedYear(filter);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={selectedYear}
        onSaveExpenseFilter={saveExpenseFilterHandler}
      />
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
