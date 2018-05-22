'use strict';

module.exports = function(app) {
    var controller = require('../controllers/controller');

    app.route('/inventory_purchase_record')
        .post(controller.inv_post)
        .put(controller.inv_put)
        .delete(controller.inv_del)
        .get(controller.inv_record);

    app.route('/current_sites')
        .post(controller.add_site)
        .get(controller.cur_sites);

    app.route('/stock_maintenance')
        .get(controller.stock_mtn);

    app.route('/site')
        .get(controller.site);

    app.route('/site/inv')
        .post(controller.add_site_inv)
        .put(controller.edit_site_inv)
        .delete(controller.del_site_inv);

    app.route('/site/exp')
        .post(controller.add_site_exp)
        .put(controller.edit_site_exp)
        .delete(controller.del_site_exp);
};