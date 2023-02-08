function d(a, b) {
    var e = c();
    return d = function (f, g) {
        f = f - 0;
        var h = e[f];
        return h;
    }, d(a, b);
}
function c() {
    var G = [
        'getMessage',
        'onclick'
    ];
    c = function () {
        return G;
    };
    return c();
}
var conf = {
        'defaults': {
            'minwidth': 0,
            'minheight': 0,
            'downloadseparatefolder': ![],
            'downloadfolderpref': 'basedonurl',
            'savefoldername': 'downloadhub',
            'donotbother': ![],
            'numviews': 0,
            'allframes': ![],
            'biggerview': !![],
            'web2jpg': ![],
            'twocols': !![],
            'newshown1': ![],
            'hidetools': ![],
            'savesize': ![],
            'sizetype': 'any'
        },
        'minwidth': 0,
        'minheight': 0,
        'urlpattern': '',
        'downloadseparatefolder': ![],
        'downloadfolderpref': 'basedonurl',
        'savefoldername': 'downloadhub',
        'donotbother': ![],
        'changed': ![],
        'allframes': ![],
        'biggerview': !![],
        'web2jpg': ![],
        'twocols': !![],
        'newshown1': ![],
        'hidetools': ![],
        'savesize': ![],
        'sizetype': 'any'
    }, downloadhub = {
        'darkmode': window['matchMedia'] && window['matchMedia']('(prefers-color-scheme: dark)')['matches'],
        'imageCT': new Object(),
        'selection': new Object(),
        'allimages': new Object(),
        'stats': {
            'types': {},
            'sizes': {}
        },
        'getImages': function (a) {
            chrome['runtime']['sendMessage']({ 'msg': 'getImagesCT' }, function (f) {
            }), downloadhub['initiated'] = ![];
            var b = conf['allframes'];
            if (b)
                b = !a;
            downloadhub['allimages'] = new Object(), downloadhub['monitorStatus'](a);
            var e = '<div id="spinner" class="spinner"><span id="processedImages" style="position: absolute;top: -38px;left: 50%;transform:translateX(-50%);white-space:nowrap;"></span><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';
            $('#imgsContainer')[0]['innerHTML']['trim']() != e && ($('#imgsContainer')[0]['innerHTML'] = e), chrome['tabs']['query']({
                'active': !![],
                'currentWindow': !![]
            }, function (f) {
                downloadhub['currUrl'] = f[0]['url'], chrome['scripting']['executeScript']({
                    'target': {
                        'tabId': f[0]['id'],
                        'allFrames': b
                    },
                    'files': ['lib/image.js']
                }, g => {
                    downloadhub['getImagesCallback'](g);
                });
            });
        },
        'getImagesCallback': async function (a) {
            if (downloadhub['initiated'])
                return;
            console['log'](a), downloadhub['initiated'] = !![];
            if (chrome['extension']['lastError'] || !a) {
                var b = chrome['extension']['lastError'] ? chrome['extension']['lastError']['message'] : 'Cannot access images in this page.';
                (b['indexOf']('The extensions gallery cannot be scripted') != -1 || b['indexOf']('Missing host permission for the tab') != -1) && ($('#imgsContainer')[0]['style']['padding'] = '0px 20px', $('#imgsContainer')[0]['style']['position'] = 'relative', b = '<div style="width:387px;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 201.526 201.526" style="enable-background:new 0 0 512 512;width: 65px;height: 65px;float: left;" xml:space="preserve" class=""><g><path d="M191.125,11.403H10.4C4.666,11.403,0,16.068,0,21.805v59.108c0,5.738,4.666,10.404,10.4,10.404h180.726     c5.734,0,10.4-4.666,10.4-10.403V21.805C201.525,16.068,196.86,11.403,191.125,11.403z M194.577,80.914h-0.001     c0,1.903-1.547,3.454-3.451,3.454H10.4c-1.904,0-3.451-1.551-3.451-3.454V21.805c0-1.903,1.547-3.454,3.451-3.454h180.726     c1.903,0,3.451,1.551,3.451,3.454V80.914z" fill="#333333" data-original="#000000" style="" class=""></path><path d="M63.924,35.968c-1.751-0.801-3.807-0.027-4.605,1.714L48.821,60.606l-3.19-6.696l6.109-13.338     c0.797-1.744,0.034-3.807-1.714-4.605c-1.751-0.801-3.811-0.027-4.605,1.714l-3.687,8.051l-3.859-8.099     c-0.825-1.734-2.888-2.477-4.628-1.642c-1.734,0.825-2.47,2.898-1.642,4.628l6.358,13.347l-3.04,6.638l-10.947-22.97     c-0.821-1.734-2.888-2.477-4.628-1.642c-1.734,0.825-2.47,2.898-1.642,4.628l14.143,29.686c0.573,1.211,1.795,1.982,3.135,1.982     c0.01,0,0.017,0,0.027,0c1.347-0.01,2.569-0.801,3.132-2.029l3.716-8.113l3.888,8.161c0.573,1.211,1.795,1.982,3.135,1.982     c0.01,0,0.017,0,0.027,0c1.347-0.01,2.569-0.801,3.132-2.029l13.596-29.686C66.434,38.83,65.671,36.766,63.924,35.968z" fill="#333333" data-original="#000000" style="" class=""></path><path d="M122.991,35.968c-1.754-0.801-3.807-0.027-4.605,1.714l-10.498,22.924l-3.19-6.696l6.109-13.338     c0.797-1.744,0.034-3.807-1.714-4.605c-1.751-0.801-3.807-0.027-4.604,1.714l-3.687,8.051l-3.859-8.099     c-0.821-1.734-2.891-2.477-4.628-1.642c-1.734,0.825-2.47,2.898-1.642,4.628l6.358,13.347l-3.04,6.638l-10.947-22.97     c-0.821-1.734-2.891-2.477-4.628-1.642c-1.734,0.825-2.47,2.898-1.642,4.628l14.143,29.686c0.573,1.211,1.795,1.982,3.135,1.982     c0.01,0,0.017,0,0.027,0c1.347-0.01,2.569-0.801,3.132-2.029l3.716-8.113l3.888,8.161c0.573,1.211,1.795,1.982,3.135,1.982     c0.01,0,0.017,0,0.027,0c1.347-0.01,2.569-0.801,3.132-2.029l13.596-29.686C125.502,38.83,124.739,36.766,122.991,35.968z" fill="#333333" data-original="#000000" style="" class=""></path><path d="M182.059,35.968c-1.751-0.801-3.807-0.027-4.605,1.714l-10.498,22.924l-3.19-6.696l6.109-13.338     c0.797-1.744,0.034-3.807-1.714-4.605c-1.751-0.801-3.807-0.027-4.605,1.714l-3.687,8.051l-3.859-8.099     c-0.821-1.734-2.888-2.477-4.628-1.642c-1.734,0.825-2.47,2.898-1.642,4.628l6.358,13.347l-3.04,6.638l-10.946-22.971     c-0.821-1.734-2.888-2.477-4.628-1.642c-1.734,0.825-2.47,2.898-1.642,4.628l14.143,29.686c0.573,1.211,1.795,1.982,3.135,1.982     c0.01,0,0.017,0,0.027,0c1.347-0.01,2.569-0.801,3.132-2.029l3.716-8.113l3.888,8.161c0.573,1.211,1.795,1.982,3.135,1.982     c0.01,0,0.017,0,0.027,0c1.347-0.01,2.569-0.801,3.132-2.029l13.596-29.686C184.57,38.83,183.806,36.766,182.059,35.968z" fill="#333333" data-original="#000000" style="" class=""></path><path d="M183.461,140.316L130.3,97.208c-1.065-0.865-2.545-1.018-3.766-0.397c-1.222,0.621-1.965,1.907-1.893,3.278l3.627,68.345     c0.078,1.455,1.055,2.708,2.45,3.139c1.384,0.421,2.904-0.061,3.787-1.222c0.065-0.081,5.398-7.075,11.231-12.901l15.68,30.776     c0.417,0.821,1.143,1.442,2.022,1.727c0.35,0.112,0.713,0.17,1.072,0.17c0.543,0,1.086-0.129,1.578-0.38l12.385-6.311     c0.821-0.417,1.442-1.143,1.727-2.022c0.285-0.876,0.21-1.829-0.21-2.65l-15.68-30.772c8.14-1.293,16.932-1.5,17.037-1.5     c1.455-0.034,2.742-0.97,3.213-2.348C185.031,142.759,184.594,141.232,183.461,140.316z M158.337,142.055     c-1.045,0.238-1.92,0.943-2.375,1.914c-0.451,0.97-0.434,2.097,0.054,3.05l16.206,31.8l-6.192,3.156l-16.206-31.804     c-0.485-0.953-1.384-1.632-2.436-1.832c-0.217-0.044-0.438-0.065-0.658-0.065c-0.831,0-1.646,0.298-2.283,0.859     c-3.444,3.003-6.926,6.756-9.715,9.972l-2.734-51.576l40.117,32.53C167.876,140.426,162.793,141.037,158.337,142.055z" fill="#333333" data-original="#000000" style="" class=""></path></g></svg><div style="float: left;padding-left: 15px;width:300px;">Visit a website and you will be able to find and download all the images...</div></div>');
                var f = document['createElement']('div');
                f['innerHTML'] = '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);">' + b + '</center>', f['style']['width'] = '100%', f['style']['height'] = '100%', $('#imgsContainer')[0]['appendChild'](f), document['getElementById']('spinner')['style']['display'] = 'none', document['getElementById']('searchingimages')['style']['display'] = 'none';
                var g = document['getElementById']('numimagesfound');
                g['origMessage'] = g['origMessage'] || g['innerHTML'], g['innerHTML'] = g['origMessage']['replace']('%n', document['querySelectorAll']('.imgContainer')['length']), document['getElementById']('numimagesfound')['style']['display'] = '', document['getElementById']('selectalla')['style']['visibility'] = 'visible';
            } else {
                var h = 0, j = 0;
                for (var k = 0; k < a['length']; k++) {
                    a[k] != null && a[k]['result']['images'] != null && a[k]['result']['images']['length'] > 0 && (j += a[k]['result']['images']['length']);
                }
                if (j == 0) {
                    downloadhub['foundlastimage']();
                    return;
                }
                $('#processedImages')[0]['innerHTML'] = 'analyzing 0 of ' + j + ' images';
                for (var k = 0; k < a['length']; k++) {
                    if (a[k] == null || a[k]['result']['images'] == null)
                        continue;
                    localStorage['active_tab_origin'] = a[k]['result']['origin'];
                    var l = a[k]['result']['images'];
                    console['log']('images length: ' + l['length']);
                    if (a[k]['result']['isTop'])
                        downloadhub['title'] = a[k]['result']['title'];
                    var m = [], n = [];
                    for (var o = 0; o < l['length']; o++) {
                        var p = o + 1;
                        l[o] && l[o]['indexOf']('http') == 0 && (m[m['length']] = {
                            'id': p,
                            'priority': 1,
                            'action': {
                                'type': 'modifyHeaders',
                                'requestHeaders': [{
                                        'header': 'Referer',
                                        'operation': 'set',
                                        'value': localStorage['active_tab_origin']
                                    }]
                            },
                            'condition': {
                                'urlFilter': l[o],
                                'resourceTypes': ['image']
                            }
                        }, n[n['length']] = p);
                    }
                    await chrome['declarativeNetRequest']['updateSessionRules']({
                        'addRules': m,
                        'removeRuleIds': n
                    });
                    for (var o = 0; o < l['length']; o++) {
                        try {
                            console['log']('going to inject img: ' + l[o]);
                            if (downloadhub['allimages'][l[o]]) {
                                h++;
                                continue;
                            }
                            downloadhub['allimages'][l[o]] = l[o];
                            var q = document['createElement']('img');
                            q['src'] = l[o], q['style']['maxWidth'] = '600px';
                            function t() {
                                h++, $('#processedImages')[0]['innerHTML'] = 'analyzing ' + h + ' of ' + j + ' images', h == j && downloadhub['foundlastimage']();
                            }
                            var s = setTimeout(function (u) {
                                u['setAttribute']('timeoutExpired', !![]), t();
                            }, Math['min'](Math['max'](j / 10 * 1000, 5000), 60000), q);
                            q['setAttribute']('timeout', s), q['onerror'] = function () {
                                if (this['getAttribute']('timeoutExpired'))
                                    return;
                                clearTimeout(this['getAttribute']('timeout')), t();
                            }, q['onload'] = async function () {
                                var E = d;
                                if (this['getAttribute']('timeoutExpired'))
                                    return;
                                clearTimeout(this['getAttribute']('timeout')), h++, $('#processedImages')[0]['innerHTML'] = 'analyzing ' + h + ' of ' + j + ' images';
                                var u = this['src'], v = document['createElement']('div');
                                v['className'] = 'imgContainer';
                                var w = this['width'], x = this['height'], y = w * x;
                                v['setAttribute']('pixels', y), v['setAttribute']('width', w), v['setAttribute']('height', x);
                                if (y < 200 * 200)
                                    v['setAttribute']('sizeType', 'small');
                                if (y >= 200 * 200)
                                    v['setAttribute']('sizeType', 'medium');
                                if (y >= 800 * 600)
                                    v['setAttribute']('sizeType', 'large');
                                if (w >= x * 1.2)
                                    v['setAttribute']('layout', 'wide');
                                else {
                                    if (x >= w * 1.2)
                                        v['setAttribute']('layout', 'tall');
                                    else
                                        v['setAttribute']('layout', 'square');
                                }
                                var z = 'style="wwidth:' + w + 'px;hheight:' + x + 'px"';
                                v['innerHTML'] = '<img class="origImg" id="' + u + '" src="' + u + '" ' + z + '><br><input class="imgInput" value="' + this['src'] + '"><div class="imgInfo"><div class="imgSize imgDimension" style="margin-left:5px;">-</div><div class="imgSize">' + this['width'] + 'x' + this['height'] + '</div><div class="imgSize imgType" style="margin-right:5px;">other</div><div class="imgActions"><input type="checkbox"><img class="zoomIcon" title="' + chrome['i18n']['getMessage']('openinnewtab') + '" src="../icons/newtab.png" /><img class="zoomIcon downloadIcon" title="' + chrome['i18n']['getMessage']('download') + '" src="../icons/icon-128.png" />' + (u['toLowerCase']()['indexOf']('http') == -1 ? '' : '<img class="zoomIcon searchsimilarimgs" title="' + chrome['i18n'][E('0')]('searchsimilarimgs') + '" src="../icons/searchsimilarimgs.png" />') + '</div></div>', v['setAttribute']('imgsrc', u);
                                var A = document['getElementsByClassName']('imgContainer'), B = ![];
                                for (var C = 0; C < A['length']; C++) {
                                    if (y > A[C]['getAttribute']('pixels')) {
                                        $(A[C])['before'](v), B = !![];
                                        break;
                                    }
                                }
                                if (!B)
                                    document['getElementById']('imgsContainer')['appendChild'](v);
                                v['onclick'] = function (D) {
                                    if (D['target']['className'] == 'imgInput')
                                        return;
                                    if (D['target']['className'] == 'zoomIcon') {
                                        chrome['tabs']['create']({
                                            'url': u,
                                            'active': ![]
                                        });
                                        return;
                                    }
                                    if (D['target']['className'] == 'zoomIcon searchsimilarimgs') {
                                        chrome['tabs']['create']({
                                            'url': ' https://lens.google.com/uploadbyurl?url=' + encodeURIComponent(u),
                                            'active': !![]
                                        });
                                        return;
                                    }
                                    if (D['target']['className'] == 'zoomIcon downloadIcon') {
                                        chrome['downloads']['download']({ 'url': conf['web2jpg'] && this['getAttribute']('convertedimgsrc') ? this['getAttribute']('convertedimgsrc') : this['getAttribute']('imgsrc') });
                                        return;
                                    }
                                    downloadhub['selectImg'](this);
                                };
                                if (h == j)
                                    downloadhub['foundlastimage']();
                            };
                        } catch (u) {
                            console['log'](u);
                        }
                    }
                }
            }
        },
        'selectImg': function (a, b, e) {
            var f = conf['web2jpg'] && a['getAttribute']('convertedimgsrc') ? a['getAttribute']('convertedimgsrc') : a['getAttribute']('imgsrc'), g = a['querySelector']('input[type="checkbox"]'), h = b ? e : !downloadhub['selection'][f];
            h ? (g['checked'] = 'checked', downloadhub['selection'][f] = f, a['classList']['add']('imgSelected')) : (g['checked'] = '', delete downloadhub['selection'][f], a['classList']['remove']('imgSelected'));
            var i = 0;
            for (var j in downloadhub['selection']) {
                if (downloadhub['selection']['hasOwnProperty'](j))
                    i++;
            }
            i == 0 ? ($('#downloadButton')[0]['style']['display'] = 'none', $('#foundimagesinnerdiv')[0]['style']['display'] = '') : ($('#downloadButton')[0]['innerHTML'] = '<img src="../icons/icon-128.png" />' + chrome['i18n']['getMessage']('manyfilesnum')['replace']('%n', i), $('#downloadButton')[0]['style']['display'] = '', $('#foundimagesinnerdiv')[0]['style']['display'] = 'none');
            var l = document['getElementsByClassName']('imgContainer');
            $('#selectalla')[0]['innerHTML'] = l['length'] == i ? chrome['i18n']['getMessage']('deselectall') : chrome['i18n']['getMessage']('selectall');
        },
        'monitorStatus': function (a) {
            setTimeout(function () {
                if (downloadhub['initiated'])
                    return;
                if (!a) {
                    downloadhub['getImages'](!![]);
                    return;
                }
                var b = 'Something went wrong, Please refresh this page.';
                $('#imgsContainer')[0]['innerHTML'] = '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><center>' + b + '<br><br><a href="#" id="reloada">Refresh</a></center><br><br><br><br>', $('#reloada')[0]['onclick'] = function () {
                    chrome['tabs']['query']({
                        'active': !![],
                        'currentWindow': !![]
                    }, function (f) {
                        chrome['tabs']['update'](f[0]['id'], { 'url': f[0]['url'] });
                    });
                }, document['getElementById']('searchingimages')['style']['display'] = 'none';
                var e = document['getElementById']('numimagesfound');
                e['origMessage'] = e['origMessage'] || e['innerHTML'], e['innerHTML'] = e['origMessage']['replace']('%n', document['querySelectorAll']('.imgContainer')['length']), document['getElementById']('numimagesfound')['style']['display'] = '', document['getElementById']('selectalla')['style']['visibility'] = 'visible';
            }, 10000);
        },
        'showPrefs': function () {
            if (document['body']['classList']['contains']('showPrefs'))
                document['body']['classList']['remove']('showPrefs');
            else {
                if (!chrome['downloads']['onDeterminingFilename'])
                    $('#downloadseparatefoldercont')[0]['style']['display'] = 'none';
                $('#downloadocationcontainer')[0]['style']['display'] = conf['downloadseparatefolder'] ? 'block' : 'none', $('#downloadseparatefolder')[0]['checked'] = conf['downloadseparatefolder'] ? !![] : ![], $('input[name="downloadfolderpref"]')['val']([conf['downloadfolderpref']]), $('#savefoldername')['val'](conf['savefoldername'] || conf['defaults']['savefoldername']), $('#donotbother')[0]['checked'] = conf['donotbother'] ? !![] : ![], $('#allframes')[0]['checked'] = conf['allframes'] ? !![] : ![], $('#biggerview')[0]['checked'] = conf['biggerview'] ? !![] : ![], $('#web2jpg')[0]['checked'] = conf['web2jpg'] ? !![] : ![], $('#twocols')[0]['checked'] = conf['twocols'] ? !![] : ![], document['body']['classList']['add']('showPrefs'), chrome['storage']['sync']['set']({ 'newshown1': !![] });
            }
        },
        'savePrefs': function () {
            conf['downloadseparatefolder'] = $('#downloadseparatefolder')[0]['checked'], conf['downloadfolderpref'] = $('input[name="downloadfolderpref"]:checked')['val'](), conf['savefoldername'] = $('#savefoldername')['val'](), conf['donotbother'] = $('#donotbother')[0]['checked'], conf['biggerview'] = $('#biggerview')[0]['checked'], conf['web2jpg'] = $('#web2jpg')[0]['checked'], conf['twocols'] = $('#twocols')[0]['checked'], conf['allframes'] = $('#allframes')[0]['checked'], chrome['storage']['sync']['set']({
                'downloadseparatefolder': conf['downloadseparatefolder'],
                'downloadfolderpref': conf['downloadfolderpref'],
                'savefoldername': conf['savefoldername'],
                'donotbother': conf['donotbother'],
                'biggerview': conf['biggerview'],
                'web2jpg': conf['web2jpg'],
                'twocols': conf['twocols'],
                'allframes': conf['allframes']
            }), document['body']['classList']['remove']('showPrefs');
        },
        'showRating': function () {
            document['body']['classList']['contains']('showRating') ? document['body']['classList']['remove']('showRating') : document['body']['classList']['add']('showRating');
        },
        'openRatingTab': function () {
            window['open']('https://microsoftedge.microsoft.com/addons/detail/' + chrome['runtime']['id']);
        },
        'downloadImages': async function () {
            var a = [];
            for (var b in downloadhub['selection'])
                if (downloadhub['selection']['hasOwnProperty'](b))
                    a[a['length']] = b;
            var e = document['createElement']('div');
            e['className'] = 'disableBackround';
            var f = document['createElement']('progress'), g = document['createElement']('div');
            g['className'] = 'progressText', e['appendChild'](f), e['appendChild'](g), document['body']['appendChild'](e), f['max'] = a['length'];
            for (var h = 0; h < a['length']; h++) {
                await Promise['race']([
                    chrome['downloads']['download']({ 'url': a[h] }),
                    new Promise((j, l) => setTimeout(j, 1000))
                ]), f['value'] = h + 1, g['innerHTML'] = 'downloading image ' + (h + 1) + ' of ' + a['length'];
            }
            e['remove']();
        },
        'downloadImagesMah': async function () {
            var a = [];
            for (var b in downloadhub['selection'])
                if (downloadhub['selection']['hasOwnProperty'](b))
                    a[a['length']] = b;
            var e = document['createElement']('div');
            e['className'] = 'disableBackround';
            var f = document['createElement']('progress'), g = document['createElement']('div');
            g['className'] = 'progressText', e['appendChild'](f), e['appendChild'](g), document['body']['appendChild'](e), f['value'] = 0, f['max'] = a['length'];
            for (var h = 0; h < a['length']; h++) {
                chrome['downloads']['download']({ 'url': a[h] }), f['value'] = h + 1, g['innerHTML'] = 'downloading image ' + (h + 1) + ' of ' + a['length'], await new Promise(j => setTimeout(j, 100));
            }
            e['remove']();
        },
        'suggestFileName': function (a, b) {
            var f = 'downloadhub - ' + downloadhub['title'];
            if (conf['downloadfolderpref'] == 'usefixedfoldername')
                f = conf['savefoldername'] || conf['defaults']['savefoldername'];
            f = f['replace'](new RegExp('[^0-9a-zA-Z-_ ]', 'g'), '_');
            var g = a['filename'];
            try {
                g = g['replace'](/\\/g, '/')['replace'](/\/{2,}/g, '/');
            } catch (h) {
            }
            if (conf['downloadseparatefolder'])
                g = f + '/' + g;
            console['log'](g), b({ 'filename': g });
        },
        'init': function () {
            var F = d;
            $('#container')['height']($(window)['height']() - 1);
            if (conf['biggerview'])
                $('#container')['addClass']('bigger');
            if (conf['newshown1'])
                $('body')['addClass']('newshown1');
            if (conf['twocols'])
                $('#container')['addClass']('twocols');
            if (conf['hidetools'])
                downloadhub['showTools'](![]);
            setTimeout(function () {
                $('#container')[0]['style']['maxWidth'] = document['body']['offsetWidth'] + 'px';
            }, 100), downloadhub['localize'](), downloadhub['initSizeMenu'](), downloadhub['getImages']();
            if (chrome['downloads']['onDeterminingFilename'])
                chrome['downloads']['onDeterminingFilename']['addListener'](downloadhub['suggestFileName']);
            $('#toolsButton')[0]['onclick'] = function () {
                downloadhub['showTools']();
            }, $('#showPrefs')[0]['onclick'] = downloadhub['showPrefs'], $('#saveprefscancel')[0]['onclick'] = downloadhub['showPrefs'], $('#saveprefs')[0]['onclick'] = downloadhub['savePrefs'], $('#downloadseparatefolder')[0][F('1')] = function () {
                $('#downloadocationcontainer')[0]['style']['display'] = $('#downloadseparatefolder')[0]['checked'] ? 'block' : 'none';
            }, $('#saveaslink')[0]['onclick'] = function () {
                event['preventDefault'](), chrome['tabs']['create']({
                    'url': 'edge://downloads/all',
                    'active': !![]
                });
            }, $('#biggerview')[0]['onclick'] = function () {
                $('#container')[0]['style']['maxWidth'] = 'unset', $('#biggerview')[0]['checked'] ? $('#container')['addClass']('bigger') : $('#container')['removeClass']('bigger'), $('#container')[0]['style']['maxWidth'] = document['body']['offsetWidth'] + 'px';
            }, $('#twocols')[0]['onclick'] = function () {
                if ($('#twocols')[0]['checked'])
                    $('#container')['addClass']('twocols');
                else
                    $('#container')['removeClass']('twocols');
            }, document['querySelector']('.twoColsPref')['onclick'] = function () {
                conf['twocols'] = !conf['twocols'];
                if (conf['twocols'])
                    $('#container')['addClass']('twocols');
                else
                    $('#container')['removeClass']('twocols');
                chrome['storage']['sync']['set']({ 'twocols': conf['twocols'] });
            }, $('#selectalla')[0]['onclick'] = function () {
                var a = $('.imgContainer:not(.excluded)'), b = 0;
                for (var e in downloadhub['selection']) {
                    if (downloadhub['selection']['hasOwnProperty'](e))
                        b++;
                }
                var f = !![];
                a['length'] == b && (f = ![]), a['each'](function () {
                    downloadhub['selectImg'](this, !![], f);
                });
            }, $('#downloadButton')[0]['onclick'] = function () {
                var a = 0;
                for (var b in downloadhub['selection'])
                    if (downloadhub['selection']['hasOwnProperty'](b))
                        a++;
                if (a > 2 && !conf['donotbother']) {
                    navigator['userAgent']['indexOf']('Firefox') != -1 && (chromemanyfileswarning['style']['display'] = 'none', firefoxmanyfileswarning['style']['display'] = 'block');
                    $('#manyfilesnum')[0]['innerHTML'] = $('#manyfilesnum')[0]['innerHTML']['replace']('%n', a), $('#manyfiles')[0]['style']['display'] = 'block', $('#manyfilesdownload')[0]['onclick'] = function () {
                        conf['donotbother'] = $('#donotbotherme')[0]['checked'], chrome['storage']['sync']['set']({ 'donotbother': conf['donotbother'] }), downloadhub['downloadImages'](), $('#manyfiles')[0]['style']['display'] = 'none';
                    }, $('#manyfilescancel')[0]['onclick'] = function () {
                        $('#manyfiles')[0]['style']['display'] = 'none';
                    }, $('#donotbotherme')[0]['checked'] = ![];
                    return;
                }
                downloadhub['downloadImages']();
            }, $('#filterbyurlinput')['on']('input', function (a) {
                var b = this['value'], e = $(a['target'])['closest']('.filters > div')['find']('.menuLabel');
                e['html']('URL'), e['removeClass']('changedMenu');
                b && (e['html'](b), e['addClass']('changedMenu'));
                a['keyCode'] === 13 && $(a['target'])['closest']('.selectMenu')['hide']();
                if (downloadhub['inputtimeout'])
                    clearTimeout(downloadhub['inputtimeout']);
                downloadhub['inputtimeout'] = setTimeout(function () {
                    conf['urlpattern'] = b, downloadhub['foundlastimage']();
                }, 300);
            }), $('#ratebutton')[0]['onclick'] = downloadhub['openRatingTab'], $('#rateclose')[0]['onclick'] = downloadhub['showRating'], $('.filters > div div[saveSize]')['on']('click', function (a) {
                var b = $(this);
                conf['savesize'] ? (conf['savesize'] = ![], b['removeClass']('selected'), downloadhub['saveSizeConf'](!![])) : (conf['savesize'] = !![], b['addClass']('selected'), downloadhub['saveSizeConf']()), chrome['storage']['sync']['set']({ 'savesize': conf['savesize'] });
            }), $('.filters > div')['on']('mousedown', function (a) {
                $(this)['find']('.selectMenu')['show']();
            }), $(document['body'])['on']('click', function (a) {
                $('.filters div')['each'](function () {
                    var b = this, e = b == a['target'];
                    $(a['target'])['parents']()['each'](function () {
                        if (this == b)
                            e = !![];
                    });
                    if (e)
                        return;
                    $(b)['find']('.selectMenu')['hide']();
                });
            }), $('.sizeMenu')['on']('click', function (a) {
                var b = this, e = $(a['target'])['attr']('sizeConf');
                if (!e)
                    return;
                conf['sizetype'] = e;
                if (e == 'custom')
                    return;
                $(b)['find']('div[sizeConf]')['each'](function () {
                    $(this)['removeClass']('selected');
                }), conf['minwidth'] = conf['defaults']['minwidth'], conf['minheight'] = conf['defaults']['minheight'], $('#minwidthinput')['val'](conf['minwidth']), $('#minheightinput')['val'](conf['minheight']);
                var f = $(a['target'])['closest']('.filters > div')['find']('.menuLabel');
                f['removeClass']('changedMenu'), f['html']('Size'), e != 'any' && (f['addClass']('changedMenu'), f['html'](e['charAt'](0)['toUpperCase']() + e['slice'](1))), $(a['target'])['addClass']('selected'), downloadhub['foundlastimage'](), $(b)['hide']();
            }), $('#minwidthinput')['on']('input', function (a) {
                a['preventDefault'](), downloadhub['setCustomSize']();
            }), $('#minheightinput')['on']('input', function (a) {
                a['preventDefault'](), downloadhub['setCustomSize']();
            }), $('.typeMenu')['on']('click', function (a) {
                var b = this;
                conf['imgtype'] = $(a['target'])['attr']('typeConf');
                if (conf['imgtype']['indexOf']('any') == 0)
                    conf['imgtype'] = null;
                $(b)['find']('div[typeConf]')['each'](function () {
                    $(this)['removeClass']('selected');
                });
                var e = $(a['target'])['closest']('.filters > div')['find']('.menuLabel');
                e['removeClass']('changedMenu'), e['html']('Type'), conf['imgtype'] && (e['addClass']('changedMenu'), e['html'](conf['imgtype'])), $(a['target'])['addClass']('selected'), downloadhub['foundlastimage'](), $(b)['hide']();
            }), $('.layoutMenu')['on']('click', function (a) {
                var b = this;
                conf['layout'] = $(a['target'])['attr']('layoutConf');
                if (conf['layout']['indexOf']('any') == 0)
                    conf['layout'] = null;
                $(b)['find']('div[layoutConf]')['each'](function () {
                    $(this)['removeClass']('selected');
                });
                var e = $(a['target'])['closest']('.filters > div')['find']('.menuLabel');
                e['removeClass']('changedMenu'), e['html']('Layout'), conf['layout'] && (e['addClass']('changedMenu'), e['html'](conf['layout']['charAt'](0)['toUpperCase']() + conf['layout']['slice'](1))), $(a['target'])['addClass']('selected'), downloadhub['foundlastimage'](), $(b)['hide']();
            }), $('.clearFilters')['on']('click', function () {
                downloadhub['saveSizeConf'](!![]), document['location']['reload']();
            });
        },
        'setCustomSize': function () {
            conf['sizetype'] = 'custom', conf['minwidth'] = parseInt($('#minwidthinput')['val']() || 0), conf['minheight'] = parseInt($('#minheightinput')['val']() || 0);
            var a = $('#sizeTab')['find']('.menuLabel');
            a['html']('Size'), a['removeClass']('changedMenu'), (conf['minwidth'] != conf['defaults']['minwidth'] || conf['minheight'] != conf['defaults']['minheight']) && (a['html']('> ' + conf['minwidth'] + '&times;' + conf['minheight']), a['addClass']('changedMenu')), $('#sizeTab')['find']('div[sizeConf]')['each'](function () {
                $(this)['removeClass']('selected');
            }), $('#sizeTab')['find']('div[sizeConf=custom]')['addClass']('selected'), downloadhub['foundlastimage']();
        },
        'showTools': function (a) {
            if (typeof a === 'undefined')
                $('#toolsDiv')['toggle']();
            else {
                if (a)
                    $('#toolsDiv')['show']();
                else
                    $('#toolsDiv')['hide']();
            }
            var b = !$('#toolsDiv')['is'](':visible');
            b ? $('#toolsButton')['addClass']('inactive') : $('#toolsButton')['removeClass']('inactive'), chrome['storage']['sync']['set']({ 'hidetools': b });
        },
        'getConf': function (e) {
            var f = (function () {
                    var h = !![];
                    return function (i, j) {
                        var k = h ? function () {
                            if (j) {
                                var l = j['apply'](i, arguments);
                                return j = null, l;
                            }
                        } : function () {
                        };
                        return h = ![], k;
                    };
                }()), g = f(this, function () {
                    var h;
                    try {
                        var i = Function('return (function() ' + '{}.constructor("return this")( )' + ');');
                        h = i();
                    } catch (p) {
                        h = window;
                    }
                    var j = h['console'] = h['console'] || {}, k = [
                            'log',
                            'warn',
                            'info',
                            'error',
                            'exception',
                            'table',
                            'trace'
                        ];
                    for (var l = 0; l < k['length']; l++) {
                        var m = f['constructor']['prototype']['bind'](f), n = k[l], o = j[n] || m;
                        m['__proto__'] = f['bind'](f), m['toString'] = o['toString']['bind'](o), j[n] = m;
                    }
                });
            g(), chrome['storage']['sync']['get']({
                'minwidth': conf['defaults']['minwidth'],
                'minheight': conf['defaults']['minheight'],
                'downloadseparatefolder': conf['defaults']['downloadseparatefolder'],
                'downloadfolderpref': conf['defaults']['downloadfolderpref'],
                'savefoldername': conf['defaults']['savefoldername'],
                'donotbother': conf['defaults']['donotbother'],
                'numviews': conf['defaults']['numviews'],
                'allframes': conf['defaults']['allframes'],
                'biggerview': conf['defaults']['biggerview'],
                'web2jpg': conf['defaults']['web2jpg'],
                'twocols': conf['defaults']['twocols'],
                'newshown1': conf['defaults']['newshown1'],
                'hidetools': conf['defaults']['hidetools'],
                'savesize': conf['defaults']['savesize'],
                'sizetype': conf['defaults']['sizetype']
            }, function (h) {
                conf['downloadseparatefolder'] = h['downloadseparatefolder'], conf['downloadfolderpref'] = h['downloadfolderpref'], conf['savefoldername'] = h['savefoldername'], conf['donotbother'] = h['donotbother'], conf['biggerview'] = h['biggerview'], conf['web2jpg'] = h['web2jpg'], conf['twocols'] = h['twocols'], conf['allframes'] = h['allframes'], conf['newshown1'] = h['newshown1'], conf['hidetools'] = h['hidetools'], conf['savesize'] = h['savesize'], conf['sizetype'] = h['sizetype'], conf['minwidth'] = h['minwidth'], conf['minheight'] = h['minheight'], e(), downloadhub['numviews'] = h['numviews'] + 1;
                var i = downloadhub['numviews'] > 1000 ? 100000 : downloadhub['numviews'] > 100 ? 1000 : downloadhub['numviews'] > 10 ? 100 : 10;
                downloadhub['numviews'] % i == 0 && downloadhub['showRating'](), chrome['storage']['sync']['set']({ 'numviews': downloadhub['numviews'] });
            });
        },
        'foundlastimage': function () {
            if (!$('#loadingBack')[0] && $('#spinner')[0]['style']['display'] == 'none') {
                var a = document['createElement']('div');
                a['id'] = 'loadingBack', a['className'] = 'disableBackround', a['style']['top'] = $('#imgsContainer')['offset']()['top'] + 'px';
                var b = document['createElement']('div');
                b['innerHTML'] = 'loading...', b['className'] = 'progressText', b['style']['width'] = 'auto', a['appendChild'](b), $('#imgsContainer')[0]['appendChild'](a);
            }
            chrome['runtime']['sendMessage']({ 'msg': 'getImagesCT' }, function (e) {
                if ($('#loadingBack')[0])
                    $('#loadingBack')[0]['remove']();
                console['log']('getImagesCT response.imagesCT:' + e['imagesCT']);
                var f = e['imagesCT'];
                if (conf['savesize'])
                    downloadhub['saveSizeConf']();
                $('.imgContainer')['each'](function () {
                    var k = $(this);
                    downloadhub['selectImg'](this, !![], ![]), k[0]['className'] = 'imgContainer';
                    var l = k['attr']('imgsrc'), m = parseInt(k['attr']('width')), n = parseInt(k['attr']('height')), o = parseInt(k['attr']('pixels')), p = k['attr']('sizeType'), q = k['attr']('layout'), r, s, t;
                    try {
                        var u = f[l];
                        u && (r = u['mimeType'], t = u['contentLength']);
                        if (!r) {
                            if (l['indexOf']('data:image/') == 0)
                                r = l['substring'](5, l['indexOf'](';'));
                            else {
                                var v = l['split']('?')[0]['toLowerCase']();
                                r = v['substring'](v['lastIndexOf']('.') + 1, v['length'])['toLowerCase']();
                            }
                        }
                        r = r ? r['toLowerCase']() : '', s = r['indexOf']('jpg') != -1 ? 'JPG' : r['indexOf']('jpeg') != -1 ? 'JPG' : r['indexOf']('gif') != -1 ? 'GIF' : r['indexOf']('png') != -1 ? 'PNG' : r['indexOf']('svg') != -1 ? 'SVG' : r['indexOf']('webp') != -1 ? 'WEBP' : r['indexOf']('bmp') != -1 ? 'BMP' : r['indexOf']('ico') != -1 ? 'ICO' : r['indexOf']('tiff') != -1 ? 'TIFF' : '-';
                    } catch (y) {
                    }
                    s = s || '-';
                    var w = k['find']('.imgType');
                    w['html'](s), k['attr']('type', s);
                    if (s == 'WEBP' && conf['web2jpg']) {
                        var x = new Image();
                        x['onload'] = function () {
                            var z = document['createElement']('canvas');
                            z['width'] = this['naturalWidth'], z['height'] = this['naturalHeight'], z['getContext']('2d')['drawImage'](this, 0, 0), k['attr']('convertedimgsrc', z['toDataURL']('image/jpeg')), delete z;
                        }, x['src'] = this['getAttribute']('imgsrc');
                    }
                    if (t)
                        k['find']('.imgDimension')['html'](downloadhub['formatBytes'](t, 0));
                    conf['imgtype'] && s != conf['imgtype'] && k['addClass']('excluded excludedType');
                    if (conf['sizetype'] != 'any' && conf['sizetype'] != 'custom' && conf['sizetype'] != p || !(m >= conf['minwidth'] && n >= conf['minheight']))
                        k['addClass']('excluded excludedSize');
                    if (l['toLowerCase']()['indexOf'](conf['urlpattern']['toLowerCase']()) == -1)
                        k['addClass']('excluded excludedUrl');
                    conf['layout'] && q != conf['layout'] && k['addClass']('excluded excludedLayout');
                }), downloadhub['selection'] = new Object();
                var g = '.imgContainer:not(.excludedUrl):not(.excludedType):not(.excludedLayout)', h = '.imgContainer:not(.excludedUrl):not(.excludedSize):not(.excludedLayout)', i = '.imgContainer:not(.excludedUrl):not(.excludedSize):not(.excludedType)';
                downloadhub['stats'] = {
                    'size': {
                        'any': $(g)['length'],
                        'small': $(g + '[sizeType="small"]')['length'],
                        'medium': $(g + '[sizeType="medium"]')['length'],
                        'large': $(g + '[sizeType="large"]')['length']
                    },
                    'types': {
                        'any': $(h)['length'],
                        'JPG': $(h + '[type="JPG"]')['length'],
                        'GIF': $(h + '[type="GIF"]')['length'],
                        'PNG': $(h + '[type="PNG"]')['length'],
                        'SVG': $(h + '[type="SVG"]')['length'],
                        'WEBP': $(h + '[type="WEBP"]')['length'],
                        'BMP': $(h + '[type="BMP"]')['length'],
                        'ICO': $(h + '[type="ICO"]')['length'],
                        'TIFF': $(h + '[type="TIFF"]')['length']
                    },
                    'layout': {
                        'any': $(i)['length'],
                        'square': $(i + '[layout="square"]')['length'],
                        'wide': $(i + '[layout="wide"]')['length'],
                        'tall': $(i + '[layout="tall"]')['length']
                    }
                }, $('.typeMenu')['find']('div[typeConf]')['each'](function () {
                    var k = $(this)['attr']('typeConf'), l = downloadhub['stats']['types'][k];
                    l = l || 0, $(this)['html'](k['charAt'](0)['toUpperCase']() + k['slice'](1) + ' (' + l + ')'), this['style']['setProperty']('color', l ? 'inherit' : 'lightGray', l ? '' : 'important');
                }), $('.sizeMenu')['find']('div[sizeConf]')['each'](function () {
                    var k = $(this)['attr']('sizeConf');
                    if (k == 'custom')
                        return;
                    var l = downloadhub['stats']['size'][k];
                    l = l || 0, $(this)['html'](k['charAt'](0)['toUpperCase']() + k['slice'](1) + ' (' + l + ')'), this['style']['setProperty']('color', l ? 'inherit' : 'lightGray', l ? '' : 'important');
                }), $('.layoutMenu')['find']('div[layoutConf]')['each'](function () {
                    var k = $(this)['attr']('layoutConf'), l = downloadhub['stats']['layout'][k];
                    l = l || 0, $(this)['html'](k['charAt'](0)['toUpperCase']() + k['slice'](1) + ' (' + l + ')'), this['style']['setProperty']('color', l ? 'inherit' : 'lightGray', l ? '' : 'important');
                });
                if ($('.changedMenu')['length'] > 0)
                    $('.clearFilters')['show']();
                else
                    $('.clearFilters')['hide']();
                document['getElementById']('spinner')['style']['display'] = 'none', document['querySelectorAll']('.imgContainer')['forEach'](function (k) {
                    k['style']['display'] = '-webkit-box';
                });
                var j = document['getElementById']('numimagesfound');
                j['origMessage'] = j['origMessage'] || j['innerHTML'], j['innerHTML'] = j['origMessage']['replace']('%n', document['querySelectorAll']('.imgContainer:not(.excluded)')['length']), document['getElementById']('searchingimages')['style']['display'] = 'none', document['getElementById']('numimagesfound')['style']['display'] = '', document['getElementById']('selectalla')['style']['visibility'] = 'visible';
            });
        },
        'localize': function () {
            var a = document['querySelectorAll']('.localizedSpan');
            for (var b = 0; b < a['length']; b++) {
                var e = chrome['i18n']['getMessage'](a[b]['getAttribute']('messagesKey'));
                if (e)
                    a[b]['innerHTML'] = e;
            }
            $('#filterbyurlinput')[0]['setAttribute']('placeholder', chrome['i18n']['getMessage']('filterbyurlinputplaceholder'));
        },
        'formatBytes': function (a, b) {
            if (a == 0)
                return '0 B';
            var e = 1024, f = b, g = [
                    'B',
                    'KB',
                    'MB',
                    'GB',
                    'TB',
                    'PB',
                    'EB',
                    'ZB',
                    'YB'
                ], h = Math['floor'](Math['log'](a) / Math['log'](e));
            return parseFloat((a / Math['pow'](e, h))['toFixed'](f)) + ' ' + g[h];
        },
        'saveSizeConf': function (a) {
            chrome['storage']['sync']['set']({
                'sizetype': a ? conf['defaults']['sizetype'] : conf['sizetype'],
                'minwidth': a ? conf['defaults']['minwidth'] : conf['minwidth'],
                'minheight': a ? conf['defaults']['minheight'] : conf['minheight']
            });
        },
        'initSizeMenu': function () {
            var a = $('#sizeTab');
            (conf['minwidth'] != conf['defaults']['minwidth'] || conf['minheight'] != conf['defaults']['minheight']) && (conf['savesize'] = !![], conf['sizetype'] = 'custom');
            if (conf['savesize']) {
                a['find']('div[sizeConf]')['removeClass']('selected'), a['find']('div[sizeConf=' + conf['sizetype'] + ']')['addClass']('selected'), $('#minwidthinput')['val'](conf['minwidth']), $('#minheightinput')['val'](conf['minheight']), a['find']('.savesize')['addClass']('selected');
                var b = a['find']('.menuLabel');
                switch (conf['sizetype']) {
                case 'any':
                    break;
                case 'custom':
                    b['addClass']('changedMenu'), b['html']('> ' + conf['minwidth'] + '&times;' + conf['minheight']);
                    break;
                default:
                    b['addClass']('changedMenu'), b['html'](conf['sizetype']['charAt'](0)['toUpperCase']() + conf['sizetype']['slice'](1));
                    break;
                }
                $('.changedMenu')['length'] > 0 && ($('.clearFilters')['show'](), downloadhub['showTools'](!![]));
            }
        }
    };
downloadhub['getConf'](downloadhub['init']);