tgd.showLoading = function(callback) {
    $("body").css("cursor", "progress");
    setTimeout(function() {
        callback();
        setTimeout(function() {
            $("body").css("cursor", "default");
        }, 10);
    }, 600);
};

tgd.cartesianProductOf = function(x) {
    return _.reduce(x, function(a, b) {
        return _.flatten(_.map(a, function(x) {
            return _.map(b, function(y) {
                return x.concat([y]);
            });
        }), true);
    }, [
        []
    ]);
};

tgd.sum = function(arr) {
    return _.reduce(arr, function(memo, num) {
        return memo + num;
    }, 0);
};

tgd.average = function(arr) {
    return _.reduce(arr, function(memo, num) {
        return memo + num;
    }, 0) / arr.length;
};

tgd.joinStats = function(arrItems) {
    var tmp = {
        "Intellect": 0,
        "Discipline": 0,
        "Strength": 0
    };
    for (var i = 0, len = arrItems.length; i < len; i++) {
        var item;
        if (arrItems[i].activeRoll) {
            item = arrItems[i].activeRoll;
        } else {
            item = arrItems[i].stats;
        }
        if (_.has(item, 'Intellect')) {
            tmp["Intellect"] += item["Intellect"];
            tmp["Discipline"] += item["Discipline"];
            tmp["Strength"] += item["Strength"];
        }
    };
    return tmp;
};

tgd.hashCode = function(str) {

    if (Array.prototype.reduce) {
        return str.split("").reduce(function(a, b) {
            a = ((a << 5) - a) + b.charCodeAt(0);
            return a & a;
        }, 0);
    } else {
        var hash = 0,
            i, chr, len;
        if (str.length === 0) return hash;
        for (i = 0, len = str.length; i < len; i++) {
            chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
};