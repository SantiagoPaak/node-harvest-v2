const pick = require('lodash.pick');
const base = require('../mixins/Base.js');
const filterBase = require('../mixins/ListFilterBase');

function Estimate_Item_Categories(options) {
  this.name = 'estimate_item_categories';
  this.baseUri = `https://api.harvestapp.com/v2/${this.name}`;
  this.options = options;
}

Object.assign(Estimate_Item_Categories.prototype, base);

Object.assign(Estimate_Item_Categories.prototype, pick(filterBase, ['listBy']));

module.exports = Estimate_Item_Categories;
