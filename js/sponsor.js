const sponsor = document.querySelector("#sponsor")
fetch("/./pages/coming-soon/index.html")
.then(res=>res.text())
.then(data=> {
    sponsor.innerHTML = data
    // const parser = new DOMParser()
    // const doc = parser.parseFromString(data, 'text/html')
    // eval(doc.querySelector('script').textContent)
})