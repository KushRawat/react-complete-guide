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

  const filteredExepnses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  let expensesContent = <p>No expenses this year.</p>;

  if (filteredExepnses.length > 0) {
    expensesContent = filteredExepnses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={selectedYear}
        onSaveExpenseFilter={saveExpenseFilterHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
