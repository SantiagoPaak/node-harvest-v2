const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function ReportProjectBudgets(options) {
  this.name = 'reports/project_budget';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(ReportProjectBudgets.prototype, pick(base, ['list']));

Object.assign(ReportProjectBudgets.prototype, pick(filterBase, ['listBy']));

module.exports = ReportProjectBudgets;
