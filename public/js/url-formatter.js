/* global cdnDomain, devDomain */
(function (doc) {

"use strict";

var REGEX_REPO_URL = /^(https?):\/\/gitlab\.isb-sib\.ch\/(.+?)\/(.+?)\/(?:(?:blob|raw)\/)?(.+?\/.+)/i;

var linkToRawSIB  = doc.getElementById('url-dev');
var urlEl  = doc.getElementById('url');

urlEl.value = "https://gitlab.isb-sib.ch/calipho/nextprot-viewers/blob/develop/peptides/app/index.html";
setNewUrl();
    
function setNewUrl(){
    var url = urlEl.value.trim();

 
    if (REGEX_REPO_URL.test(url)) {
        
        urlEl.classList.remove('invalid');
        urlEl.classList.add('valid');

        linkToRawSIB.href  = url.replace(REGEX_REPO_URL, window.location.origin + '/$2/$3/raw/$4');
        linkToRawSIB.text  = url.replace(REGEX_REPO_URL, window.location.origin + '/$2/$3/raw/$4');

        linkToRawSIB.classList.remove('not-active');
        linkToRawSIB.classList.add('active');
    }else {

        urlEl.classList.remove('valid');

        if (url.length) {
            urlEl.classList.add('invalid');
        } else {
            urlEl.classList.remove('invalid');
        }

        linkToRawSIB.value  = '';
        linkToRawSIB.classList.add('not-active');
    }
    
}
    
urlEl.addEventListener('input', function () {
    setNewUrl();
}, false);

linkToRawSIB.addEventListener('focus', onFocus);

function onFocus(e) {
    setTimeout(function () {
        e.target.select();
    }, 1);
}

}(document));
