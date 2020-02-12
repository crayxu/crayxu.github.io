'use strict';

function addFooterCopyright() {
    let currentdate = new Date();
    let footerCopyright = document.getElementById('footer-copyright');
    footerCopyright.innerHTML = `© <b>Cray Xu 2017-${currentdate.getFullYear()}. All rights reserved.</b>`;
}

addFooterCopyright();