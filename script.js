'use strict';

function addFooterCopyright() {
    let currentdate = new Date();
    let footerCopyright = document.getElementById('footer-copyright');
    footerCopyright.innerHTML = `© <b>Cray Xu 2017-${currentdate.getFullYear()}. All rights reserved.</b>`;
}

function addFooterCopyrightUpdateDate() {
    let currentdate = new Date();
    let footerCopyright = document.getElementById('footer-copyright-update-date');
    let m = currentdate.getMonth();
    let m_str = "";
    switch (m) {
        case 0:
            m_str = "Jan";
            break;
        case 1:
            m_str = "Feb";
            break;
        case 2:
            m_str = "Mar";
            break;
        case 3:
            m_str = "Apr";
            break;
        case 4:
            m_str = "May";
            break;
        case 5:
            m_str = "Jun";
            break;
        case 6:
            m_str = "Jul";
            break;
        case 7:
            m_str = "Aug";
            break;
        case 8:
            m_str = "Sep";
            break;
        case 9:
            m_str = "Oct";
            break;
        case 10:
            m_str = "Nov";
            break;
        case 11:
            m_str = "Dec";
            break;
    }
    footerCopyright.innerHTML = `Last Update: ` + ` ${m_str}` + ` ${currentdate.getDate()},` + ` ${currentdate.getFullYear()}`;
}

addFooterCopyright();
// addFooterCopyrightUpdateDate();
let footerCopyright = document.getElementById('footer-copyright-update-date');
footerCopyright.innerHTML = "Last Update: Jul 8, 2021";
