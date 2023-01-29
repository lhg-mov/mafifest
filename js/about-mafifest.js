const aboutMAFIFest = document.querySelector("#aboutMAFIFest")
fetch("/./pages/aboutMAFIFest.html")
.then(res=>res.text())
.then(data=> {
    aboutMAFIFest.innerHTML = data
    // const parser = new DOMParser()
    // const doc = parser.parseFromString(data, 'text/html')
    // eval(doc.querySelector('script').textContent)
})