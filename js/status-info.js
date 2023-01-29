const statusInfo = document.querySelector("#statusInfo")
fetch("/./pages/status-info.html")
.then(res=>res.text())
.then(data=> {
    statusInfo.innerHTML = data
    // const parser = new DOMParser()
    // const doc = parser.parseFromString(data, 'text/html')
    // eval(doc.querySelector('script').textContent)
})