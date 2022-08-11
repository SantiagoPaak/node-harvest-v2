const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function ReportExpensesClients(options) {
  this.name = 'reports/expenses/clients';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(ReportExpensesClients.prototype, pick(base, ['list']));

Object.assign(ReportExpensesClients.prototype, pick(filterBase, ['listBy']));

module.exports = ReportExpensesClients;
