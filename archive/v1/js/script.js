 window.onload = () => {

     // Display an alert if viewing browser is not chrome.
     // https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome/13348618#13348618
     // IE11 now returns undefined again for window.chrome
     // Opera 30 outputs true for window.chrome, but needs to check if window.opr is not undefined
     // new IE Edge outputs to true now for window.chrome
     // and if not iOS Chrome check
     let isChromium = window.chrome;
     let winNav = window.navigator;
     let vendorName = winNav.vendor;
     let isOpera = typeof window.opr !== "undefined";
     let isIEedge = winNav.userAgent.indexOf("Edge") > -1;
     let isIOSChrome = winNav.userAgent.match("CriOS");

     let isChrome = isChromium !== null && typeof isChromium !== "undefined" && vendorName === "Google Inc." && isOpera === false && isIEedge === false;
     if (isIOSChrome) {
         // is Google Chrome on IOS
     } else if (isChrome) {
         // is Google Chrome
     } else {
         // is not google chrome
         alert("Please use Chrome for optimal layout or to print it as PDF in A4 format.")
     }

     document.getElementById("print-btn").addEventListener('click', () => window.print());

 }