const dataUpdate = document.querySelector("#dataUpdate")
fetch("/./pages/data.html")
.then(res=>res.text())
.then(data=> {
    dataUpdate.innerHTML = data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})