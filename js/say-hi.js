const sayHi = document.querySelector("#sayHi")
fetch("/./pages/say-hi.html")
.then(res=>res.text())
.then(data=> {
    sayHi.innerHTML = data
    // const parser = new DOMParser()
    // const doc = parser.parseFromString(data, 'text/html')
    // eval(doc.querySelector('script').textContent)
})