const newsPage = document.querySelector("#newsPage")
fetch("/./pages/news-page.html")
.then(res=>res.text())
.then(data=> {
    newsPage.innerHTML = data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})