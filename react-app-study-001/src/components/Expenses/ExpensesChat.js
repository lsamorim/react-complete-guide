import Chart from '../Chart/Chart';
import DataPointModel from '../../models/DataPointModel';
import { generateGuid } from '../../util/GuidUtil';

function ExpensesChart({ expenses }) {
  const monthDataPoints = [
    new DataPointModel(generateGuid(), 'Jan', 0),
    new DataPointModel(generateGuid(), 'Feb', 0),
    new DataPointModel(generateGuid(), 'Mar', 0),
    new DataPointModel(generateGuid(), 'Apr', 0),
    new DataPointModel(generateGuid(), 'May', 0),
    new DataPointModel(generateGuid(), 'Jun', 0),
    new DataPointModel(generateGuid(), 'Jul', 0),
    new DataPointModel(generateGuid(), 'Aug', 0),
    new DataPointModel(generateGuid(), 'Sep', 0),
    new DataPointModel(generateGuid(), 'Oct', 0),
    new DataPointModel(generateGuid(), 'Nov', 0),
    new DataPointModel(generateGuid(), 'Dec', 0),
  ];

  console.log(expenses);
  for (const expense of expenses) {
    console.log(expense);
    const expenseMonth = expense.date.getMonth();
    monthDataPoints[expenseMonth].value += expense.amount;
  }

  // let expensesByMonth = Object.groupBy(expenses, (expense) =>
  //   expense.getDateMonth()
  // );

  // const dataPoints = Object.keys(expensesByMonth).map((key) => {
  //   return expensesByMonth[key].reduce((acc, dataPoint) => {
  //     acc.value += dataPoint.amount;
  //     return acc;
  //   }, new DataPointModel(generateGuid(), key, 0));
  // });

  return <Chart dataPoints={monthDataPoints} />;
}

export default ExpensesChart;
