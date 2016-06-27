(function() {
    var STATE_HANDLERS = {
        'other': function() {},
        'userstory': updateUserStory,
    };

    var interval = setInterval(tick, 1000);

    function tick() {
        var state = getState();
        STATE_HANDLERS[state]();
    }

    function getRoute() {
        var components = window.location.hash.substr(1).split('&');
        var route = {};
        for (var i = 0, len = components.length; i < len; i++) {
            components[i] = components[i].split('=', 2);
            route[components[i][0]] = components[i][1];
        }
        return route;
    }

    function getState() {
        var route = getRoute();
        if (route.boardPopup) {
            if (route.boardPopup.indexOf('userstory/') === 0) {
                return 'userstory';
            }
        } else if (route.page) {
            if (route.page.indexOf('userstory/') === 0) {
                return 'userstory';
            }
        } else {
            return 'other';
        }
    }

    function updateUserStory() {
        $('.ui-customfield__value:contains(erp.ylly.com/team/stories)')
            .each(updateErpField);
    }

    function updateErpField(index, element) {
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
