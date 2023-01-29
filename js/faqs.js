const FAQs = document.querySelector("#FAQs")
fetch("/./pages/faqs.html")
.then(res=>res.text())
.then(data=> {
    FAQs.innerHTML = data
    // const parser = new DOMParser()
    // const doc = parser.parseFromString(data, 'text/html')
    // eval(doc.querySelector('script').textContent)
})