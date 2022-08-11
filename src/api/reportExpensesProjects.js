const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function ReportExpensesProjects(options) {
  this.name = 'reports/expenses/projects';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(ReportExpensesProjects.prototype, pick(base, ['list']));

Object.assign(ReportExpensesProjects.prototype, pick(filterBase, ['listBy']));

module.exports = ReportExpensesProjects;
