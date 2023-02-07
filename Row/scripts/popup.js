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
          file: "scripts/fetchImageHelper.js",
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
                    e.innerHTML = "<img class='origImg' id='" + A + "' src='" + A + "' " + s + "><br><input class='imgInput' value='" + this.src + "'><div class='imgInfo'><div class='imgActions'><input type='checkbox'><img class='zoomIcon' title='" + chrome.i18n.getMessage("openinnewtab") + "' src='/open-new-tab.png' /><img class='zoomIcon downloadIcon' title='" + chrome.i18n.getMessage("download") + "' src='data:image/png;base64,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' /></div><div class='imgSize imgDimension' style='margin-left:5px;'>-</div><div class='imgSize'>" + this.width + "x" + this.height + "</div><div class='imgSize imgType' style='margin-right:5px;'>other</div></div>", e.setAttribute("imgsrc", A);
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
      0 == o ? ($("#downloadButton")[0].style.display = "none", $("#foundimagesinnerdiv")[0].style.display = "") : ($("#downloadButton")[0].innerHTML = "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAADsQAAA7EAZUrDhsAAATxaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0OCA3OS4xNjQwMzYsIDIwMTkvMDgvMTMtMDE6MDY6NTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNi0yNFQxMzowOToyMiswMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDYtMjRUMTM6MTI6NTErMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDYtMjRUMTM6MTI6NTErMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNmMDMyZDRmLWRkN2UtNDc3Ny1iNWJhLTdjNjVmZTVmMGIxMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozZjAzMmQ0Zi1kZDdlLTQ3NzctYjViYS03YzY1ZmU1ZjBiMTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjAzMmQ0Zi1kZDdlLTQ3NzctYjViYS03YzY1ZmU1ZjBiMTMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjNmMDMyZDRmLWRkN2UtNDc3Ny1iNWJhLTdjNjVmZTVmMGIxMyIgc3RFdnQ6d2hlbj0iMjAyMi0wNi0yNFQxMzowOToyMiswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hVhPxgAAEOlJREFUeJzt3UuorfddxvHneJpLSYyS1AZ7GdiqNOhABfEyqWZgWgULFh2oqQ2idiCIpSiiobXiQMTbwFGtlzYg2olCDY0Fi4hUVIizCtVGsa1a26Bpqrl4sh2sE3M5l31b7/q///f5fCDkEMI+v8FmP9/zrr3XuXB0dBQAoMsXjT4AADg8AQAAhQQAABQS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' />" + chrome.i18n.getMessage("manyfilesnum").replace("%n", o), $("#downloadButton")[0].style.display = "", $("#foundimagesinnerdiv")[0].style.display = "none");
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