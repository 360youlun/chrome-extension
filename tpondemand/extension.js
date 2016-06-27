(function() {
    var interval = setInterval(tick, 1000);

    function tick() {
        handleErpLinks();
    }

    function handleErpLinks() {
        $('.ui-customfield__value:contains(erp.ylly.com/)').each(convertUrlToLink);
    }

    function convertUrlToLink(index, element) {
        element = $(element);

        if (element.children().length > 0) {
            return;
        }

        var link = $('<a>')
            .attr('href', element.text())
            .attr('target', '_blank')
            .text(element.text());

        element.empty().append(link);
    }
})();
