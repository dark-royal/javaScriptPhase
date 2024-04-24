function calculateExpensesOnallCategories(categories){
  let totalExpenses = 0;
  for (const key in categories) {
    totalExpenses += categories[key]

      
    }
    return totalExpenses;
  }
module.exports = calculateExpensesOnallCategories;