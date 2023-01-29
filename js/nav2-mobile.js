const nav2 = document.querySelector("#nav2-mobile")
fetch("/./pages/nav2-mobile.html")
.then(res=>res.text())
.then(data=> {
    nav2.innerHTML = data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})