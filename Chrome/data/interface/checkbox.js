domReady(() => {
  bindCheckboxes()
})


function domReady (callback) {
  if (document.readyState === 'complete') {
    callback()
  } else {
    window.addEventListener('load', callback, false);
  }
}

function bindCheckboxes() {
  for (const $setting of document.querySelectorAll('.setting')) {
    const $input = $setting.querySelector('input')
    $input.checked = localStorage[$input.name] === 'true'
    $setting.addEventListener('change', (event) => {
      localStorage[$input.name] = $input.checked
      if (localStorage.checkBox=="true") {
        document.querySelectorAll("link")[3].rel = 'text';//dark
        document.querySelectorAll("link")[4].rel = 'stylesheet';//light
      }else {
        document.querySelectorAll("link")[3].rel = 'stylesheet';//dark
        document.querySelectorAll("link")[4].rel = 'text';//light
      }
    }, false)

  }
  if (localStorage.checkBox=="true") {
    document.querySelectorAll("link")[3].rel = 'text';//dark
    document.querySelectorAll("link")[4].rel = 'stylesheet';//light
  }
}