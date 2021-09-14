 var productObject = document.querySelectorAll('.adress-service img')
// var productObjectp = document.querySelectorAll('.main-pd__list-product .product p.name')
for (let index = 0; index < productObject.length; index++) {
    const element = productObject[index];
    console.log(element)
    element.outerHTML = '<a href="https://hueit09spkt.github.io/viedeli/location-details.html">'+element.outerHTML+'</a>';
    
}
var productObject = document.querySelectorAll('.adress-service h4')
// var productObjectp = document.querySelectorAll('.main-pd__list-product .product p.name')
for (let index = 0; index < productObject.length; index++) {
    const element = productObject[index];
    console.log(element)
    element.outerHTML = '<a href="https://hueit09spkt.github.io/viedeli/location-details.html">'+element.outerHTML+'</a>';
    
}
// for (let index = 0; index < productObjectp.length; index++) {
//     const element = productObjectp[index];
//     // var oldchil = element;
//     // var newchil = '<a href="https://hueit09spkt.github.io/viedeli/product-details.html">'+element.outerHTML+'</a>';
//     // element.parentElement.replaceChild()
//     element.outerHTML = '<a href="https://hueit09spkt.github.io/viedeli/product-details.html">'+element.outerHTML+'</a>';
    
// }
var hrefOject =document.querySelectorAll('.main-lct a')
console.log(hrefOject)
for (let index = 0; index < hrefOject.length; index++) {
    const element = hrefOject[index];
    if(element.getAttribute('href')=='#'){

        element.setAttribute('href','https://hueit09spkt.github.io/viedeli/product-details.html')
    }
}