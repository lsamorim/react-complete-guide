class ExpenseModel {
  constructor(id, date, title, amount) {
    this.id = id;
    this.date = date;
    this.title = title;
    this.amount = amount;
  }

  getDateDay = () => {
    return this.date.toLocaleString('en-US', { day: '2-digit' });
  }

  getDateMonth = () => {
    return this.date.toLocaleString('en-US', { month: 'long' });
  }

  getDateYear = () => {
    return this.date.getFullYear();
  }
}

export default ExpenseModel;