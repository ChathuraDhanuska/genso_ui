// This Script will be responsiable for generating table of stock maintenance page

var editor;

$(document).ready(function() {
    editor = new $.fn.dataTable.Editor({
        // ajax: "../php/staff.php",        // this section is commented
        table: 'stock_maintenance',
        fields: [{
            label: "Item",
            name: "item"
        }, {
            label: "Current Stock",
            name: "current_stock"
        }]
    });

    var table = $('stock_maintenance').DataTable({
        lengthChange: false,
        ajax: '../php/staff.php',
        columns: [
            { data: "item" },
            { data: "current_stock" }
        ],
        select: true
    });

    // Display buttons
    new $.fn.dataTable.Buttons( table, [
        { extend: 'create', editor: editor },
        { extend: 'edit', editor: editor },
        { extend: 'remove', editor: editor }
    ]);

    table.buttons().container()
        .appendTo( $('.col-sm-6:eq(0)', table.table().container()) );
});