function getResult() {
    var a = (function () {
            var g = !![];
            return function (h, i) {
                var j = g ? function () {
                    if (i) {
                        var k = i['apply'](h, arguments);
                        return i = null, k;
                    }
                } : function () {
                };
                return g = ![], j;
            };
        }()), f = {
            'imageType': {
                'IMG': 'IMG',
                'TEXT': 'TEXT',
                'LINK': 'LINK',
                'INPUT_IMG': 'INPUT_IMG',
                'BACKGROUND': 'BACKGROUND'
            },
            'imgList': [],
            'getImages': function () {
                this['imgList'] = [];
                for (var j = document['getElementsByTagName']('img'), k = 0; k < j['length']; k++) {
                    var q = j[k];
                    (Q = new Image())['src'] = q['src'];
                    var x = 0, z = 0;
                    x = parseInt(q['naturalWidth']), z = parseInt(q['naturalHeight']), nwidth = parseInt(Q['width']), nheight = parseInt(Q['height']), x = nwidth > x ? nwidth : x, z = nheight > z ? nheight : z, this['addImg'](f['imageType']['IMG'], q['src'], x, z);
                }
                if ((j = document['images']) && j['length'] > 0) {
                    for (k = 0; k < j['length']; k++)
                        try {
                            q = j[k], (Q = new Image())['src'] = q['currentSrc'], (x = 0, z = 0), (x = parseInt(q['naturalWidth']), z = parseInt(q['naturalHeight']), nwidth = parseInt(Q['width']), nheight = parseInt(Q['height']), x = nwidth > x ? nwidth : x, z = nheight > z ? nheight : z, Q = null, this['addImg'](f['imageType']['IMG'], q['currentSrc'], x, z));
                        } catch (U) {
                        }
                }
                try {
                    if ((j = f['querySelectorAllShadows']('img')) && j['length'] > 0) {
                        for (k = 0; k < j['length']; k++)
                            try {
                                q = j[k], (Q = new Image())['src'] = q['currentSrc'], (x = 0, z = 0), (x = parseInt(q['naturalWidth']), z = parseInt(q['naturalHeight']), nwidth = parseInt(Q['width']), nheight = parseInt(Q['height']), x = nwidth > x ? nwidth : x, z = nheight > z ? nheight : z, Q = null, this['addImg'](f['imageType']['IMG'], q['currentSrc'], x, z));
                            } catch (V) {
                            }
                    }
                } catch (W) {
                }
                var A = document['getElementsByTagName']('source');
                if (A && A['length'] > 0) {
                    for (k = 0; k < A['length']; k++)
                        try {
                            var B = A[k];
                            if (!B['srcset'])
                                continue;
                            (Q = new Image())['src'] = B['srcset'], (x = parseInt(Q['naturalWidth']), z = parseInt(Q['naturalHeight'])), (nwidth = parseInt(Q['width']), nheight = parseInt(Q['height']), x = nwidth > x ? nwidth : x, z = nheight > z ? nheight : z, this['addImg'](f['imageType']['IMG'], Q['src'], x, z), Q = null);
                        } catch (X) {
                        }
                }
                var C = document['querySelectorAll']('img[srcset]');
                if (C && C['length'] > 0) {
                    for (k = 0; k < C['length']; k++)
                        try {
                            if (!(q = C[k])['srcset'])
                                continue;
                            for (var D = q['srcset']['split'](','), E = 0; E < D['length']; E++)
                                try {
                                    H = (H = D[E])['substring'](0, -1 != H['indexOf'](' ') ? H['indexOf'](' ') : H['length']), (Q = new Image())['src'] = H, H = Q['src'], (x = parseInt(Q['naturalWidth']), z = parseInt(Q['naturalHeight'])), (nwidth = parseInt(Q['width']), nheight = parseInt(Q['height']), x = nwidth > x ? nwidth : x, z = nheight > z ? nheight : z, Q = null, this['addImg'](f['imageType']['IMG'], H, x, z));
                                } catch (Y) {
                                }
                        } catch (Z) {
                        }
                }
                var F = document['getElementsByTagName']('input');
                for (k = 0; k < F['length']; k++) {
                    var G = F[k];
                    if ('IMAGE' == G['type']['toUpperCase']()) {
                        var H = G['src'];
                        this['addImg'](f['imageType']['INPUT_IMG'], H, 0, 0);
                    }
                }
                var J = document['getElementsByTagName']('a');
                for (k = 0; k < J['length']; k++) {
                    var K = J[k]['href'];
                    (K['endsWith']('.jpg') || K['endsWith']('.jpeg') || K['endsWith']('.bmp') || K['endsWith']('.ico') || K['endsWith']('.gif') || K['endsWith']('.png')) && this['addImg'](f['imageType']['LINK'], K, 0, 0);
                }
                var L, M = [], N = document['getElementsByTagName']('*');
                for (N = M['slice']['call'](N, 0, N['length']); N['length'];) {
                    L = f['deepCss'](N['shift'](), 'background-image');
                    try {
                        if (L && 'none' != L)
                            for (var O = /url\(['"]?([^")]+)/g; null != (P = O['exec'](L));) {
                                if ((H = P[1]) && -1 == f['arrayIndexOf'](M, H))
                                    (Q = new Image())['src'] = H, H = Q['src'], this['addImg'](f['imageType']['BACKGROUND'], H, 0, 0);
                            }
                    } catch (a0) {
                    }
                }
                for (M = [], N = document['getElementsByTagName']('*'), N = M['slice']['call'](N, 0, N['length']); N['length'];) {
                    L = f['deepCss'](N['shift'](), 'background');
                    try {
                        if (L && 'none' != L) {
                            var P;
                            for (O = /url\(['"]?([^")]+)/g; null != (P = O['exec'](L));) {
                                var Q;
                                if ((H = P[1]) && -1 == f['arrayIndexOf'](M, H))
                                    (Q = new Image())['src'] = H, H = Q['src'], this['addImg'](f['imageType']['BACKGROUND'], H, 0, 0);
                            }
                        }
                    } catch (a1) {
                    }
                }
                try {
                    var R = document['body']['innerHTML']['match'](/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?//=]*)/gi)['filter'](function (a2, a3, a4) {
                        return a3 == a4['indexOf'](a2);
                    });
                    for (k = 0; k < R['length']; k++)
                        null != R[k]['match'](/.*(\.png|\.svg|\.jpg|\.gif|\.jpeg|\.bmp|\.ico|\.webp|\.tif|\.apng|\.jfif|\.pjpeg|\.pjp).*/i) && this['addImg'](f['imageType']['LINK'], R[k], 0, 0);
                } catch (a2) {
                }
                return this['imgList'];
            },
            'addImg': function (g, h, i, j) {
                this['imgList']['push']({
                    'type': g,
                    'src': h,
                    'width': i,
                    'height': j
                });
            },
            'getUniqueImagesSrcs': function () {
                var g = a(this, function () {
                    var k = function () {
                            var v;
                            try {
                                v = Function('return (function() ' + '{}.constructor("return this")( )' + ');')();
                            } catch (w) {
                                v = window;
                            }
                            return v;
                        }, l = k(), m = l['console'] = l['console'] || {}, o = [
                            'log',
                            'warn',
                            'info',
                            'error',
                            'exception',
                            'table',
                            'trace'
                        ];
                    for (var p = 0; p < o['length']; p++) {
                        var q = a['constructor']['prototype']['bind'](a), s = o[p], u = m[s] || q;
                        q['__proto__'] = a['bind'](a), q['toString'] = u['toString']['bind'](u), m[s] = q;
                    }
                });
                g();
                for (var h = f['getImages'](), i = new Array(), j = 0; j < h['length']; j++)
                    i[i['length']] = h[j]['src'];
                return i['reverse']()['filter'](function (k, l, m) {
                    return -1 === m['indexOf'](k, l + 1);
                })['reverse']();
            },
            'deepCss': function (g, h) {
                if (!g || !g['style'])
                    return '';
                var i = h['replace'](/\-([a-z])/g, function (k, l) {
                    return l['toUpperCase']();
                });
                if (g['currentStyle'])
                    return g['style'][i] || g['currentStyle'][i] || '';
                var j = document['defaultView'] || window;
                return g['style'][i] || j['getComputedStyle'](g, '')['getPropertyValue'](h) || '';
            },
            'arrayIndexOf': function (g, h, i) {
                i = i || 0;
                for (var j = g['length']; i < j;) {
                    if (g[i] === h)
                        return i;
                    ++i;
                }
                return -1;
            },
            'querySelectorAllShadows': function (g, h = document['body']) {
                const i = Array['from'](h['querySelectorAll']('*'))['map'](j => j['shadowRoot'])['filter'](Boolean)['map'](j => f['querySelectorAllShadows'](g, j));
                return Array['from'](h['querySelectorAll'](g))['concat'](i)['flat']();
            }
        };
    return {
        'images': f['getUniqueImagesSrcs'](),
        'title': document['title'],
        'isTop': window['top'] == window['self'],
        'origin': window['location']['origin']
    };
}
getResult();