function getResult() {
  var e = {
    imageType: {
      IMG: "IMG",
      TEXT: "TEXT",
      LINK: "LINK",
      INPUT_IMG: "INPUT_IMG",
      BACKGROUND: "BACKGROUND"
    },
    imgList: [],
    getImages: function () {
      this.imgList = [];
      for (var t = document.getElementsByTagName("img"), n = 0; n < t.length; n++) {
        var r = t[n];
        (v = new Image).src = r.src;
        var i = 0,
          a = 0;
        i = parseInt(r.naturalWidth), a = parseInt(r.naturalHeight), nwidth = parseInt(v.width), nheight = parseInt(v.height), i = nwidth > i ? nwidth : i, a = nheight > a ? nheight : a, this.addImg(e.imageType.IMG, r.src, i, a)
      }
      if ((t = document.images) && t.length > 0)
        for (n = 0; n < t.length; n++) try {
          r = t[n];
          (v = new Image).src = r.currentSrc;
          i = 0, a = 0;
          i = parseInt(r.naturalWidth), a = parseInt(r.naturalHeight), nwidth = parseInt(v.width), nheight = parseInt(v.height), i = nwidth > i ? nwidth : i, a = nheight > a ? nheight : a, v = null, this.addImg(e.imageType.IMG, r.currentSrc, i, a)
        } catch (e) {}
      try {
        if ((t = e.querySelectorAllShadows("img")) && t.length > 0)
          for (n = 0; n < t.length; n++) try {
            r = t[n];
            (v = new Image).src = r.currentSrc;
            i = 0, a = 0;
            i = parseInt(r.naturalWidth), a = parseInt(r.naturalHeight), nwidth = parseInt(v.width), nheight = parseInt(v.height), i = nwidth > i ? nwidth : i, a = nheight > a ? nheight : a, v = null, this.addImg(e.imageType.IMG, r.currentSrc, i, a)
          } catch (e) {}
      } catch (e) {}
      var h = document.getElementsByTagName("source");
      if (h && h.length > 0)
        for (n = 0; n < h.length; n++) try {
          var g = h[n];
          if (!g.srcset) continue;
          (v = new Image).src = g.srcset;
          i = parseInt(v.naturalWidth), a = parseInt(v.naturalHeight);
          nwidth = parseInt(v.width), nheight = parseInt(v.height), i = nwidth > i ? nwidth : i, a = nheight > a ? nheight : a, this.addImg(e.imageType.IMG, v.src, i, a), v = null
        } catch (e) {}
      var s = document.querySelectorAll("img[srcset]");
      if (s && s.length > 0)
        for (n = 0; n < s.length; n++) try {
          if (!(r = s[n]).srcset) continue;
          for (var c = r.srcset.split(","), l = 0; l < c.length; l++) try {
            u = (u = c[l]).substring(0, -1 != u.indexOf(" ") ? u.indexOf(" ") : u.length), (v = new Image).src = u, u = v.src;
            i = parseInt(v.naturalWidth), a = parseInt(v.naturalHeight);
            nwidth = parseInt(v.width), nheight = parseInt(v.height), i = nwidth > i ? nwidth : i, a = nheight > a ? nheight : a, v = null, this.addImg(e.imageType.IMG, u, i, a)
          } catch (e) {}
        } catch (e) {}
      var d = document.getElementsByTagName("input");
      for (n = 0; n < d.length; n++) {
        var o = d[n];
        if ("IMAGE" == o.type.toUpperCase()) {
          var u = o.src;
          this.addImg(e.imageType.INPUT_IMG, u, 0, 0)
        }
      }
      var m = document.getElementsByTagName("a");
      for (n = 0; n < m.length; n++) {
        var p = m[n].href;
        (p.endsWith(".jpg") || p.endsWith(".jpeg") || p.endsWith(".bmp") || p.endsWith(".ico") || p.endsWith(".gif") || p.endsWith(".png")) && this.addImg(e.imageType.LINK, p, 0, 0)
      }
      var I, f = [],
        y = document.getElementsByTagName("*");
      for (y = f.slice.call(y, 0, y.length); y.length;) {
        I = e.deepCss(y.shift(), "background-image");
        try {
          if (I && "none" != I)
            for (var w = /url\(['"]?([^")]+)/g; null != (T = w.exec(I));) {
              if ((u = T[1]) && -1 == e.arrayIndexOf(f, u))(v = new Image).src = u, u = v.src, this.addImg(e.imageType.BACKGROUND, u, 0, 0)
            }
        } catch (e) {}
      }
      for (f = [], y = document.getElementsByTagName("*"), y = f.slice.call(y, 0, y.length); y.length;) {
        I = e.deepCss(y.shift(), "background");
        try {
          if (I && "none" != I) {
            var T;
            for (w = /url\(['"]?([^")]+)/g; null != (T = w.exec(I));) {
              var v;
              if ((u = T[1]) && -1 == e.arrayIndexOf(f, u))(v = new Image).src = u, u = v.src, this.addImg(e.imageType.BACKGROUND, u, 0, 0)
            }
          }
        } catch (e) {}
      }
      try {
        var S = document.body.innerHTML.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?//=]*)/gi).filter((function (e, t, n) {
          return t == n.indexOf(e)
        }));
        for (n = 0; n < S.length; n++) null != S[n].match(/.*(\.png|\.svg|\.jpg|\.gif|\.jpeg|\.bmp|\.ico|\.webp|\.tif|\.apng|\.jfif|\.pjpeg|\.pjp).*/i) && this.addImg(e.imageType.LINK, S[n], 0, 0)
      } catch (e) {}
      return this.imgList
    },
    addImg: function (e, t, n, r) {
      this.imgList.push({
        type: e,
        src: t,
        width: n,
        height: r
      })
    },
    getUniqueImagesSrcs: function () {
      for (var t = e.getImages(), n = new Array, r = 0; r < t.length; r++) n[n.length] = t[r].src;
      return n.reverse().filter((function (e, t, n) {
        return -1 === n.indexOf(e, t + 1)
      })).reverse()
    },
    deepCss: function (e, t) {
      if (!e || !e.style) return "";
      var n = t.replace(/\-([a-z])/g, (function (e, t) {
        return t.toUpperCase()
      }));
      if (e.currentStyle) return e.style[n] || e.currentStyle[n] || "";
      var r = document.defaultView || window;
      return e.style[n] || r.getComputedStyle(e, "").getPropertyValue(t) || ""
    },
    arrayIndexOf: function (e, t, n) {
      n = n || 0;
      for (var r = e.length; n < r;) {
        if (e[n] === t) return n;
        ++n
      }
      return -1
    },
    querySelectorAllShadows: function (t, n = document.body) {
      const r = Array.from(n.querySelectorAll("*")).map((e => e.shadowRoot)).filter(Boolean).map((n => e.querySelectorAllShadows(t, n)));
      return Array.from(n.querySelectorAll(t)).concat(r).flat()
    }
  };
  return {
    images: e.getUniqueImagesSrcs(),
    title: document.title,
    isTop: window.top == window.self,
    origin: window.location.origin
  }
}
getResult();