'use strict';

exports.inv_record = function(req, res) {
    var output = {
        'data': [
            {
                "inventory_name": "panel",
                "date": "01/01/18",
                "quantity": "1215",
                "price_per_unit": "100",
                "total_price": "122000"
            },    
            {
                "inventory_name": "inverters",
                "date": "01/01/18",
                "quantity": "124",
                "price_per_unit": "10",
                "total_price": "1240"
            }
        ]
    }

    res.json(output);   // send output
}

exports.cur_sites = function(req, res) {
    var output = {
        'data': [
            {
                "site_name": "Keels Maharagama",
                "current_status": "ongoing",
                "date_started": "03/04/18",
                "date_completed": "-"
            },    
            {
                "site_name": "XYZ",
                "current_status": "completed",
                "date_started": "01/04/18",
                "date_completed": "05/04/18"
            }
        ]
    }

    res.json(output);
}

exports.stock_mtn = function(req, res) {
    var output = {
        'data': [
            {
                "item": "panel",
                "current_stock": "1215"
            },    
            {
                "item": "inverters",
                "current_stock": "4"
            },
            {
                "item": "mount",
                "current_stock": "200"
            },
            {
                "item": "cable",
                "current_stock": "5000"
            },
            {
                "item": "clips",
                "current_stock": "2500"
            }
        ]
    }

    res.json(output);
}

exports.site = function(req, res) {

    var output;

    console.log('req.query.site: ' + req.query.site);

    if(req.query.site === 'Keels Maharagama') {
        output = {
            'site': 'Keels Maharagama',
            'awarded_date': '01/02/18',
            'awarded_price': '5000',
            'inventory_cost': {
                'data': [
                    {
                        "issued_items": "panels",
                        "quantity": "5",
                        "price": "100",
                        "cost": "500"
                    },    
                    {
                        "issued_items": "inverters",
                        "quantity": "1",
                        "price": "200",
                        "cost": "200"
                    }
                ],
                'total': '700'
            },
            'site_expences': {
                'data': [
                    {
                        "expence_type": "OT",
                        "cost": "100"
                    },    
                    {
                        "expence_type": "Travel",
                        "cost": "100"
                    },
                    {
                        "expence_type": "Meals",
                        "cost": "50"
                    },
                    {
                        "expence_type": "Other",
                        "cost": "50"
                    }
                ],
                'total': '300'
            },
            'total': '1000'
        }
    } else {
        output = {
            'site': 'XYZ',
            'awarded_date': '01/02/18',
            'awarded_price': '12500',
            'inventory_cost': {
                'data': [
                    {
                        "issued_items": "panels",
                        "quantity": "8",
                        "price": "100",
                        "cost": "800"
                    },    
                    {
                        "issued_items": "inverters",
                        "quantity": "2",
                        "price": "200",
                        "cost": "400"
                    }
                ],
                'total': '1200'
            },
            'site_expences': {
                'data': [
                    {
                        "expence_type": "OT",
                        "cost": "200"
                    },    
                    {
                        "expence_type": "Travel",
                        "cost": "100"
                    },
                    {
                        "expence_type": "Meals",
                        "cost": "150"
                    },
                    {
                        "expence_type": "Other",
                        "cost": "150"
                    }
                ],
                'total': '600'
            },
            'total': '1800'
        }
    }

    res.json(output);
}
