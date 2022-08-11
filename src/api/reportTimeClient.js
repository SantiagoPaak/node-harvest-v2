const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function ReportTimeClient(options) {
  this.name = 'reports/time/clients';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(ReportTimeClient.prototype, pick(base, ['list']));

Object.assign(ReportTimeClient.prototype, pick(filterBase, ['listBy']));

module.exports = ReportTimeClient;
