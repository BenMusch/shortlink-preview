const getPageTitle = (node) => {
  console.log(node)
  node = $(node)
  let href = node.attr('href')
  console.log(href)

  if (!href || !href.includes('bit.ly')) return

  console.log('visiting ' + href)
  $.ajax({
    url: href,
    success: (responseHtml) => {
      let title = $(responseHtml).filter('title').text()
      console.log('success', responseHtml, title)
      if (title) node.attr('title', title.trim())
    }}
  )
}

$(document).ready(() => $('a').each(function (i) {
  console.log(this)
  getPageTitle(this)
}))
