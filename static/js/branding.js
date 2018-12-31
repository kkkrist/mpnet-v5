var script = document.currentScript || document.getElementById('mpnet-branding')

if (script) {
  var a = document.createElement('a')
  var p = script.parentNode
  var q = script.src.replace(/^http.*\?/, '')
  var s = document.createElement('style')

  var i = q.indexOf('colors=invert') > -1

  s.setAttribute('scoped', '')
  s.textContent = '#mpnet-branding:after{' +
    (i ? 'background-color:#333;' : 'background-color:#ddd;') +
    'content:"";' +
    'display:block;' +
    'height:0.5em;' +
    'margin-left:-0.5em;' +
    'position:relative;' +
    'top:-1em;' +
    'width:calc(100% + 1em);' +
    'z-index:-1;' +
'}'

  a.addEventListener('click', function (event) {
    event.preventDefault()
    window.location =
      'https://mundpropaganda.net/?utm_source=' +
      window.location.hostname +
      '&utm_medium=footer&utm_term=' +
      window.location.pathname +
      '&utm_campaign=Footer1' +
      '&aip=1'
  }, { once: true })
  a.href = 'https://mundpropaganda.net'
  a.id = 'mpnet-branding'
  a.innerHTML = '{ M / <span style="color:#ff4136">P</span> }'
  a.setAttribute('rel', 'nofollow')
  a.style = 'border:none;display:inline-block;font-weight:bold;text-decoration:none;' +
    (i
      ? 'color:#fff;text-shadow:0px 0px 0.25em #000'
      : 'color:#000;text-shadow:0px 0px 0.25em #fff'
    )

  p.appendChild(s)
  p.appendChild(a)
  p.removeChild(script)
}
