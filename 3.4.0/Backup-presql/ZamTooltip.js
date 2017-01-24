if (typeof $AkzToolTip === "undefined") {
    var $AkzToolTip = new function () {

        var head = document.getElementsByTagName("head")[0],
        createElement = function (type, p) {
            var newelement = document.createElement(type);
            if (p) {
                createObject(newelement, p);
            }
            return newelement;
        },
        createObject = function (element, s) {
            for (var p in s) {
                if (typeof s[p] === "object") {
                    if (!element[p]) {
                        element[p] = {};
                    }
                    createObject(element[p], s[p]);
                } else {
                    element[p] = s[p];
                }
            }
        },
        addElement = function (p, element) {
            return p.appendChild(element);
        },
        requestTooltip = function (id) {
            var url = "http://rift.zam.com/en/tooltip.html?riftitem=" + id;
            addElement(head, createElement("script", { type: "text/javascript", src: url, id: id }));
        },
        showTooltip = function (html) {
            $.mobile.hidePageLoadingMsg();
            TINY.box.show({
                html: stripZamlink(html),
                autohide: 15,
                close: true
            });
        },
        stripZamlink = function (html) {
            return html.replace('<div class="tt-source">Source: <a class="referal" href="http://rift.zam.com">rift.zam.com</a></div>', '');
        },
        setCookie = function (id, value) {
            AppMobi.cache.setCookie("A" + id, value, -1);
        }

        //proto functions
        this.registerItem = function (obj) {
            //setCookie(obj.id, obj.tooltip);
            $('#' + obj.id).remove();
            if (!isCaching) {
                showTooltip(obj.tooltip);
            }
        }

        this.getTooltip = function (id) {
            $.mobile.showPageLoadingMsg();
            //var item = AppMobi.cache.getCookie("A" + id);
            //if (typeof item === "undefined") {
                requestTooltip(id);
            //}
            //else if (!isCaching) {
               // showTooltip(item);
            //}
        }

        this.setCookie = function (id, value) {
            AppMobi.cache.setCookie(id, value, -1);
        }
    }
}