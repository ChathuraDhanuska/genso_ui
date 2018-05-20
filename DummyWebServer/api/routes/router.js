'use strict';

module.exports = function(app) {
    var controller = require('../controllers/controller');

    app.route('/inventory_purchase_record')
        .get(controller.inv_record);

    app.route('/current_sites')
        .get(controller.cur_sites);

    app.route('/stock_maintenance')
        .get(controller.stock_mtn);

    app.route('/site')
        .get(controller.site);
};