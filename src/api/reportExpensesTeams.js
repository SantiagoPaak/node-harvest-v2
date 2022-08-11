const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function ReportExpensesTeams(options) {
  this.name = 'reports/expenses/team';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(ReportExpensesTeams.prototype, pick(base, ['list']));

Object.assign(ReportExpensesTeams.prototype, pick(filterBase, ['listBy']));

module.exports = ReportExpensesTeams;
