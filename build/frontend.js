(()=>{const e=document.createElement("script");function o(e){e.target.href&&new AdobeDC.View({clientId:pdf_embed.apiKey}).previewFile({content:{location:{url:e.target.href}},metaData:{fileName:new URL(e.target.href).pathname.split("/").pop()}},{embedMode:"LIGHT_BOX"})}e.src="https://acrobatservices.adobe.com/view-sdk/viewer.js",document.head.appendChild(e),document.addEventListener("adobe_dc_view_sdk.ready",(function(){const e=document.querySelectorAll(".wp-block-tropicalista-pdfembed"),t=navigator.language||navigator.userLanguage;for(let o=0;o<e.length;o++){const a=e[o].dataset;new AdobeDC.View({clientId:a.apikey,divId:e[o].id,locale:t}).previewFile({content:{location:{url:a.mediaurl}},metaData:{fileName:a.filename}},{embedMode:a.embedmode,showDownloadPDF:JSON.parse(a.showdownloadpdf),showPrintPDF:JSON.parse(a.showprintpdf),showPageControls:JSON.parse(a.showpagecontrols),showFullScreen:JSON.parse(a.showfullscreen),dockPageControls:JSON.parse(a.dockpagecontrols),showAnnotationTools:JSON.parse(a.showannotationtools),enableFormFilling:JSON.parse(a.enableformfilling)})}const a=document.querySelectorAll(".embedPdf>a, a.embedPdf");for(let e=0;e<a.length;e++)a[e].onclick=function(e){"pdf"===e.target.href.split(/[#?]/)[0].split(".").pop().trim()&&(e.preventDefault(),o(e))}}))})();