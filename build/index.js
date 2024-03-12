(()=>{var e,t={384:(e,t,o)=>{"use strict";const a=window.wp.blocks,l=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":3,"name":"tropicalista/pdfembed","version":"0.3.5","title":"Embed Pdf","category":"embed","icon":"pdf","description":"PDF embedder with official Adobe Embed API.","supports":{"html":false,"anchor":true},"attributes":{"id":{"type":"string","source":"attribute","attribute":"id"},"blockId":{"type":"string"},"apiKey":{"type":"string","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-api-key"},"width":{"type":"number"},"height":{"type":"string","default":"500px"},"mediaUrl":{"type":"string","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-media-url"},"fileName":{"type":"string","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-file-name"},"embedMode":{"type":"string","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-embed-mode"},"showDownloadPDF":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-show-download-pdf","default":true},"dockPageControls":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-dock-page-controls","default":false},"showPrintPDF":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-show-print-pdf","default":true},"showFullScreen":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-show-full-screen","default":true},"showPageControls":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-show-page-controls","default":true},"showZoomControl":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-show-zoom-control","default":true},"showThumbnails":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-show-thumbnails","default":true},"showBookmarks":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-show-bookmarks","default":true},"defaultViewMode":{"type":"string","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-default-view-mode","default":"FIT_PAGE"},"enableFormFilling":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-enable-form-filling","default":true},"showAnnotationTools":{"type":"boolean","source":"attribute","selector":"div.wp-block-tropicalista-pdfembed","attribute":"data-show-annotation-tools","default":true}},"textdomain":"pdf-embed","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":["file:./view.js","pdf-embed-api"],"render":"file:./render.php"}'),r=window.React,n=window.wp.i18n,i=window.wp.element,d=window.wp.components,s=window.wp.blockEditor,c=window.wp.coreData,p=window.wp.data;function b({attributes:e,setAttributes:t}){const[o]=(0,c.useEntityProp)("root","site","pdf_embed_api_key"),[a]=(0,c.useEntityProp)("root","site","url"),{editEntityRecord:l,saveEditedEntityRecord:s}=(0,p.useDispatch)(c.store);return(0,r.createElement)(i.Fragment,null,(0,r.createElement)(d.__experimentalInputControl,{label:(0,n.__)("API Key","pdf-embed"),help:(0,i.createInterpolateElement)((0,n.__)("Get your free API key on <a>Adobe Official site</a>.","pdf-embed"),{a:(0,r.createElement)(d.ExternalLink,{href:"https://www.adobe.io/apis/documentcloud/dcsdk/pdf-embed.html",target:"_blank",rel:"noreferrer"})}),value:o,onChange:e=>{l("root","site",void 0,{pdf_embed_api_key:e})},suffix:(0,r.createElement)(d.Button,{onClick:()=>(t({apiKey:o}),void s("root","site",void 0,{pdf_embed_api_key:o})),isPrimary:!0},(0,n.__)("Save"))}))}function u(e){const{attributes:t,setAttributes:o}=e,{showDownloadPDF:a,showPrintPDF:l,showFullScreen:c,showZoomControl:p,embedMode:u,height:m,showAnnotationTools:f,enableFormFilling:h,defaultViewMode:w,showBookmarks:g,showThumbnails:v,dockPageControls:_}=t;return(0,r.createElement)(i.Fragment,null,(0,r.createElement)(d.PanelBody,{title:(0,n.__)("Settings","pdf-embed"),initialOpen:!0},(0,r.createElement)(b,{...e}),(0,r.createElement)("hr",null),(0,r.createElement)(d.SelectControl,{label:(0,n.__)("Embed mode","pdf-embed"),value:u||"FULL_WINDOW",options:[{label:(0,n.__)("Full Window","pdf-embed"),value:"FULL_WINDOW"},{label:(0,n.__)("Sized Container","pdf-embed"),value:"SIZED_CONTAINER"},{label:(0,n.__)("Inline","pdf-embed"),value:"IN_LINE"}],onChange:e=>o({embedMode:e})}),(0,r.createElement)(d.SelectControl,{label:(0,n.__)("Default view mode","pdf-embed"),value:w,options:[{label:(0,n.__)("Default","pdf-embed"),value:""},{label:(0,n.__)("Fit Page","pdf-embed"),value:"FIT_PAGE"},{label:(0,n.__)("Fit Width","pdf-embed"),value:"FIT_WIDTH"},{label:(0,n.__)("Two Column Fit Page","pdf-embed"),value:"TWO_COLUMN_FIT_PAGE"},{label:(0,n.__)("Two Column","pdf-embed"),value:"TWO_COLUMN"}],onChange:e=>o({defaultViewMode:e})}),(0,r.createElement)(d.ToggleControl,{label:(0,n.__)("Show Download PDF","pdf-embed"),checked:a,onChange:e=>o({showDownloadPDF:e})}),(0,r.createElement)(d.ToggleControl,{label:(0,n.__)("Show Print PDF","pdf-embed"),checked:l,onChange:e=>o({showPrintPDF:e})}),(0,r.createElement)(d.ToggleControl,{label:(0,n.__)("Show FullScreen Mode","pdf-embed"),checked:c,onChange:e=>o({showFullScreen:e})}),(0,r.createElement)(d.ToggleControl,{label:(0,n.__)("Show Zoom Control","pdf-embed"),checked:p,onChange:e=>o({showZoomControl:e})}),(0,r.createElement)(d.ToggleControl,{label:(0,n.__)("Show Thumbnails","pdf-embed"),checked:v,onChange:e=>o({showThumbnails:e})}),(0,r.createElement)(d.ToggleControl,{label:(0,n.__)("Show Bookmarks","pdf-embed"),checked:g,onChange:e=>o({showBookmarks:e})}),(0,r.createElement)(d.ToggleControl,{label:(0,n.__)("Show Annotation Tools","pdf-embed"),checked:f,onChange:e=>o({showAnnotationTools:e})}),(0,r.createElement)(d.ToggleControl,{label:(0,n.__)("Dock Page Controls","pdf-embed"),checked:_,onChange:e=>o({dockPageControls:e})}),(0,r.createElement)(d.ToggleControl,{label:(0,n.__)("Enable Form Filling","pdf-embed"),checked:h,onChange:e=>o({enableFormFilling:e})}),"IN_LINE"!==u&&(0,r.createElement)(d.BaseControl,{help:(0,n.__)("Set the height of PDF.","pdf-embed")},(0,r.createElement)(s.HeightControl,{label:(0,n.__)("Height","pdf-embed"),beforeIcon:"image-flip-vertical",value:m,onChange:e=>o({height:e})}))))}const m=window.wp.compose,f=e=>{const{attributes:t,setAttributes:o,isSelected:a,clientId:l}=e,{mediaUrl:c,height:p,fileName:b,apiKey:u}=t,h=(0,m.useInstanceId)(f),[w,g]=(0,i.useState)(!1),v=(0,m.useRefEffect)((e=>{const{ownerDocument:t}=e,{defaultView:o}=t;if(e.ownerDocument.addEventListener("adobe_dc_view_sdk.ready",(function(){o.AdobeDC&&_()})),c&&o.AdobeDC&&_(),!o.AdobeDC){const e=o.document.createElement("script");e.src="https://acrobatservices.adobe.com/view-sdk/viewer.js",o.document.head.appendChild(e)}}),[t]),_=()=>{new window.AdobeDC.View({clientId:u,divId:l}).previewFile({content:{location:{url:c}},metaData:{fileName:b}},t)},k=(0,s.useBlockProps)({id:h}),y=e=>{e.id&&o({mediaUrl:e.url,fileName:e.filename?e.filename:e.title})};return(0,i.useEffect)((()=>{a||g(!1)}),[a]),c?(0,r.createElement)("div",{...k},(0,r.createElement)(s.BlockControls,null,c&&(0,r.createElement)(d.ToolbarGroup,null,(0,r.createElement)(s.MediaReplaceFlow,{mediaURL:c,allowedTypes:["application/pdf"],accept:".pdf",onSelect:e=>y(e)}))),(0,r.createElement)("div",{id:l,ref:v,style:{height:p},tabIndex:"-1"}),!w&&(0,r.createElement)("div",{className:"block-library-embed__interactive-overlay",onMouseUp:()=>{g(!0)}})):(0,r.createElement)("div",{...k},(0,r.createElement)(s.MediaPlaceholder,{icon:"pdf",labels:{title:(0,n.__)("PDF"),instructions:(0,n.__)("Upload a PDF file, pick one from your media library, or add one with a URL.","pdf-embed")},className:"block-image",onSelect:y,onSelectURL:e=>{o({mediaUrl:e,fileName:new URL(e).pathname.split("/").pop()})},accept:".pdf",allowedTypes:["application/pdf"]}))},h=window.wp.hooks;var w=o(485),g=o.n(w);const v=["core/button","generateblocks/button"],_=(0,m.createHigherOrderComponent)((e=>t=>{if(!v.includes(t.name))return(0,r.createElement)(e,{...t});const{attributes:o,setAttributes:a}=t;return(0,r.createElement)(i.Fragment,null,(0,r.createElement)(e,{...t}),(0,r.createElement)(s.BlockControls,null,!!o.url&&"pdf"===o.url.split(/[#?]/)[0].split(".").pop().trim()&&(0,r.createElement)(d.ToolbarGroup,null,(0,r.createElement)(d.ToolbarButton,{label:(0,n.__)("Open pdf in lightbox","pdf-embed"),icon:"pdf",onClick:()=>{a({embedPdf:!o.embedPdf})},isPressed:o.embedPdf}))))}),"withSpacingControl");(0,h.addFilter)("editor.BlockEdit","extend-block-example/with-spacing-control",_);const k=["core/button"];(0,h.addFilter)("blocks.registerBlockType","tropicalista/pdf-embed",(function(e,t){return k.includes(t)?(void 0!==e.attributes&&(e.attributes=Object.assign(e.attributes,{embedPdf:{type:"boolean",default:!1}})),e):e})),(0,h.addFilter)("blocks.getSaveContent.extraProps","tropicalista/pdf-embed",(function(e,t,o){if(!v.includes(t.name))return e;const{embedPdf:a}=o,{className:l}=e;return Object.assign({},e,{className:g()(l,{embedPdf:a})})}));const y=[{blockAttributes:{id:{type:"string",source:"attribute",attribute:"id"},blockId:{type:"string"},apiKey:{type:"string"},width:{type:"number"},height:{type:"string",default:"500px"},mediaUrl:{type:"string"},fileName:{type:"string",default:"My PDF"},embedMode:{type:"string",default:""},showDownloadPDF:{type:"boolean",default:!0},showPrintPDF:{type:"boolean",default:!0},showFullScreen:{type:"boolean",default:!0},showPageControls:{type:"boolean",default:!0},dockPageControls:{type:"boolean",default:!0},enableFormFilling:{type:"boolean",default:!0},showAnnotationTools:{type:"boolean",default:!0}},supports:{html:!1,anchor:!0},save({attributes:e}){const{blockId:t,mediaUrl:o,embedMode:a,height:l,apiKey:n,showPrintPDF:i,showDownloadPDF:d,showPageControls:c,showFullScreen:p,dockPageControls:b,fileName:u,showAnnotationTools:m,enableFormFilling:f}=e;return(0,r.createElement)("div",{id:t,...s.useBlockProps.save(),style:{height:l},"data-apiKey":n,"data-fileName":u,"data-mediaUrl":o,"data-embedMode":a,"data-showDownloadPDF":d,"data-showPrintPDF":i,"data-showPageControls":c,"data-showFullScreen":p,"data-dockPageControls":b,"data-showAnnotationTools":m,"data-enableFormFilling":f})}}];(0,a.registerBlockType)(l,{deprecated:y,edit:function(e){const{attributes:t}=e,{apiKey:o}=t,a=(0,s.useBlockProps)();return o?(0,r.createElement)("div",{...a},(0,r.createElement)(s.InspectorControls,null,(0,r.createElement)(u,{...e})),(0,r.createElement)(f,{...e})):(0,r.createElement)("div",{...a},(0,r.createElement)(d.Placeholder,{icon:"pdf",instructions:(0,n.__)("Please insert a free api Key here or in the settings panel on the right.","pdf-embed"),label:(0,n.__)("PDF Embed","pdf-embed")},(0,r.createElement)(b,{...e})))},save:function({attributes:e,className:t}){const{mediaUrl:o,embedMode:a,height:l,apiKey:n,showPrintPDF:i,showDownloadPDF:d,showPageControls:c,showBookmarks:p,showThumbnails:b,showFullScreen:u,defaultViewMode:m,showZoomControl:f,fileName:h,showAnnotationTools:w,enableFormFilling:g,dockPageControls:v}=e;return(0,r.createElement)("div",{...s.useBlockProps.save({className:t}),style:{height:l},"data-api-key":n,"data-file-name":h,"data-media-url":o,"data-embed-mode":a,"data-dock-page-controls":v||void 0,"data-show-download-PDF":d||void 0,"data-show-print-PDF":i||void 0,"data-show-page-controls":c||void 0,"data-show-thumbnails":b||void 0,"data-show-bookmarks":p||void 0,"data-show-zoom-control":f||void 0,"data-show-full-screen":u||void 0,"data-default-view-mode":m||void 0,"data-show-annotation-tools":w||void 0,"data-enable-form-filling":g||void 0})}})},485:(e,t)=>{var o;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)){if(o.length){var n=l.apply(null,o);n&&e.push(n)}}else if("object"===r){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var i in o)a.call(o,i)&&o[i]&&e.push(i)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(o=function(){return l}.apply(t,[]))||(e.exports=o)}()}},o={};function a(e){var l=o[e];if(void 0!==l)return l.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,o,l,r)=>{if(!o){var n=1/0;for(c=0;c<e.length;c++){for(var[o,l,r]=e[c],i=!0,d=0;d<o.length;d++)(!1&r||n>=r)&&Object.keys(a.O).every((e=>a.O[e](o[d])))?o.splice(d--,1):(i=!1,r<n&&(n=r));if(i){e.splice(c--,1);var s=l();void 0!==s&&(t=s)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,l,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};a.O.j=t=>0===e[t];var t=(t,o)=>{var l,r,[n,i,d]=o,s=0;if(n.some((t=>0!==e[t]))){for(l in i)a.o(i,l)&&(a.m[l]=i[l]);if(d)var c=d(a)}for(t&&t(o);s<n.length;s++)r=n[s],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},o=globalThis.webpackChunkadobe_pdf=globalThis.webpackChunkadobe_pdf||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var l=a.O(void 0,[350],(()=>a(384)));l=a.O(l)})();