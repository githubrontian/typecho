!function(e,l){var m,s,t=e.html5||{},r=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,c=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,n="_html5shiv",a=0,o={};function h(){var e=f.elements;return"string"==typeof e?e.split(" "):e}function u(e){var t=o[e[n]];return t||(t={},a++,e[n]=a,o[a]=t),t}function d(e,t,n){return t=t||l,s?t.createElement(e):(a=(n=n||u(t)).cache[e]?n.cache[e].cloneNode():c.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren&&!r.test(e)?n.frag.appendChild(a):a;var a}function i(e){var t,n,a,r,c,o,i=u(e=e||l);return!f.shivCSS||m||i.hasCSS||(i.hasCSS=(n="article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}",a=(t=e).createElement("p"),r=t.getElementsByTagName("head")[0]||t.documentElement,a.innerHTML="x<style>"+n+"</style>",!!r.insertBefore(a.lastChild,r.firstChild))),s||(c=e,(o=i).cache||(o.cache={},o.createElem=c.createElement,o.createFrag=c.createDocumentFragment,o.frag=o.createFrag()),c.createElement=function(e){return f.shivMethods?d(e,c,o):o.createElem(e)},c.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/[\w\-]+/g,function(e){return o.createElem(e),o.frag.createElement(e),'c("'+e+'")'})+");return n}")(f,o.frag)),e}!function(){try{var e=l.createElement("a");e.innerHTML="<xyz></xyz>",m="hidden"in e,s=1==e.childNodes.length||function(){l.createElement("a");var e=l.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){s=m=!0}}();var f={elements:t.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==t.shivCSS,supportsUnknownElements:s,shivMethods:!1!==t.shivMethods,type:"default",shivDocument:i,createElement:d,createDocumentFragment:function(e,t){if(e=e||l,s)return e.createDocumentFragment();for(var n=(t=t||u(e)).frag.cloneNode(),a=0,r=h(),c=r.length;a<c;a++)n.createElement(r[a]);return n}};e.html5=f,i(l)}(this,document);