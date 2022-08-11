const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function ReportTimeTask(options) {
  this.name = 'reports/time/tasks';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(ReportTimeTask.prototype, pick(base, ['list']));

Object.assign(ReportTimeTask.prototype, pick(filterBase, ['listBy']));

module.exports = ReportTimeTask;
