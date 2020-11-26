document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, td, caption, span, a')
    .forEach((element) => {
        Object.keys(COUNTRY_FLAG_EMOJIS).forEach((unicode) => {
            if (element.innerHTML.includes(unicode)) {
                const size = window.getComputedStyle(element, null).getPropertyValue('font-size')
                const img = `<img style="width: ${size}; height: ${size}; display: inline;" src="${COUNTRY_FLAG_EMOJIS[unicode]}">`
                element.innerHTML = element.innerHTML.replace(unicode, img)
            }
        })
    })
