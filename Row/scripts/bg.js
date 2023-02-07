var imagesCT = {},
  redirectRequests = {},
  cleanUpInterval = 864e5;

function getHeaderFromHeaders(e, r) {
  for (var t = 0; t < e.length; ++t) {
    var n = e[t];
    if (n.name.toLowerCase() === r) return n.value
  }
}
setInterval((function () {
  for (var e in imagesCT) imagesCT.hasOwnProperty(e) && (new Date).getTime() - imagesCT[e].creationTS > cleanUpInterval && (delete imagesCT[e], delete redirectRequests[e])
}), cleanUpInterval), chrome.runtime.onMessage.addListener((function (e, r, t) {
  if ("getImagesCT" === e.msg) return setTimeout((function () {
    t({
      imagesCT: imagesCT
    })
  }), 1e3), !0
})), chrome.webRequest.onBeforeSendHeaders.addListener((function (e) {
  if (e.initiator === location.origin) {
    const r = e.requestHeaders.find((e => "Referer" === e.name));
    r ? r.value = localStorage.senderOrigin : e.requestHeaders.push({
      name: "Referer",
      value: localStorage.senderOrigin
    })
  }
  return {
    requestHeaders: e.requestHeaders
  }
}), {
  types: ["image", "media", "object"],
  urls: []
},chrome.webRequest.onCompleted.addListener((function (e) {
  if (e.initiator === location.origin) {
    var r = redirectRequests[e.url] || e.url;
    imagesCT[r] = {
      mimeType: getHeaderFromHeaders(e.responseHeaders, "content-type"),
      contentLength: getHeaderFromHeaders(e.responseHeaders, "content-length"),
      creationTS: (new Date).getTime()
    }
  }
}), {
  urls: ["<all_urls>"]
}, ["responseHeaders"]);