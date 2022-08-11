const pick = require('lodash.pick');
const base = require('../mixins/Base');
const filterBase = require('../mixins/ListFilterBase');

function ReportTimeProject(options) {
  this.name = 'reports/time/projects';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(ReportTimeProject.prototype, pick(base, ['list']));

Object.assign(ReportTimeProject.prototype, pick(filterBase, ['listBy']));

module.exports = ReportTimeProject;
