function getAttributes() {
    var x = document.getElementById("w3r");
    var href = x.getAttribute('href');
    console.log(href);
    var hreflang = x.getAttribute('hreflang');
    console.log(hreflang);
    var rel = x.getAttribute('rel');
    console.log(rel);
    var target = x.getAttribute('target');
    console.log(target);
    var type = x.getAttribute('type');
    console.log(type);
}

//CORRECTION
// function getAttributes() {
//     var u = document.getElementById("w3r").href;
//     alert('The value of the href attribute of the link is : ' + u);
//     var v = document.getElementById("w3r").hreflang;
//     3
//     alert('The value of the hreflang attribute of the link is : ' + v);
//     var w = document.getElementById("w3r").rel;
//     alert('The value of the rel attribute of the link is : ' + w);
//     var x = document.getElementById("w3r").target;
//     alert('The value of the taget attribute of the link is : ' + x);
//     var y = document.getElementById("w3r").type;
//     alert('The value of the type attribute of the link is : ' + y);
// }