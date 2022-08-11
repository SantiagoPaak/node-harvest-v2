const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function ReportUninvoiced(options) {
  this.name = 'reports/uninvoiced';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(ReportUninvoiced.prototype, pick(base, ['list']));

Object.assign(ReportUninvoiced.prototype, pick(filterBase, ['listBy']));

module.exports = ReportUninvoiced;
