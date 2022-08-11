const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function ReportTimeTeam(options) {
  this.name = 'reports/time/team';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(ReportTimeTeam.prototype, pick(base, ['list']));

Object.assign(ReportTimeTeam.prototype, pick(filterBase, ['listBy']));

module.exports = ReportTimeTeam;
