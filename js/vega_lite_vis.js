var spec = "/js/price_bar_chart.json";
vegaEmbed('#bar_chart', spec).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var spec2 = "/js/price_brushing.json";
vegaEmbed('#brush_chart', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec3 = "/js/factors_matrix.json";
vegaEmbed('#matrix', spec3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec4 = "js/donut.json";
vegaEmbed('#donut', spec4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec5 = "js/relationship.json";
vegaEmbed('#relationship', spec5).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec6 = "js/heatmap.json";
vegaEmbed('#heatmap', spec6).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
