function c() {
    var I = ['imgsrc'];
    c = function () {
        return I;
    };
    return c();
}
var conf = {
        'defaults': {
            'minwidth': 0,
            'minheight': 0,
            'downloadseparatefolder': !1,
            'downloadfolderpref': 'basedonurl',
            'savefoldername': 'imager',
            'donotbother': !1,
            'numviews': 0,
            'allframes': !1,
            'biggerview': !1,
            'twocols': !1,
            'newshown1': !1,
            'hidetools': !1,
            'savesize': !1,
            'sizetype': 'any'
        },
        'minwidth': 0,
        'minheight': 0,
        'urlpattern': '',
        'downloadseparatefolder': !1,
        'downloadfolderpref': 'basedonurl',
        'savefoldername': 'imager',
        'donotbother': !1,
        'changed': !1,
        'allframes': !1,
        'biggerview': !1,
        'twocols': !1,
        'newshown1': !1,
        'hidetools': !1,
        'savesize': !1,
        'sizetype': 'any'
    }, imager = {
        'darkmode': window['matchMedia'] && window['matchMedia']('(prefers-color-scheme: dark)')['matches'],
        'imageCT': new Object(),
        'selection': new Object(),
        'allimages': new Object(),
        'stats': {
            'types': {},
            'sizes': {}
        },
        'getImages': function (a) {
            chrome['runtime']['sendMessage']({ 'msg': 'getImagesCT' }, function (g) {
            }), imager['initiated'] = !1;
            var b = conf['allframes'];
            b && (b = !a), imager['allimages'] = new Object(), imager['monitorStatus'](a);
            var f = '<div id="spinner" class="spinner"><span id="processedImages" style="position: absolute;top: -38px;left: 50%;transform:translateX(-50%);white-space:nowrap;"></span><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';
            $('#imgsContainer')[0]['innerHTML']['trim']() != f && ($('#imgsContainer')[0]['innerHTML'] = f), chrome['tabs']['query']({
                'active': !0,
                'currentWindow': !0
            }, function (g) {
                imager['currUrl'] = g[0]['url'], chrome['tabs']['executeScript'](g[0]['id'], {
                    'file': 'lib/fetch.js',
                    'allFrames': b
                }, h => {
                    imager['getImagesCallback'](h);
                });
            });
        },
        'getImagesCallback': async function (b) {
            if (!imager['initiated']) {
                if (imager['initiated'] = !0, chrome['extension']['lastError'] || !b) {
                    var f = chrome['extension']['lastError'] ? chrome['extension']['lastError']['message'] : 'Cannot access images in this page.';
                    -1 == f['indexOf']('The extensions gallery cannot be scripted') && -1 == f['indexOf']('Missing host permission for the tab') || ($('#imgsContainer')[0]['style']['padding'] = '0px 20px', $('#imgsContainer')[0]['style']['position'] = 'relative', f = '<div style="width:387px;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 201.526 201.526" style="enable-background:new 0 0 512 512;width: 65px;height: 65px;float: left;" xml:space="preserve" class=""><g><path d="M191.125,11.403H10.4C4.666,11.403,0,16.068,0,21.805v59.108c0,5.738,4.666,10.404,10.4,10.404h180.726     c5.734,0,10.4-4.666,10.4-10.403V21.805C201.525,16.068,196.86,11.403,191.125,11.403z M194.577,80.914h-0.001     c0,1.903-1.547,3.454-3.451,3.454H10.4c-1.904,0-3.451-1.551-3.451-3.454V21.805c0-1.903,1.547-3.454,3.451-3.454h180.726     c1.903,0,3.451,1.551,3.451,3.454V80.914z" fill="#333333" data-original="#000000" style="" class=""></path><path d="M63.924,35.968c-1.751-0.801-3.807-0.027-4.605,1.714L48.821,60.606l-3.19-6.696l6.109-13.338     c0.797-1.744,0.034-3.807-1.714-4.605c-1.751-0.801-3.811-0.027-4.605,1.714l-3.687,8.051l-3.859-8.099     c-0.825-1.734-2.888-2.477-4.628-1.642c-1.734,0.825-2.47,2.898-1.642,4.628l6.358,13.347l-3.04,6.638l-10.947-22.97     c-0.821-1.734-2.888-2.477-4.628-1.642c-1.734,0.825-2.47,2.898-1.642,4.628l14.143,29.686c0.573,1.211,1.795,1.982,3.135,1.982     c0.01,0,0.017,0,0.027,0c1.347-0.01,2.569-0.801,3.132-2.029l3.716-8.113l3.888,8.161c0.573,1.211,1.795,1.982,3.135,1.982     c0.01,0,0.017,0,0.027,0c1.347-0.01,2.569-0.801,3.132-2.029l13.596-29.686C66.434,38.83,65.671,36.766,63.924,35.968z" fill="#333333" data-original="#000000" style="" class=""></path><path d="M122.991,35.968c-1.754-0.801-3.807-0.027-4.605,1.714l-10.498,22.924l-3.19-6.696l6.109-13.338     c0.797-1.744,0.034-3.807-1.714-4.605c-1.751-0.801-3.807-0.027-4.604,1.714l-3.687,8.051l-3.859-8.099     c-0.821-1.734-2.891-2.477-4.628-1.642c-1.734,0.825-2.47,2.898-1.642,4.628l6.358,13.347l-3.04,6.638l-10.947-22.97     c-0.821-1.734-2.891-2.477-4.628-1.642c-1.734,0.825-2.47,2.898-1.642,4.628l14.143,29.686c0.573,1.211,1.795,1.982,3.135,1.982     c0.01,0,0.017,0,0.027,0c1.347-0.01,2.569-0.801,3.132-2.029l3.716-8.113l3.888,8.161c0.573,1.211,1.795,1.982,3.135,1.982     c0.01,0,0.017,0,0.027,0c1.347-0.01,2.569-0.801,3.132-2.029l13.596-29.686C125.502,38.83,124.739,36.766,122.991,35.968z" fill="#333333" data-original="#000000" style="" class=""></path><path d="M182.059,35.968c-1.751-0.801-3.807-0.027-4.605,1.714l-10.498,22.924l-3.19-6.696l6.109-13.338     c0.797-1.744,0.034-3.807-1.714-4.605c-1.751-0.801-3.807-0.027-4.605,1.714l-3.687,8.051l-3.859-8.099     c-0.821-1.734-2.888-2.477-4.628-1.642c-1.734,0.825-2.47,2.898-1.642,4.628l6.358,13.347l-3.04,6.638l-10.946-22.971     c-0.821-1.734-2.888-2.477-4.628-1.642c-1.734,0.825-2.47,2.898-1.642,4.628l14.143,29.686c0.573,1.211,1.795,1.982,3.135,1.982     c0.01,0,0.017,0,0.027,0c1.347-0.01,2.569-0.801,3.132-2.029l3.716-8.113l3.888,8.161c0.573,1.211,1.795,1.982,3.135,1.982     c0.01,0,0.017,0,0.027,0c1.347-0.01,2.569-0.801,3.132-2.029l13.596-29.686C184.57,38.83,183.806,36.766,182.059,35.968z" fill="#333333" data-original="#000000" style="" class=""></path><path d="M183.461,140.316L130.3,97.208c-1.065-0.865-2.545-1.018-3.766-0.397c-1.222,0.621-1.965,1.907-1.893,3.278l3.627,68.345     c0.078,1.455,1.055,2.708,2.45,3.139c1.384,0.421,2.904-0.061,3.787-1.222c0.065-0.081,5.398-7.075,11.231-12.901l15.68,30.776     c0.417,0.821,1.143,1.442,2.022,1.727c0.35,0.112,0.713,0.17,1.072,0.17c0.543,0,1.086-0.129,1.578-0.38l12.385-6.311     c0.821-0.417,1.442-1.143,1.727-2.022c0.285-0.876,0.21-1.829-0.21-2.65l-15.68-30.772c8.14-1.293,16.932-1.5,17.037-1.5     c1.455-0.034,2.742-0.97,3.213-2.348C185.031,142.759,184.594,141.232,183.461,140.316z M158.337,142.055     c-1.045,0.238-1.92,0.943-2.375,1.914c-0.451,0.97-0.434,2.097,0.054,3.05l16.206,31.8l-6.192,3.156l-16.206-31.804     c-0.485-0.953-1.384-1.632-2.436-1.832c-0.217-0.044-0.438-0.065-0.658-0.065c-0.831,0-1.646,0.298-2.283,0.859     c-3.444,3.003-6.926,6.756-9.715,9.972l-2.734-51.576l40.117,32.53C167.876,140.426,162.793,141.037,158.337,142.055z" fill="#333333" data-original="#000000" style="" class=""></path></g></svg><div style="float: left;padding-left: 15px;width:300px;">Visit a website and you will be able to find and download all the images...</div></div>');
                    var h = document['createElement']('div');
                    h['innerHTML'] = '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);">' + f + '</center>', h['style']['width'] = '100%', h['style']['height'] = '100%', $('#imgsContainer')[0]['appendChild'](h), document['getElementById']('spinner')['style']['display'] = 'none', document['getElementById']('searchingimages')['style']['display'] = 'none';
                    var j = document['getElementById']('numimagesfound');
                    j['origMessage'] = j['origMessage'] || j['innerHTML'], j['innerHTML'] = j['origMessage']['replace']('%n', document['querySelectorAll']('.imgContainer')['length']), document['getElementById']('numimagesfound')['style']['display'] = '', document['getElementById']('selectalla')['style']['visibility'] = 'visible';
                } else {
                    for (var k = 0, m = 0, p = 0; p < b['length']; p++)
                        null != b[p] && null != b[p]['images'] && b[p]['images']['length'] > 0 && (m += b[p]['images']['length']);
                    if (0 == m)
                        return void imager['foundlastimage']();
                    $('#processedImages')[0]['innerHTML'] = 'analyzing 0 of ' + m + ' images';
                    for (p = 0; p < b['length']; p++)
                        if (null != b[p] && null != b[p]['images']) {
                            localStorage['senderOrigin'] = b[p]['origin'];
                            var q = b[p]['images'];
                            b[p]['isTop'] && (imager['title'] = b[p]['title']);
                            for (var r = 0; r < q['length']; r++)
                                try {
                                    if (imager['allimages'][q[r]]) {
                                        k++;
                                        continue;
                                    }
                                    imager['allimages'][q[r]] = q[r];
                                    var u = document['createElement']('img');
                                    function v() {
                                        k++, $('#processedImages')[0]['innerHTML'] = 'analyzing ' + (k > m ? m : k) + ' of ' + m + ' images', k >= m && imager['foundlastimage']();
                                    }
                                    u['src'] = q[r], u['style']['maxWidth'] = '600px', setTimeout(function (w) {
                                        w['timeoutExpired'] = !0, v();
                                    }, m / 10 * 1000, u), u['onerror'] = function () {
                                        this['timeoutExpired'] || v();
                                    }, u['onload'] = async function () {
                                        if (!this['timeoutExpired']) {
                                            k++, $('#processedImages')[0]['innerHTML'] = 'analyzing ' + (k > m ? m : k) + ' of ' + m + ' images';
                                            var w = this['src'], x = document['createElement']('div');
                                            x['className'] = 'imgContainer';
                                            var y = this['width'], z = this['height'], B = y * z;
                                            x['setAttribute']('pixels', B), x['setAttribute']('width', y), x['setAttribute']('height', z), B < 40000 && x['setAttribute']('sizeType', 'small'), B >= 40000 && x['setAttribute']('sizeType', 'medium'), B >= 480000 && x['setAttribute']('sizeType', 'large'), y >= 1.2 * z ? x['setAttribute']('layout', 'wide') : z >= 1.2 * y ? x['setAttribute']('layout', 'tall') : x['setAttribute']('layout', 'square');
                                            var C = 'style="width:' + y + 'px;hheight:' + z + 'px"';
                                            x['innerHTML'] = '<img class="origImg" id="' + w + '" src="' + w + '" ' + C + '><br><input class="imgInput" value="' + this['src'] + '"><div class="imgInfo"><div class="imgActions"><input type="checkbox"><img class="zoomIcon" title="' + chrome['i18n']['getMessage']('openinnewtab') + '" src="../icons/open-new-tab.png" /><img class="zoomIcon downloadIcon" title="' + chrome['i18n']['getMessage']('download') + '" src="../icons/icon-128.png" /></div><div class="imgSize imgDimension" style="margin-left:5px;">-</div><div class="imgSize">' + this['width'] + 'x' + this['height'] + '</div><div class="imgSize imgType" style="margin-right:5px;">other</div></div>', x['setAttribute']('imgsrc', w);
                                            for (var D = document['getElementsByClassName']('imgContainer'), E = !1, F = 0; F < D['length']; F++)
                                                if (B > D[F]['getAttribute']('pixels')) {
                                                    $(D[F])['before'](x), E = !0;
                                                    break;
                                                }
                                            E || document['getElementById']('imgsContainer')['appendChild'](x), x['onclick'] = function (G) {
                                                'imgInput' != G['target']['className'] && ('zoomIcon' != G['target']['className'] ? 'zoomIcon downloadIcon' != G['target']['className'] ? imager['selectImg'](this) : chrome['downloads']['download']({ 'url': this['getAttribute']('imgsrc') }) : chrome['tabs']['create']({
                                                    'url': w,
                                                    'active': !1
                                                }));
                                            }, k >= m && imager['foundlastimage']();
                                        }
                                    };
                                } catch (w) {
                                }
                        }
                }
            }
        },
        'selectImg': function (b, f, g) {
            var H = d, h = b['getAttribute'](H('0')), j = b['querySelector']('input[type="checkbox"]');
            (f ? g : !imager['selection'][h]) ? (j['checked'] = 'checked', imager['selection'][h] = h, b['classList']['add']('imgSelected')) : (j['checked'] = '', delete imager['selection'][h], b['classList']['remove']('imgSelected'));
            var k = 0;
            for (var l in imager['selection'])
                imager['selection']['hasOwnProperty'](l) && k++;
            0 == k ? ($('#downloadButton')[0]['style']['display'] = 'none', $('#foundimagesinnerdiv')[0]['style']['display'] = '') : ($('#downloadButton')[0]['innerHTML'] = '<img src="../icons/icon-38.png" />' + chrome['i18n']['getMessage']('manyfilesnum')['replace']('%n', k), $('#downloadButton')[0]['style']['display'] = '', $('#foundimagesinnerdiv')[0]['style']['display'] = 'none');
            var m = document['getElementsByClassName']('imgContainer');
            $('#selectalla')[0]['innerHTML'] = m['length'] == k ? chrome['i18n']['getMessage']('deselectall') : chrome['i18n']['getMessage']('selectall');
        },
        'monitorStatus': function (a) {
            setTimeout(function () {
                if (!imager['initiated']) {
                    if (a) {
                        $('#imgsContainer')[0]['innerHTML'] = '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><center>Something went wrong, Please refresh this page.<br><br><a href="#" id="reloada">Refresh</a></center><br><br><br><br>', $('#reloada')[0]['onclick'] = function () {
                            chrome['tabs']['query']({
                                'active': !0,
                                'currentWindow': !0
                            }, function (f) {
                                chrome['tabs']['update'](f[0]['id'], { 'url': f[0]['url'] });
                            });
                        }, document['getElementById']('searchingimages')['style']['display'] = 'none';
                        var b = document['getElementById']('numimagesfound');
                        b['origMessage'] = b['origMessage'] || b['innerHTML'], b['innerHTML'] = b['origMessage']['replace']('%n', document['querySelectorAll']('.imgContainer')['length']), document['getElementById']('numimagesfound')['style']['display'] = '', document['getElementById']('selectalla')['style']['visibility'] = 'visible';
                    } else
                        imager['getImages'](!0);
                }
            }, 10000);
        },
        'showPrefs': function () {
            document['body']['classList']['contains']('showPrefs') ? document['body']['classList']['remove']('showPrefs') : (chrome['downloads']['onDeterminingFilename'] || ($('#downloadseparatefoldercont')[0]['style']['display'] = 'none'), $('#downloadocationcontainer')[0]['style']['display'] = conf['downloadseparatefolder'] ? 'block' : 'none', $('#downloadseparatefolder')[0]['checked'] = !!conf['downloadseparatefolder'], $('input[name="downloadfolderpref"]')['val']([conf['downloadfolderpref']]), $('#savefoldername')['val'](conf['savefoldername'] || conf['defaults']['savefoldername']), $('#donotbother')[0]['checked'] = !!conf['donotbother'], $('#allframes')[0]['checked'] = !!conf['allframes'], $('#biggerview')[0]['checked'] = !!conf['biggerview'], $('#twocols')[0]['checked'] = !!conf['twocols'], document['body']['classList']['add']('showPrefs'), chrome['storage']['sync']['set']({ 'newshown1': !0 }));
        },
        'savePrefs': function () {
            conf['downloadseparatefolder'] = $('#downloadseparatefolder')[0]['checked'], conf['downloadfolderpref'] = $('input[name="downloadfolderpref"]:checked')['val'](), conf['savefoldername'] = $('#savefoldername')['val'](), conf['donotbother'] = $('#donotbother')[0]['checked'], conf['biggerview'] = $('#biggerview')[0]['checked'], conf['twocols'] = $('#twocols')[0]['checked'], conf['allframes'] = $('#allframes')[0]['checked'], chrome['storage']['sync']['set']({
                'downloadseparatefolder': conf['downloadseparatefolder'],
                'downloadfolderpref': conf['downloadfolderpref'],
                'savefoldername': conf['savefoldername'],
                'donotbother': conf['donotbother'],
                'biggerview': conf['biggerview'],
                'twocols': conf['twocols'],
                'allframes': conf['allframes']
            }), document['body']['classList']['remove']('showPrefs');
        },
        'showRating': function () {
            document['body']['classList']['contains']('showRating') ? document['body']['classList']['remove']('showRating') : document['body']['classList']['add']('showRating');
        },
        'openRatingTab': function () {
            window['open']('https://chrome.google.com/webstore/detail/image-downloader-save-pho/lbohagbplppjcpllnhdichjldhfgkicb/reviews');
        },
        'downloadImages': function () {
            for (var a in imager['selection'])
                imager['selection']['hasOwnProperty'](a) && chrome['downloads']['download']({ 'url': a });
        },
        'suggestFileName': function (a, b) {
            var f = 'Imager - ' + imager['title'];
            'usefixedfoldername' == conf['downloadfolderpref'] && (f = conf['savefoldername'] || conf['defaults']['savefoldername']), f = f['replace'](new RegExp('[^0-9a-zA-Z-_ ]', 'g'), '_');
            var g = a['filename'];
            conf['downloadseparatefolder'] && (g = f + '/' + g), b({ 'filename': g });
        },
        'init': function () {
            $('#container')['height']($(window)['height']() - 1), conf['biggerview'] && $('#container')['addClass']('bigger'), conf['newshown1'] && $('body')['addClass']('newshown1'), conf['twocols'] && $('#container')['addClass']('twocols'), conf['hidetools'] && imager['showTools'](!1), setTimeout(function () {
                $('#container')[0]['style']['maxWidth'] = document['body']['offsetWidth'] + 'px';
            }, 100), imager['localize'](), imager['initSizeMenu'](), imager['getImages'](), chrome['downloads']['onDeterminingFilename'] && chrome['downloads']['onDeterminingFilename']['addListener'](imager['suggestFileName']), $('#toolsButton')[0]['onclick'] = function () {
                imager['showTools']();
            }, $('#showPrefs')[0]['onclick'] = imager['showPrefs'], $('#saveprefscancel')[0]['onclick'] = imager['showPrefs'], $('#saveprefs')[0]['onclick'] = imager['savePrefs'], $('#downloadseparatefolder')[0]['onclick'] = function () {
                $('#downloadocationcontainer')[0]['style']['display'] = $('#downloadseparatefolder')[0]['checked'] ? 'block' : 'none';
            }, $('#saveaslink')[0]['onclick'] = function () {
                event['preventDefault'](), chrome['tabs']['create']({
                    'url': 'chrome://settings/downloads',
                    'active': !0
                });
            }, $('#biggerview')[0]['onclick'] = function () {
                $('#container')[0]['style']['maxWidth'] = 'unset', $('#biggerview')[0]['checked'] ? $('#container')['addClass']('bigger') : $('#container')['removeClass']('bigger'), $('#container')[0]['style']['maxWidth'] = document['body']['offsetWidth'] + 'px';
            }, $('#twocols')[0]['onclick'] = function () {
                $('#twocols')[0]['checked'] ? $('#container')['addClass']('twocols') : $('#container')['removeClass']('twocols');
            }, $('#selectalla')[0]['onclick'] = function () {
                var a = $('.imgContainer:not(.excluded)'), b = 0;
                for (var f in imager['selection'])
                    imager['selection']['hasOwnProperty'](f) && b++;
                var g = !0;
                a['length'] == b && (g = !1), a['each'](function () {
                    imager['selectImg'](this, !0, g);
                });
            }, $('#downloadButton')[0]['onclick'] = function () {
                var a = 0;
                for (var b in imager['selection'])
                    imager['selection']['hasOwnProperty'](b) && a++;
                if (a > 2 && !conf['donotbother'])
                    return -1 != navigator['userAgent']['indexOf']('Firefox') && (chromemanyfileswarning['style']['display'] = 'none', firefoxmanyfileswarning['style']['display'] = 'block'), $('#manyfilesnum')[0]['innerHTML'] = $('#manyfilesnum')[0]['innerHTML']['replace']('%n', a), $('#manyfiles')[0]['style']['display'] = 'block', $('#manyfilesdownload')[0]['onclick'] = function () {
                        conf['donotbother'] = $('#donotbotherme')[0]['checked'], chrome['storage']['sync']['set']({ 'donotbother': conf['donotbother'] }), imager['downloadImages'](), $('#manyfiles')[0]['style']['display'] = 'none';
                    }, $('#manyfilescancel')[0]['onclick'] = function () {
                        $('#manyfiles')[0]['style']['display'] = 'none';
                    }, void ($('#donotbotherme')[0]['checked'] = !1);
                imager['downloadImages']();
            }, $('#filterbyurlinput')['on']('keyup', function (a) {
                var b = this['value'], f = $(a['target'])['closest']('.filters > div')['find']('.menuLabel');
                f['html']('URL'), f['removeClass']('changedMenu'), b && (f['html'](b), f['addClass']('changedMenu')), 13 === a['keyCode'] && $(a['target'])['closest']('.selectMenu')['hide'](), imager['inputtimeout'] && clearTimeout(imager['inputtimeout']), imager['inputtimeout'] = setTimeout(function () {
                    conf['urlpattern'] = b, imager['foundlastimage']();
                }, 300);
            }), $('#ratebutton')[0]['onclick'] = imager['openRatingTab'], $('#rateclose')[0]['onclick'] = imager['showRating'], $('.filters > div div[saveSize]')['on']('click', function (a) {
                var b = $(this);
                conf['savesize'] ? (conf['savesize'] = !1, b['removeClass']('selected'), imager['saveSizeConf'](!0)) : (conf['savesize'] = !0, b['addClass']('selected'), imager['saveSizeConf']()), chrome['storage']['sync']['set']({ 'savesize': conf['savesize'] });
            }), $('.filters > div')['on']('mousedown', function (a) {
                $(this)['find']('.selectMenu')['show']();
            }), $(document['body'])['on']('click', function (a) {
                $('.filters div')['each'](function () {
                    var b = this, f = b == a['target'];
                    $(a['target'])['parents']()['each'](function () {
                        this == b && (f = !0);
                    }), f || $(b)['find']('.selectMenu')['hide']();
                });
            }), $('.sizeMenu')['on']('click', function (a) {
                var b = $(a['target'])['attr']('sizeConf');
                if (b && (conf['sizetype'] = b, 'custom' != b)) {
                    $(this)['find']('div[sizeConf]')['each'](function () {
                        $(this)['removeClass']('selected');
                    }), conf['minwidth'] = conf['defaults']['minwidth'], conf['minheight'] = conf['defaults']['minheight'], $('#minwidthinput')['val'](conf['minwidth']), $('#minheightinput')['val'](conf['minheight']);
                    var f = $(a['target'])['closest']('.filters > div')['find']('.menuLabel');
                    f['removeClass']('changedMenu'), f['html']('Size'), 'any' != b && (f['addClass']('changedMenu'), f['html'](b['charAt'](0)['toUpperCase']() + b['slice'](1))), $(a['target'])['addClass']('selected'), imager['foundlastimage'](), $(this)['hide']();
                }
            }), $('#minwidthinput')['keyup'](function (a) {
                if (a['preventDefault'](), 13 === a['keyCode']) {
                    conf['sizetype'] = 'custom', conf['minwidth'] = parseInt(this['value'] || 0), conf['minheight'] = parseInt($('#minheightinput')['val']() || 0);
                    var b = $(a['target'])['closest']('.filters > div')['find']('.menuLabel');
                    b['html']('Size'), b['removeClass']('changedMenu'), conf['minwidth'] == conf['defaults']['minwidth'] && conf['minheight'] == conf['defaults']['minheight'] || (b['html']('> ' + conf['minwidth'] + '&times;' + conf['minheight']), b['addClass']('changedMenu')), $(a['target'])['closest']('.filters > div')['find']('div[sizeConf]')['each'](function () {
                        $(this)['removeClass']('selected');
                    }), $('#sizeTab')['find']('div[sizeConf=custom]')['addClass']('selected'), $(a['target'])['closest']('.sizeMenu')['hide'](), imager['foundlastimage']();
                }
            }), $('#minheightinput')['keyup'](function (a) {
                if (a['preventDefault'](), 13 === a['keyCode']) {
                    conf['sizetype'] = 'custom', conf['minheight'] = parseInt(this['value'] || 0), conf['minwidth'] = parseInt($('#minwidthinput')['val']() || 0);
                    var b = $(a['target'])['closest']('.filters > div')['find']('.menuLabel');
                    b['html']('Size'), b['removeClass']('changedMenu'), conf['minwidth'] == conf['defaults']['minwidth'] && conf['minheight'] == conf['defaults']['minheight'] || (b['html']('> ' + conf['minwidth'] + '&times;' + conf['minheight']), b['addClass']('changedMenu')), $(a['target'])['closest']('.filters > div')['find']('div[sizeConf]')['each'](function () {
                        $(this)['removeClass']('selected');
                    }), $('#sizeTab')['find']('div[sizeConf=custom]')['addClass']('selected'), $(a['target'])['closest']('.sizeMenu')['hide'](), imager['foundlastimage']();
                }
            }), $('.typeMenu')['on']('click', function (a) {
                conf['imgtype'] = $(a['target'])['attr']('typeConf'), 0 == conf['imgtype']['indexOf']('any') && (conf['imgtype'] = null), $(this)['find']('div[typeConf]')['each'](function () {
                    $(this)['removeClass']('selected');
                });
                var b = $(a['target'])['closest']('.filters > div')['find']('.menuLabel');
                b['removeClass']('changedMenu'), b['html']('Type'), conf['imgtype'] && (b['addClass']('changedMenu'), b['html'](conf['imgtype'])), $(a['target'])['addClass']('selected'), imager['foundlastimage'](), $(this)['hide']();
            }), $('.layoutMenu')['on']('click', function (a) {
                conf['layout'] = $(a['target'])['attr']('layoutConf'), 0 == conf['layout']['indexOf']('any') && (conf['layout'] = null), $(this)['find']('div[layoutConf]')['each'](function () {
                    $(this)['removeClass']('selected');
                });
                var b = $(a['target'])['closest']('.filters > div')['find']('.menuLabel');
                b['removeClass']('changedMenu'), b['html']('Layout'), conf['layout'] && (b['addClass']('changedMenu'), b['html'](conf['layout']['charAt'](0)['toUpperCase']() + conf['layout']['slice'](1))), $(a['target'])['addClass']('selected'), imager['foundlastimage'](), $(this)['hide']();
            }), $('.clearFilters')['on']('click', function () {
                imager['saveSizeConf'](!0), document['location']['reload']();
            });
        },
        'showTools': function (a) {
            void 0 === a ? $('#toolsDiv')['toggle']() : a ? $('#toolsDiv')['show']() : $('#toolsDiv')['hide']();
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
                'twocols': conf['defaults']['twocols'],
                'newshown1': conf['defaults']['newshown1'],
                'hidetools': conf['defaults']['hidetools'],
                'savesize': conf['defaults']['savesize'],
                'sizetype': conf['defaults']['sizetype']
            }, function (h) {
                conf['downloadseparatefolder'] = h['downloadseparatefolder'], conf['downloadfolderpref'] = h['downloadfolderpref'], conf['savefoldername'] = h['savefoldername'], conf['donotbother'] = h['donotbother'], conf['biggerview'] = h['biggerview'], conf['twocols'] = h['twocols'], conf['allframes'] = h['allframes'], conf['newshown1'] = h['newshown1'], conf['hidetools'] = h['hidetools'], conf['savesize'] = h['savesize'], conf['sizetype'] = h['sizetype'], conf['minwidth'] = h['minwidth'], conf['minheight'] = h['minheight'], e(), imager['numviews'] = h['numviews'] + 1;
                var i = imager['numviews'] > 1000 ? 100000 : imager['numviews'] > 100 ? 1000 : imager['numviews'] > 10 ? 100 : 10;
                imager['numviews'] % i == 0 && imager['showRating'](), chrome['storage']['sync']['set']({ 'numviews': imager['numviews'] });
            });
        },
        'foundlastimage': function () {
            chrome['runtime']['sendMessage']({ 'msg': 'getImagesCT' }, function (a) {
                var b = a['imagesCT'];
                conf['savesize'] && imager['saveSizeConf'](), $('.imgContainer')['each'](function () {
                    var k = $(this);
                    imager['selectImg'](this, !0, !1), k[0]['className'] = 'imgContainer';
                    var m, p, q, r = k['attr']('imgsrc'), u = parseInt(k['attr']('width')), v = parseInt(k['attr']('height')), w = (parseInt(k['attr']('pixels')), k['attr']('sizeType')), x = k['attr']('layout');
                    try {
                        var y = b[r];
                        if (y && (m = y['mimeType'], q = y['contentLength']), !m) {
                            if (0 == r['indexOf']('data:image/'))
                                m = r['substring'](5, r['indexOf'](';'));
                            else {
                                var z = r['split']('?')[0]['toLowerCase']();
                                m = z['substring'](z['lastIndexOf']('.') + 1, z['length'])['toLowerCase']();
                            }
                        }
                        p = -1 != (m = m ? m['toLowerCase']() : '')['indexOf']('jpg') || -1 != m['indexOf']('jpeg') ? 'JPG' : -1 != m['indexOf']('gif') ? 'GIF' : -1 != m['indexOf']('png') ? 'PNG' : -1 != m['indexOf']('svg') ? 'SVG' : -1 != m['indexOf']('webp') ? 'WEBP' : -1 != m['indexOf']('bmp') ? 'BMP' : -1 != m['indexOf']('ico') ? 'ICO' : -1 != m['indexOf']('tiff') ? 'TIFF' : '-';
                    } catch (B) {
                    }
                    p = p || '-', k['find']('.imgType')['html'](p), k['attr']('type', p), q && k['find']('.imgDimension')['html'](imager['formatBytes'](q, 0)), conf['imgtype'] && p != conf['imgtype'] && k['addClass']('excluded excludedType'), ('any' != conf['sizetype'] && 'custom' != conf['sizetype'] && conf['sizetype'] != w || !(u >= conf['minwidth'] && v >= conf['minheight'])) && k['addClass']('excluded excludedSize'), -1 == r['toLowerCase']()['indexOf'](conf['urlpattern']['toLowerCase']()) && k['addClass']('excluded excludedUrl'), conf['layout'] && x != conf['layout'] && k['addClass']('excluded excludedLayout');
                }), imager['selection'] = new Object();
                var f = '.imgContainer:not(.excludedUrl):not(.excludedType):not(.excludedLayout)', g = '.imgContainer:not(.excludedUrl):not(.excludedSize):not(.excludedLayout)', h = '.imgContainer:not(.excludedUrl):not(.excludedSize):not(.excludedType)';
                imager['stats'] = {
                    'size': {
                        'any': $(f)['length'],
                        'small': $(f + '[sizeType="small"]')['length'],
                        'medium': $(f + '[sizeType="medium"]')['length'],
                        'large': $(f + '[sizeType="large"]')['length']
                    },
                    'types': {
                        'any': $(g)['length'],
                        'JPG': $(g + '[type="JPG"]')['length'],
                        'GIF': $(g + '[type="GIF"]')['length'],
                        'PNG': $(g + '[type="PNG"]')['length'],
                        'SVG': $(g + '[type="SVG"]')['length'],
                        'WEBP': $(g + '[type="WEBP"]')['length'],
                        'BMP': $(g + '[type="BMP"]')['length'],
                        'ICO': $(g + '[type="ICO"]')['length'],
                        'TIFF': $(g + '[type="TIFF"]')['length']
                    },
                    'layout': {
                        'any': $(h)['length'],
                        'square': $(h + '[layout="square"]')['length'],
                        'wide': $(h + '[layout="wide"]')['length'],
                        'tall': $(h + '[layout="tall"]')['length']
                    }
                }, $('.typeMenu')['find']('div[typeConf]')['each'](function () {
                    var k = $(this)['attr']('typeConf'), l = imager['stats']['types'][k];
                    l = l || 0, $(this)['html'](k['charAt'](0)['toUpperCase']() + k['slice'](1) + ' (' + l + ')'), this['style']['setProperty']('color', l ? 'inherit' : 'lightGray', l ? '' : 'important');
                }), $('.sizeMenu')['find']('div[sizeConf]')['each'](function () {
                    var k = $(this)['attr']('sizeConf');
                    if ('custom' != k) {
                        var l = imager['stats']['size'][k];
                        l = l || 0, $(this)['html'](k['charAt'](0)['toUpperCase']() + k['slice'](1) + ' (' + l + ')'), this['style']['setProperty']('color', l ? 'inherit' : 'lightGray', l ? '' : 'important');
                    }
                }), $('.layoutMenu')['find']('div[layoutConf]')['each'](function () {
                    var k = $(this)['attr']('layoutConf'), l = imager['stats']['layout'][k];
                    l = l || 0, $(this)['html'](k['charAt'](0)['toUpperCase']() + k['slice'](1) + ' (' + l + ')'), this['style']['setProperty']('color', l ? 'inherit' : 'lightGray', l ? '' : 'important');
                }), $('.changedMenu')['length'] > 0 ? $('.clearFilters')['show']() : $('.clearFilters')['hide'](), document['getElementById']('spinner')['style']['display'] = 'none', document['querySelectorAll']('.imgContainer')['forEach'](function (k) {
                    k['style']['display'] = '-webkit-box';
                });
                var j = document['getElementById']('numimagesfound');
                j['origMessage'] = j['origMessage'] || j['innerHTML'], j['innerHTML'] = j['origMessage']['replace']('%n', document['querySelectorAll']('.imgContainer:not(.excluded)')['length']), document['getElementById']('searchingimages')['style']['display'] = 'none', document['getElementById']('numimagesfound')['style']['display'] = '', document['getElementById']('selectalla')['style']['visibility'] = 'visible';
            });
        },
        'localize': function () {
            for (var a = document['querySelectorAll']('.localizedSpan'), b = 0; b < a['length']; b++) {
                var f = chrome['i18n']['getMessage'](a[b]['getAttribute']('messagesKey'));
                f && (a[b]['innerHTML'] = f);
            }
            $('#filterbyurlinput')[0]['setAttribute']('placeholder', chrome['i18n']['getMessage']('filterbyurlinputplaceholder'));
        },
        'formatBytes': function (a, b) {
            if (0 == a)
                return '0 B';
            var f = b, g = Math['floor'](Math['log'](a) / Math['log'](1024));
            return parseFloat((a / Math['pow'](1024, g))['toFixed'](f)) + ' ' + [
                'B',
                'KB',
                'MB',
                'GB',
                'TB',
                'PB',
                'EB',
                'ZB',
                'YB'
            ][g];
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
            if (conf['minwidth'] == conf['defaults']['minwidth'] && conf['minheight'] == conf['defaults']['minheight'] || (conf['savesize'] = !0, conf['sizetype'] = 'custom'), conf['savesize']) {
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
                }
                $('.changedMenu')['length'] > 0 && ($('.clearFilters')['show'](), imager['showTools'](!0));
            }
        }
    };
function d(a, b) {
    var e = c();
    return d = function (f, g) {
        f = f - 0;
        var h = e[f];
        return h;
    }, d(a, b);
}
imager['getConf'](imager['init']);