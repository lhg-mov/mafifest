const contactUs = document.querySelector("#contactUs")
fetch("/./pages/contact.html")
.then(res=>res.text())
.then(data=> {
    contactUs.innerHTML = data
    // const parser = new DOMParser()
    // const doc = parser.parseFromString(data, 'text/html')
    // eval(doc.querySelector('script').textContent)
})