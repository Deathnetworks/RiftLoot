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
        openDB = function () {
            try {
                if (window.openDatabase) {
                    db = openDatabase("appmobi", "1.0", "riftlootapp", 1024 * 1024);
                    if (!db)
                        alert("Failed to open the database on disk.  This is probably because the version was bad or there is not enough space left.", "Database Error");
                } else
                    alert("Couldn't open the database.", "Database Error");
            } catch (err) {
                db = null;
                alert("Couldn't open the database.", "Database Error");
            }
        },
        saveTooltipDB = function (id, html) {
            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS ItemTooltip (id TEXT PRIMARY KEY, html TEXT)');
                tx.executeSql('INSERT INTO ItemTooltip(id,Html) VALUES (?, ?)', [id, html]);
            });
        },
        getTooltipDB = function (id) {
            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS ItemTooltip (id TEXT PRIMARY KEY, html TEXT)');
                tx.executeSql('SELECT html FROM ItemTooltip WHERE id = ?', [id],
                    function (tx, results) {
                        if (results.rows.length === 1) {
                            if (!isCaching) {
                                showTooltip(results.rows.item(0).html);
                            }
                            else if (typeof tooltipPromise == "object") {
                                tooltipPromise.resolve("done");
                            }
                        }
                        else {
                            requestTooltip(id);
                        }
                    }
                );
            });
        }

        //proto functions
        this.clearCache = function () {
            if (typeof db === "undefined") {
                openDB();
            }
            db.transaction(function (tx) {
                tx.executeSql('DROP TABLE IF EXISTS ItemTooltip')
            });
        }

        this.checkCache = function () {
            var defer = $.Deferred()
            if (typeof db == "undefined") {
                openDB();
            }
            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS ItemTooltip (id TEXT PRIMARY KEY, html TEXT)');
                tx.executeSql('SELECT id FROM ItemTooltip', [],
                    function (tx, results) {
                        var items = new Array();
                        for (var i = 0; i < results.rows.length; i++) {
                            items.push(results.rows.item(i).id);

                        }
                        defer.resolve(items);
                    }
                );
            });
            return defer;
        }

        this.registerItem = function (obj) {
            if (typeof db === "undefined") {
                openDB();
            }
            saveTooltipDB(obj.id, obj.tooltip);
            $('#' + obj.id).remove();
            if (!isCaching) {
                showTooltip(obj.tooltip);
            } else if (typeof tooltipPromise == "object") {
                tooltipPromise.resolve("done");
            }
        }

        this.getTooltip = function (id) {
            $.mobile.showPageLoadingMsg();
            if (typeof db === "undefined") {
                openDB();
            }
            getTooltipDB(id);
        }
    }
}