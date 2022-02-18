import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2022');

  const saveExpenseFilterHandler = (filter) => {
    setSelectedYear(filter);
  };

  const filteredExepenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={selectedYear}
        onSaveExpenseFilter={saveExpenseFilterHandler}
      />
      <ExpensesList items={filteredExepenses}/>
    </Card>
  );
};

export default Expenses;
