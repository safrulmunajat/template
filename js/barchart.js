$(function () {
    $('#container').highcharts({
        data: {
            table: document.getElementById('datatable')
        },
        chart: {
            type: 'column'
        },
        legend: {
            enabled: false
        },
        credits:{
            enabled:false
        },
        title: {
            text: 'Data Perolehan Suara'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Jumlah ( Suara )'
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + ' ' + this.point.name.toLowerCase();
            }
        }
    });
});