var conf = {
    defaults: {
      minwidth: 0,
      minheight: 0,
      downloadseparatefolder: !1,
      downloadfolderpref: "basedonurl",
      savefoldername: "imager",
      donotbother: !1,
      numviews: 0,
      allframes: !1,
      biggerview: !1,
      twocols: !1,
      newshown1: !1,
      hidetools: !1,
      savesize: !1,
      sizetype: "any"
    },
    minwidth: 0,
    minheight: 0,
    urlpattern: "",
    downloadseparatefolder: !1,
    downloadfolderpref: "basedonurl",
    savefoldername: "imager",
    donotbother: !1,
    changed: !1,
    allframes: !1,
    biggerview: !1,
    twocols: !1,
    newshown1: !1,
    hidetools: !1,
    savesize: !1,
    sizetype: "any"
  },
  imager = {
    darkmode: window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches,
    imageCT: new Object,
    selection: new Object,
    allimages: new Object,
    stats: {
      types: {},
      sizes: {}
    },
    getImages: function (A) {
      chrome.runtime.sendMessage({
        msg: "getImagesCT"
      }, (function (A) {})), imager.initiated = !1;
      var e = conf.allframes;
      e && (e = !A), imager.allimages = new Object, imager.monitorStatus(A);
      var n = '<div id="spinner" class="spinner"><span id="processedImages" style="position: absolute;top: -38px;left: 50%;transform:translateX(-50%);white-space:nowrap;"></span><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';
      $("#imgsContainer")[0].innerHTML.trim() != n && ($("#imgsContainer")[0].innerHTML = n), chrome.tabs.query({
        active: !0,
        currentWindow: !0
      }, (function (A) {
        imager.currUrl = A[0].url, chrome.tabs.executeScript(A[0].id, {
          file: "lib/fetch.js",
          allFrames: e
        }, (A => {
          imager.getImagesCallback(A)
        }))
      }))
    },
    getImagesCallback: async function (A) {
      if (!imager.initiated)
        if (imager.initiated = !0, chrome.extension.lastError || !A) {
          var e = chrome.extension.lastError ? chrome.extension.lastError.message : "Cannot access images in this page."; - 1 == e.indexOf("The extensions gallery cannot be scripted") && -1 == e.indexOf("Missing host permission for the tab") || ($("#imgsContainer")[0].style.padding = "0px 20px", $("#imgsContainer")[0].style.position = "relative", e = '<div style="width:387px;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 201.526 201.526" style="enable-background:new 0 0 512 512;width: 65px;height: 65px;float: left;" xml:space="preserve" class=""><g><path d="M191.125,11.403H10.4C4.666,11.403,0,16.068,0,21.805v59.108c0,5.738,4.666,10.404,10.4,10.404h180.726     c5.734,0,10.4-4.666,10.4-10.403V21.805C201.525,16.068,196.86,11.403,191.125,11.403z M194.577,80.914h-0.001     c0,1.903-1.547,3.454-3.451,3.454H10.4c-1.904,0-3.451-1.551-3.451-3.454V21.805c0-1.903,1.547-3.454,3.451-3.454h180.726     c1.903,0,3.451,1.551,3.451,3.454V80.914z" fill="#333333" data-original="#000000" style="" class=""></path><path d="M63.924,35.968c-1.751-0.801-3.807-0.027-4.605,1.714L48.821,60.606l-3.19-6.696l6.109-13.338     c0.797-1.744,0.034-3.807-1.714-4.605c-1.751-0.801-3.811-0.027-4.605,1.714l-3.687,8.051l-3.859-8.099     c-0.825-1.734-2.888-2.477-4.628-1.642c-1.734,0.825-2.47,2.898-1.642,4.628l6.358,13.347l-3.04,6.638l-10.947-22.97     c-0.821-1.734-2.888-2.477-4.628-1.642c-1.734,0.825-2.47,2.898-1.642,4.628l14.143,29.686c0.573,1.211,1.795,1.982,3.135,1.982     c0.01,0,0.017,0,0.027,0c1.347-0.01,2.569-0.801,3.132-2.029l3.716-8.113l3.888,8.161c0.573,1.211,1.795,1.982,3.135,1.982     c0.01,0,0.017,0,0.027,0c1.347-0.01,2.569-0.801,3.132-2.029l13.596-29.686C66.434,38.83,65.671,36.766,63.924,35.968z" fill="#333333" data-original="#000000" style="" class=""></path><path d="M122.991,35.968c-1.754-0.801-3.807-0.027-4.605,1.714l-10.498,22.924l-3.19-6.696l6.109-13.338     c0.797-1.744,0.034-3.807-1.714-4.605c-1.751-0.801-3.807-0.027-4.604,1.714l-3.687,8.051l-3.859-8.099     c-0.821-1.734-2.891-2.477-4.628-1.642c-1.734,0.825-2.47,2.898-1.642,4.628l6.358,13.347l-3.04,6.638l-10.947-22.97     c-0.821-1.734-2.891-2.477-4.628-1.642c-1.734,0.825-2.47,2.898-1.642,4.628l14.143,29.686c0.573,1.211,1.795,1.982,3.135,1.982     c0.01,0,0.017,0,0.027,0c1.347-0.01,2.569-0.801,3.132-2.029l3.716-8.113l3.888,8.161c0.573,1.211,1.795,1.982,3.135,1.982     c0.01,0,0.017,0,0.027,0c1.347-0.01,2.569-0.801,3.132-2.029l13.596-29.686C125.502,38.83,124.739,36.766,122.991,35.968z" fill="#333333" data-original="#000000" style="" class=""></path><path d="M182.059,35.968c-1.751-0.801-3.807-0.027-4.605,1.714l-10.498,22.924l-3.19-6.696l6.109-13.338     c0.797-1.744,0.034-3.807-1.714-4.605c-1.751-0.801-3.807-0.027-4.605,1.714l-3.687,8.051l-3.859-8.099     c-0.821-1.734-2.888-2.477-4.628-1.642c-1.734,0.825-2.47,2.898-1.642,4.628l6.358,13.347l-3.04,6.638l-10.946-22.971     c-0.821-1.734-2.888-2.477-4.628-1.642c-1.734,0.825-2.47,2.898-1.642,4.628l14.143,29.686c0.573,1.211,1.795,1.982,3.135,1.982     c0.01,0,0.017,0,0.027,0c1.347-0.01,2.569-0.801,3.132-2.029l3.716-8.113l3.888,8.161c0.573,1.211,1.795,1.982,3.135,1.982     c0.01,0,0.017,0,0.027,0c1.347-0.01,2.569-0.801,3.132-2.029l13.596-29.686C184.57,38.83,183.806,36.766,182.059,35.968z" fill="#333333" data-original="#000000" style="" class=""></path><path d="M183.461,140.316L130.3,97.208c-1.065-0.865-2.545-1.018-3.766-0.397c-1.222,0.621-1.965,1.907-1.893,3.278l3.627,68.345     c0.078,1.455,1.055,2.708,2.45,3.139c1.384,0.421,2.904-0.061,3.787-1.222c0.065-0.081,5.398-7.075,11.231-12.901l15.68,30.776     c0.417,0.821,1.143,1.442,2.022,1.727c0.35,0.112,0.713,0.17,1.072,0.17c0.543,0,1.086-0.129,1.578-0.38l12.385-6.311     c0.821-0.417,1.442-1.143,1.727-2.022c0.285-0.876,0.21-1.829-0.21-2.65l-15.68-30.772c8.14-1.293,16.932-1.5,17.037-1.5     c1.455-0.034,2.742-0.97,3.213-2.348C185.031,142.759,184.594,141.232,183.461,140.316z M158.337,142.055     c-1.045,0.238-1.92,0.943-2.375,1.914c-0.451,0.97-0.434,2.097,0.054,3.05l16.206,31.8l-6.192,3.156l-16.206-31.804     c-0.485-0.953-1.384-1.632-2.436-1.832c-0.217-0.044-0.438-0.065-0.658-0.065c-0.831,0-1.646,0.298-2.283,0.859     c-3.444,3.003-6.926,6.756-9.715,9.972l-2.734-51.576l40.117,32.53C167.876,140.426,162.793,141.037,158.337,142.055z" fill="#333333" data-original="#000000" style="" class=""></path></g></svg><div style="float: left;padding-left: 15px;width:300px;">Visit a website and you will be able to find and download all the images...</div></div>');
          var n = document.createElement("div");
          n.innerHTML = "<div style='position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);'>" + e + "</center>", n.style.width = "100%", n.style.height = "100%", $("#imgsContainer")[0].appendChild(n), document.getElementById("spinner").style.display = "none", document.getElementById("searchingimages").style.display = "none";
          var i = document.getElementById("numimagesfound");
          i.origMessage = i.origMessage || i.innerHTML, i.innerHTML = i.origMessage.replace("%n", document.querySelectorAll(".imgContainer").length), document.getElementById("numimagesfound").style.display = "", document.getElementById("selectalla").style.visibility = "visible"
        } else {
          for (var t = 0, o = 0, a = 0; a < A.length; a++) null != A[a] && null != A[a].images && A[a].images.length > 0 && (o += A[a].images.length);
          if (0 == o) return void imager.foundlastimage();
          $("#processedImages")[0].innerHTML = "analyzing 0 of " + o + " images";
          for (a = 0; a < A.length; a++)
            if (null != A[a] && null != A[a].images) {
              localStorage.senderOrigin = A[a].origin;
              var s = A[a].images;
              A[a].isTop && (imager.title = A[a].title);
              for (var l = 0; l < s.length; l++) try {
                if (imager.allimages[s[l]]) {
                  t++;
                  continue
                }
                imager.allimages[s[l]] = s[l];
                var g = document.createElement("img");

                function c() {
                  t++, $("#processedImages")[0].innerHTML = "analyzing " + (t > o ? o : t) + " of " + o + " images", t >= o && imager.foundlastimage()
                }
                g.src = s[l], g.style.maxWidth = "600px", setTimeout((function (A) {
                  A.timeoutExpired = !0, c()
                }), o / 10 * 1e3, g), g.onerror = function () {
                  this.timeoutExpired || c()
                }, g.onload = async function () {
                  if (!this.timeoutExpired) {
                    t++, $("#processedImages")[0].innerHTML = "analyzing " + (t > o ? o : t) + " of " + o + " images";
                    var A = this.src,
                      e = document.createElement("div");
                    e.className = "imgContainer";
                    var n = this.width,
                      i = this.height,
                      a = n * i;
                    e.setAttribute("pixels", a), e.setAttribute("width", n), e.setAttribute("height", i), a < 4e4 && e.setAttribute("sizeType", "small"), a >= 4e4 && e.setAttribute("sizeType", "medium"), a >= 48e4 && e.setAttribute("sizeType", "large"), n >= 1.2 * i ? e.setAttribute("layout", "wide") : i >= 1.2 * n ? e.setAttribute("layout", "tall") : e.setAttribute("layout", "square");
                    var s = "style='wwidth:" + n + "px;hheight:" + i + "px'";
                    e.innerHTML = "<img class='origImg' id='" + A + "' src='" + A + "' " + s + "><br><input class='imgInput' value='" + this.src + "'><div class='imgInfo'><div class='imgActions'><input type='checkbox'><img class='zoomIcon' title='" + chrome.i18n.getMessage("openinnewtab") + "' src='../icons/open-new-tab.png' /><img class='zoomIcon downloadIcon' title='" + chrome.i18n.getMessage("download") + "' src='../icons/icon-128.png' /></div><div class='imgSize imgDimension' style='margin-left:5px;'>-</div><div class='imgSize'>" + this.width + "x" + this.height + "</div><div class='imgSize imgType' style='margin-right:5px;'>other</div></div>", e.setAttribute("imgsrc", A);
                    for (var l = document.getElementsByClassName("imgContainer"), g = !1, c = 0; c < l.length; c++)
                      if (a > l[c].getAttribute("pixels")) {
                        $(l[c]).before(e), g = !0;
                        break
                      } g || document.getElementById("imgsContainer").appendChild(e), e.onclick = function (e) {
                      "imgInput" != e.target.className && ("zoomIcon" != e.target.className ? "zoomIcon downloadIcon" != e.target.className ? imager.selectImg(this) : chrome.downloads.download({
                        url: this.getAttribute("imgsrc")
                      }) : chrome.tabs.create({
                        url: A,
                        active: !1
                      }))
                    }, t >= o && imager.foundlastimage()
                  }
                }
              } catch (A) {}
            }
        }
    },
    selectImg: function (A, e, n) {
      var i = A.getAttribute("imgsrc"),
        t = A.querySelector('input[type="checkbox"]');
      (e ? n : !imager.selection[i]) ? (t.checked = "checked", imager.selection[i] = i, A.classList.add("imgSelected")) : (t.checked = "", delete imager.selection[i], A.classList.remove("imgSelected"));
      var o = 0;
      for (var a in imager.selection) imager.selection.hasOwnProperty(a) && o++;
      0 == o ? ($("#downloadButton")[0].style.display = "none", $("#foundimagesinnerdiv")[0].style.display = "") : ($("#downloadButton")[0].innerHTML = "<img src='../icons/icon-38.png' />" + chrome.i18n.getMessage("manyfilesnum").replace("%n", o), $("#downloadButton")[0].style.display = "", $("#foundimagesinnerdiv")[0].style.display = "none");
      var s = document.getElementsByClassName("imgContainer");
      $("#selectalla")[0].innerHTML = s.length == o ? chrome.i18n.getMessage("deselectall") : chrome.i18n.getMessage("selectall")
    },
    monitorStatus: function (A) {
      setTimeout((function () {
        if (!imager.initiated)
          if (A) {
            $("#imgsContainer")[0].innerHTML = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><center>Something went wrong, Please refresh this page.<br><br><a href='#' id='reloada'>Refresh</a></center><br><br><br><br>", $("#reloada")[0].onclick = function () {
              chrome.tabs.query({
                active: !0,
                currentWindow: !0
              }, (function (A) {
                chrome.tabs.update(A[0].id, {
                  url: A[0].url
                })
              }))
            }, document.getElementById("searchingimages").style.display = "none";
            var e = document.getElementById("numimagesfound");
            e.origMessage = e.origMessage || e.innerHTML, e.innerHTML = e.origMessage.replace("%n", document.querySelectorAll(".imgContainer").length), document.getElementById("numimagesfound").style.display = "", document.getElementById("selectalla").style.visibility = "visible"
          } else imager.getImages(!0)
      }), 1e4)
    },
    showPrefs: function () {
      document.body.classList.contains("showPrefs") ? document.body.classList.remove("showPrefs") : (chrome.downloads.onDeterminingFilename || ($("#downloadseparatefoldercont")[0].style.display = "none"), $("#downloadocationcontainer")[0].style.display = conf.downloadseparatefolder ? "block" : "none", $("#downloadseparatefolder")[0].checked = !!conf.downloadseparatefolder, $("input[name='downloadfolderpref']").val([conf.downloadfolderpref]), $("#savefoldername").val(conf.savefoldername || conf.defaults.savefoldername), $("#donotbother")[0].checked = !!conf.donotbother, $("#allframes")[0].checked = !!conf.allframes, $("#biggerview")[0].checked = !!conf.biggerview, $("#twocols")[0].checked = !!conf.twocols, document.body.classList.add("showPrefs"), chrome.storage.sync.set({
        newshown1: !0
      }))
    },
    savePrefs: function () {
      conf.downloadseparatefolder = $("#downloadseparatefolder")[0].checked, conf.downloadfolderpref = $("input[name='downloadfolderpref']:checked").val(), conf.savefoldername = $("#savefoldername").val(), conf.donotbother = $("#donotbother")[0].checked, conf.biggerview = $("#biggerview")[0].checked, conf.twocols = $("#twocols")[0].checked, conf.allframes = $("#allframes")[0].checked, chrome.storage.sync.set({
        downloadseparatefolder: conf.downloadseparatefolder,
        downloadfolderpref: conf.downloadfolderpref,
        savefoldername: conf.savefoldername,
        donotbother: conf.donotbother,
        biggerview: conf.biggerview,
        twocols: conf.twocols,
        allframes: conf.allframes
      }), document.body.classList.remove("showPrefs")
    },
    showRating: function () {
      document.body.classList.contains("showRating") ? document.body.classList.remove("showRating") : document.body.classList.add("showRating")
    },
    openRatingTab: function () {
      window.open("https://chrome.google.com/webstore/detail/image-downloader-save-pho/lbohagbplppjcpllnhdichjldhfgkicb/reviews")
    },
    downloadImages: function () {
      for (var A in imager.selection) imager.selection.hasOwnProperty(A) && chrome.downloads.download({
        url: A
      })
    },
    suggestFileName: function (A, e) {
      var n = "Imager - " + imager.title;
      "usefixedfoldername" == conf.downloadfolderpref && (n = conf.savefoldername || conf.defaults.savefoldername), n = n.replace(new RegExp("[^0-9a-zA-Z-_ ]", "g"), "_");
      var i = A.filename;
      conf.downloadseparatefolder && (i = n + "/" + i), e({
        filename: i
      })
    },
    init: function () {
      $("#container").height($(window).height() - 1), conf.biggerview && $("#container").addClass("bigger"), conf.newshown1 && $("body").addClass("newshown1"), conf.twocols && $("#container").addClass("twocols"), conf.hidetools && imager.showTools(!1), setTimeout((function () {
        $("#container")[0].style.maxWidth = document.body.offsetWidth + "px"
      }), 100), imager.localize(), imager.initSizeMenu(), imager.getImages(), chrome.downloads.onDeterminingFilename && chrome.downloads.onDeterminingFilename.addListener(imager.suggestFileName), $("#toolsButton")[0].onclick = function () {
        imager.showTools()
      }, $("#showPrefs")[0].onclick = imager.showPrefs, $("#saveprefscancel")[0].onclick = imager.showPrefs, $("#saveprefs")[0].onclick = imager.savePrefs, $("#downloadseparatefolder")[0].onclick = function () {
        $("#downloadocationcontainer")[0].style.display = $("#downloadseparatefolder")[0].checked ? "block" : "none"
      }, $("#saveaslink")[0].onclick = function () {
        event.preventDefault(), chrome.tabs.create({
          url: "chrome://settings/downloads",
          active: !0
        })
      }, $("#biggerview")[0].onclick = function () {
        $("#container")[0].style.maxWidth = "unset", $("#biggerview")[0].checked ? $("#container").addClass("bigger") : $("#container").removeClass("bigger"), $("#container")[0].style.maxWidth = document.body.offsetWidth + "px"
      }, $("#twocols")[0].onclick = function () {
        $("#twocols")[0].checked ? $("#container").addClass("twocols") : $("#container").removeClass("twocols")
      }, $("#selectalla")[0].onclick = function () {
        var A = $(".imgContainer:not(.excluded)"),
          e = 0;
        for (var n in imager.selection) imager.selection.hasOwnProperty(n) && e++;
        var i = !0;
        A.length == e && (i = !1), A.each((function () {
          imager.selectImg(this, !0, i)
        }))
      }, $("#downloadButton")[0].onclick = function () {
        var A = 0;
        for (var e in imager.selection) imager.selection.hasOwnProperty(e) && A++;
        if (A > 2 && !conf.donotbother) return -1 != navigator.userAgent.indexOf("Firefox") && (chromemanyfileswarning.style.display = "none", firefoxmanyfileswarning.style.display = "block"), $("#manyfilesnum")[0].innerHTML = $("#manyfilesnum")[0].innerHTML.replace("%n", A), $("#manyfiles")[0].style.display = "block", $("#manyfilesdownload")[0].onclick = function () {
          conf.donotbother = $("#donotbotherme")[0].checked, chrome.storage.sync.set({
            donotbother: conf.donotbother
          }), imager.downloadImages(), $("#manyfiles")[0].style.display = "none"
        }, $("#manyfilescancel")[0].onclick = function () {
          $("#manyfiles")[0].style.display = "none"
        }, void($("#donotbotherme")[0].checked = !1);
        imager.downloadImages()
      }, $("#filterbyurlinput").on("keyup", (function (A) {
        var e = this.value,
          n = $(A.target).closest(".filters > div").find(".menuLabel");
        n.html("URL"), n.removeClass("changedMenu"), e && (n.html(e), n.addClass("changedMenu")), 13 === A.keyCode && $(A.target).closest(".selectMenu").hide(), imager.inputtimeout && clearTimeout(imager.inputtimeout), imager.inputtimeout = setTimeout((function () {
          conf.urlpattern = e, imager.foundlastimage()
        }), 300)
      })), $("#ratebutton")[0].onclick = imager.openRatingTab, $("#rateclose")[0].onclick = imager.showRating, $(".filters > div div[saveSize]").on("click", (function (A) {
        var e = $(this);
        conf.savesize ? (conf.savesize = !1, e.removeClass("selected"), imager.saveSizeConf(!0)) : (conf.savesize = !0, e.addClass("selected"), imager.saveSizeConf()), chrome.storage.sync.set({
          savesize: conf.savesize
        })
      })), $(".filters > div").on("mousedown", (function (A) {
        $(this).find(".selectMenu").show()
      })), $(document.body).on("click", (function (A) {
        $(".filters div").each((function () {
          var e = this,
            n = e == A.target;
          $(A.target).parents().each((function () {
            this == e && (n = !0)
          })), n || $(e).find(".selectMenu").hide()
        }))
      })), $(".sizeMenu").on("click", (function (A) {
        var e = $(A.target).attr("sizeConf");
        if (e && (conf.sizetype = e, "custom" != e)) {
          $(this).find("div[sizeConf]").each((function () {
            $(this).removeClass("selected")
          })), conf.minwidth = conf.defaults.minwidth, conf.minheight = conf.defaults.minheight, $("#minwidthinput").val(conf.minwidth), $("#minheightinput").val(conf.minheight);
          var n = $(A.target).closest(".filters > div").find(".menuLabel");
          n.removeClass("changedMenu"), n.html("Size"), "any" != e && (n.addClass("changedMenu"), n.html(e.charAt(0).toUpperCase() + e.slice(1))), $(A.target).addClass("selected"), imager.foundlastimage(), $(this).hide()
        }
      })), $("#minwidthinput").keyup((function (A) {
        if (A.preventDefault(), 13 === A.keyCode) {
          conf.sizetype = "custom", conf.minwidth = parseInt(this.value || 0), conf.minheight = parseInt($("#minheightinput").val() || 0);
          var e = $(A.target).closest(".filters > div").find(".menuLabel");
          e.html("Size"), e.removeClass("changedMenu"), conf.minwidth == conf.defaults.minwidth && conf.minheight == conf.defaults.minheight || (e.html("> " + conf.minwidth + "&times;" + conf.minheight), e.addClass("changedMenu")), $(A.target).closest(".filters > div").find("div[sizeConf]").each((function () {
            $(this).removeClass("selected")
          })), $("#sizeTab").find("div[sizeConf=custom]").addClass("selected"), $(A.target).closest(".sizeMenu").hide(), imager.foundlastimage()
        }
      })), $("#minheightinput").keyup((function (A) {
        if (A.preventDefault(), 13 === A.keyCode) {
          conf.sizetype = "custom", conf.minheight = parseInt(this.value || 0), conf.minwidth = parseInt($("#minwidthinput").val() || 0);
          var e = $(A.target).closest(".filters > div").find(".menuLabel");
          e.html("Size"), e.removeClass("changedMenu"), conf.minwidth == conf.defaults.minwidth && conf.minheight == conf.defaults.minheight || (e.html("> " + conf.minwidth + "&times;" + conf.minheight), e.addClass("changedMenu")), $(A.target).closest(".filters > div").find("div[sizeConf]").each((function () {
            $(this).removeClass("selected")
          })), $("#sizeTab").find("div[sizeConf=custom]").addClass("selected"), $(A.target).closest(".sizeMenu").hide(), imager.foundlastimage()
        }
      })), $(".typeMenu").on("click", (function (A) {
        conf.imgtype = $(A.target).attr("typeConf"), 0 == conf.imgtype.indexOf("any") && (conf.imgtype = null), $(this).find("div[typeConf]").each((function () {
          $(this).removeClass("selected")
        }));
        var e = $(A.target).closest(".filters > div").find(".menuLabel");
        e.removeClass("changedMenu"), e.html("Type"), conf.imgtype && (e.addClass("changedMenu"), e.html(conf.imgtype)), $(A.target).addClass("selected"), imager.foundlastimage(), $(this).hide()
      })), $(".layoutMenu").on("click", (function (A) {
        conf.layout = $(A.target).attr("layoutConf"), 0 == conf.layout.indexOf("any") && (conf.layout = null), $(this).find("div[layoutConf]").each((function () {
          $(this).removeClass("selected")
        }));
        var e = $(A.target).closest(".filters > div").find(".menuLabel");
        e.removeClass("changedMenu"), e.html("Layout"), conf.layout && (e.addClass("changedMenu"), e.html(conf.layout.charAt(0).toUpperCase() + conf.layout.slice(1))), $(A.target).addClass("selected"), imager.foundlastimage(), $(this).hide()
      })), $(".clearFilters").on("click", (function () {
        imager.saveSizeConf(!0), document.location.reload()
      }))
    },
    showTools: function (A) {
      void 0 === A ? $("#toolsDiv").toggle() : A ? $("#toolsDiv").show() : $("#toolsDiv").hide();
      var e = !$("#toolsDiv").is(":visible");
      e ? $("#toolsButton").addClass("inactive") : $("#toolsButton").removeClass("inactive"), chrome.storage.sync.set({
        hidetools: e
      })
    },
    getConf: function (A) {
      chrome.storage.sync.get({
        minwidth: conf.defaults.minwidth,
        minheight: conf.defaults.minheight,
        downloadseparatefolder: conf.defaults.downloadseparatefolder,
        downloadfolderpref: conf.defaults.downloadfolderpref,
        savefoldername: conf.defaults.savefoldername,
        donotbother: conf.defaults.donotbother,
        numviews: conf.defaults.numviews,
        allframes: conf.defaults.allframes,
        biggerview: conf.defaults.biggerview,
        twocols: conf.defaults.twocols,
        newshown1: conf.defaults.newshown1,
        hidetools: conf.defaults.hidetools,
        savesize: conf.defaults.savesize,
        sizetype: conf.defaults.sizetype
      }, (function (e) {
        conf.downloadseparatefolder = e.downloadseparatefolder, conf.downloadfolderpref = e.downloadfolderpref, conf.savefoldername = e.savefoldername, conf.donotbother = e.donotbother, conf.biggerview = e.biggerview, conf.twocols = e.twocols, conf.allframes = e.allframes, conf.newshown1 = e.newshown1, conf.hidetools = e.hidetools, conf.savesize = e.savesize, conf.sizetype = e.sizetype, conf.minwidth = e.minwidth, conf.minheight = e.minheight, A(), imager.numviews = e.numviews + 1;
        var n = imager.numviews > 1e3 ? 1e5 : imager.numviews > 100 ? 1e3 : imager.numviews > 10 ? 100 : 10;
        imager.numviews % n == 0 && imager.showRating(), chrome.storage.sync.set({
          numviews: imager.numviews
        })
      }))
    },
    foundlastimage: function () {
      chrome.runtime.sendMessage({
        msg: "getImagesCT"
      }, (function (A) {
        var e = A.imagesCT;
        conf.savesize && imager.saveSizeConf(), $(".imgContainer").each((function () {
          var A = $(this);
          imager.selectImg(this, !0, !1), A[0].className = "imgContainer";
          var n, i, t, o = A.attr("imgsrc"),
            a = parseInt(A.attr("width")),
            s = parseInt(A.attr("height")),
            l = (parseInt(A.attr("pixels")), A.attr("sizeType")),
            g = A.attr("layout");
          try {
            var c = e[o];
            if (c && (n = c.mimeType, t = c.contentLength), !n)
              if (0 == o.indexOf("data:image/")) n = o.substring(5, o.indexOf(";"));
              else {
                var d = o.split("?")[0].toLowerCase();
                n = d.substring(d.lastIndexOf(".") + 1, d.length).toLowerCase()
              } i = -1 != (n = n ? n.toLowerCase() : "").indexOf("jpg") || -1 != n.indexOf("jpeg") ? "JPG" : -1 != n.indexOf("gif") ? "GIF" : -1 != n.indexOf("png") ? "PNG" : -1 != n.indexOf("svg") ? "SVG" : -1 != n.indexOf("webp") ? "WEBP" : -1 != n.indexOf("bmp") ? "BMP" : -1 != n.indexOf("ico") ? "ICO" : -1 != n.indexOf("tiff") ? "TIFF" : "-"
          } catch (A) {}
          i = i || "-", A.find(".imgType").html(i), A.attr("type", i), t && A.find(".imgDimension").html(imager.formatBytes(t, 0)), conf.imgtype && i != conf.imgtype && A.addClass("excluded excludedType"), ("any" != conf.sizetype && "custom" != conf.sizetype && conf.sizetype != l || !(a >= conf.minwidth && s >= conf.minheight)) && A.addClass("excluded excludedSize"), -1 == o.toLowerCase().indexOf(conf.urlpattern.toLowerCase()) && A.addClass("excluded excludedUrl"), conf.layout && g != conf.layout && A.addClass("excluded excludedLayout")
        })), imager.selection = new Object;
        var n = ".imgContainer:not(.excludedUrl):not(.excludedType):not(.excludedLayout)",
          i = ".imgContainer:not(.excludedUrl):not(.excludedSize):not(.excludedLayout)",
          t = ".imgContainer:not(.excludedUrl):not(.excludedSize):not(.excludedType)";
        imager.stats = {
          size: {
            any: $(n).length,
            small: $(n + "[sizeType='small']").length,
            medium: $(n + "[sizeType='medium']").length,
            large: $(n + "[sizeType='large']").length
          },
          types: {
            any: $(i).length,
            JPG: $(i + "[type='JPG']").length,
            GIF: $(i + "[type='GIF']").length,
            PNG: $(i + "[type='PNG']").length,
            SVG: $(i + "[type='SVG']").length,
            WEBP: $(i + "[type='WEBP']").length,
            BMP: $(i + "[type='BMP']").length,
            ICO: $(i + "[type='ICO']").length,
            TIFF: $(i + "[type='TIFF']").length
          },
          layout: {
            any: $(t).length,
            square: $(t + "[layout='square']").length,
            wide: $(t + "[layout='wide']").length,
            tall: $(t + "[layout='tall']").length
          }
        }, $(".typeMenu").find("div[typeConf]").each((function () {
          var A = $(this).attr("typeConf"),
            e = imager.stats.types[A];
          e = e || 0, $(this).html(A.charAt(0).toUpperCase() + A.slice(1) + " (" + e + ")"), this.style.setProperty("color", e ? "inherit" : "lightGray", e ? "" : "important")
        })), $(".sizeMenu").find("div[sizeConf]").each((function () {
          var A = $(this).attr("sizeConf");
          if ("custom" != A) {
            var e = imager.stats.size[A];
            e = e || 0, $(this).html(A.charAt(0).toUpperCase() + A.slice(1) + " (" + e + ")"), this.style.setProperty("color", e ? "inherit" : "lightGray", e ? "" : "important")
          }
        })), $(".layoutMenu").find("div[layoutConf]").each((function () {
          var A = $(this).attr("layoutConf"),
            e = imager.stats.layout[A];
          e = e || 0, $(this).html(A.charAt(0).toUpperCase() + A.slice(1) + " (" + e + ")"), this.style.setProperty("color", e ? "inherit" : "lightGray", e ? "" : "important")
        })), $(".changedMenu").length > 0 ? $(".clearFilters").show() : $(".clearFilters").hide(), document.getElementById("spinner").style.display = "none", document.querySelectorAll(".imgContainer").forEach((function (A) {
          A.style.display = "-webkit-box"
        }));
        var o = document.getElementById("numimagesfound");
        o.origMessage = o.origMessage || o.innerHTML, o.innerHTML = o.origMessage.replace("%n", document.querySelectorAll(".imgContainer:not(.excluded)").length), document.getElementById("searchingimages").style.display = "none", document.getElementById("numimagesfound").style.display = "", document.getElementById("selectalla").style.visibility = "visible"
      }))
    },
    localize: function () {
      for (var A = document.querySelectorAll(".localizedSpan"), e = 0; e < A.length; e++) {
        var n = chrome.i18n.getMessage(A[e].getAttribute("messagesKey"));
        n && (A[e].innerHTML = n)
      }
      $("#filterbyurlinput")[0].setAttribute("placeholder", chrome.i18n.getMessage("filterbyurlinputplaceholder"))
    },
    formatBytes: function (A, e) {
      if (0 == A) return "0 B";
      var n = e,
        i = Math.floor(Math.log(A) / Math.log(1024));
      return parseFloat((A / Math.pow(1024, i)).toFixed(n)) + " " + ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][i]
    },
    saveSizeConf: function (A) {
      chrome.storage.sync.set({
        sizetype: A ? conf.defaults.sizetype : conf.sizetype,
        minwidth: A ? conf.defaults.minwidth : conf.minwidth,
        minheight: A ? conf.defaults.minheight : conf.minheight
      })
    },
    initSizeMenu: function () {
      var A = $("#sizeTab");
      if (conf.minwidth == conf.defaults.minwidth && conf.minheight == conf.defaults.minheight || (conf.savesize = !0, conf.sizetype = "custom"), conf.savesize) {
        A.find("div[sizeConf]").removeClass("selected"), A.find("div[sizeConf=" + conf.sizetype + "]").addClass("selected"), $("#minwidthinput").val(conf.minwidth), $("#minheightinput").val(conf.minheight), A.find(".savesize").addClass("selected");
        var e = A.find(".menuLabel");
        switch (conf.sizetype) {
          case "any":
            break;
          case "custom":
            e.addClass("changedMenu"), e.html("> " + conf.minwidth + "&times;" + conf.minheight);
            break;
          default:
            e.addClass("changedMenu"), e.html(conf.sizetype.charAt(0).toUpperCase() + conf.sizetype.slice(1))
        }
        $(".changedMenu").length > 0 && ($(".clearFilters").show(), imager.showTools(!0))
      }
    }
  };
imager.getConf(imager.init);