const regKarya = document.querySelector("#regKarya")
fetch("/./pages/reg-karya.html")
.then(res=>res.text())
.then(data=> {
    regKarya.innerHTML = data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})