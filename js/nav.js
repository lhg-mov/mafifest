const nav = document.querySelector("#navigasi")
fetch("/./pages/nav.html")
.then(res=>res.text())
.then(data=> {
    nav.innerHTML = data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})