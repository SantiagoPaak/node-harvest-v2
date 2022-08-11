const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function ReportExpensesCategories(options) {
  this.name = 'reports/expenses/categories';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(ReportExpensesCategories.prototype, pick(base, ['list']));

Object.assign(ReportExpensesCategories.prototype, pick(filterBase, ['listBy']));

module.exports = ReportExpensesCategories;
