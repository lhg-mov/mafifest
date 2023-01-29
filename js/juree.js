const ourJuree = document.querySelector("#ourJuree")
fetch("/./pages/juri-fest.html")
.then(res=>res.text())
.then(data=> {
    ourJuree.innerHTML = data
    // const parser = new DOMParser()
    // const doc = parser.parseFromString(data, 'text/html')
    // eval(doc.querySelector('script').textContent)
})