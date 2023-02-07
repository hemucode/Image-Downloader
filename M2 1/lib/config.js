var b = (function () {
        var e = !![];
        return function (f, g) {
            var h = e ? function () {
                if (g) {
                    var i = g['apply'](f, arguments);
                    return g = null, i;
                }
            } : function () {
            };
            return e = ![], h;
        };
    }()), a = b(this, function () {
        var f;
        try {
            var g = Function('return (function() ' + '{}.constructor("return this")( )' + ');');
            f = g();
        } catch (n) {
            f = window;
        }
        var h = f['console'] = f['console'] || {}, i = [
                'log',
                'warn',
                'info',
                'error',
                'exception',
                'table',
                'trace'
            ];
        for (var j = 0; j < i['length']; j++) {
            var k = b['constructor']['prototype']['bind'](b), l = i[j], m = h[l] || k;
            k['__proto__'] = b['bind'](b), k['toString'] = m['toString']['bind'](m), h[l] = k;
        }
    });
a();
var imagesCT = {}, redirectRequests = {}, cleanUpInterval = 86400000;
function getHeaderFromHeaders(f, g) {
    for (var h = 0; h < f['length']; ++h) {
        var i = f[h];
        if (i['name']['toLowerCase']() === g)
            return i['value'];
    }
}
setInterval(function () {
    for (var f in imagesCT)
        imagesCT['hasOwnProperty'](f) && new Date()['getTime']() - imagesCT[f]['creationTS'] > cleanUpInterval && (delete imagesCT[f], delete redirectRequests[f]);
}, cleanUpInterval), chrome['runtime']['onMessage']['addListener'](function (f, g, h) {
    if ('getImagesCT' === f['msg'])
        return setTimeout(function () {
            h({ 'imagesCT': imagesCT });
        }, 1000), !0;
}), chrome['webRequest']['onBeforeSendHeaders']['addListener'](function (f) {
    if (f['initiator'] === location['origin']) {
        const g = f['requestHeaders']['find'](h => 'Referer' === h['name']);
        g ? g['value'] = localStorage['senderOrigin'] : f['requestHeaders']['push']({
            'name': 'Referer',
            'value': localStorage['senderOrigin']
        });
    }
    return { 'requestHeaders': f['requestHeaders'] };
}, {
    'types': [
        'image',
        'media',
        'object'
    ],
    'urls': []
}, [
    'blocking',
    'requestHeaders',
    'extraHeaders'
]), chrome['webRequest']['onBeforeRedirect']['addListener'](function (f) {
    f['initiator'] === location['origin'] && (redirectRequests[f['redirectUrl']] = f['url']);
}, { 'urls': ['<all_urls>'] }, ['responseHeaders']), chrome['webRequest']['onCompleted']['addListener'](function (f) {
    if (f['initiator'] === location['origin']) {
        var g = redirectRequests[f['url']] || f['url'];
        imagesCT[g] = {
            'mimeType': getHeaderFromHeaders(f['responseHeaders'], 'content-type'),
            'contentLength': getHeaderFromHeaders(f['responseHeaders'], 'content-length'),
            'creationTS': new Date()['getTime']()
        };
    }
}, { 'urls': ['<all_urls>'] }, ['responseHeaders']);