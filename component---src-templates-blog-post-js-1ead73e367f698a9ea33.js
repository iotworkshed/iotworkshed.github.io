(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return l});n(167);var r=n(0),a=n.n(r),i=n(148),s=n(168),o=n.n(s),u=n(150),c=n(156);e.default=function(t){var e=t.data.wordpressPost,n=t.data.site.siteMetadata.title,r=t.pageContext,s=r.previous,l=r.next,d=o()(e.date).format("DD MMMM YYYY");return a.a.createElement(c.a,{title:n},a.a.createElement(u.a,{title:e.title,keywords:["gatsby","blog","wordpress"]}),a.a.createElement("section",{className:"section has-text-centered"},a.a.createElement("span",{className:"is-uppercase"},d," |"," ",e.categories.map(function(t,e){return a.a.createElement("span",{key:e},t.name)})),a.a.createElement("h1",{className:"title is-size-2 has-text-weight-bold is-bold-light",dangerouslySetInnerHTML:{__html:e.title}})),a.a.createElement("section",{className:"section"},a.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}})),a.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.a.createElement("li",null,s&&a.a.createElement(i.a,{to:"/"+s.slug,rel:"prev"},"← Previous")),a.a.createElement("li",null,l&&a.a.createElement(i.a,{to:"/"+l.slug,rel:"next"},"Next →"))))};var l="1530887507"},148:function(t,e,n){"use strict";n.d(e,"b",function(){return l});var r=n(0),a=n.n(r),i=n(4),s=n.n(i),o=n(32),u=n.n(o);n.d(e,"a",function(){return u.a});n(149);var c=a.a.createContext({}),l=function(t){return a.a.createElement(c.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},149:function(t,e,n){var r;t.exports=(r=n(152))&&r.default||r},150:function(t,e,n){"use strict";n(34);var r=n(151),a=n(0),i=n.n(a),s=n(4),o=n.n(s),u=n(157),c=n.n(u),l=n(148),d=function(t){return t.replace(/&#(\d+);/g,function(t){var e=t.dec;return String.fromCharCode(e)})};function h(t){var e=t.description,n=t.lang,a=t.meta,s=t.keywords,o=t.title;return i.a.createElement(l.b,{query:f,render:function(t){var r=e||t.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:d(o),titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:o},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:r}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(a)})},data:r})}h.defaultProps={lang:"en",meta:[],keywords:[]},h.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=h;var f="1025518380"},151:function(t){t.exports={data:{site:{siteMetadata:{title:"Lets Start Building",description:"Kick off a great IOT Project.",author:"@iotworkshed"}}}}},152:function(t,e,n){"use strict";n.r(e);n(33);var r=n(0),a=n.n(r),i=n(4),s=n.n(i),o=n(54),u=n(2),c=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(o.a,Object.assign({location:e,pageResources:n},n.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},e.default=c},153:function(t){t.exports={data:{allWordpressPage:{edges:[{node:{title:"About",wordpress_id:37,slug:"about"}}]}}}},154:function(t,e,n){t.exports=n.p+"static/logo-99d8f09c4af0bc6515cc3e5776003f13.svg"},155:function(t,e,n){"use strict";var r=n(0),a=n.n(r);e.a=function(){return a.a.createElement("footer",{className:"footer"},a.a.createElement("div",{className:"content has-text-centered"},a.a.createElement("p",null,"All rights reserved.")))}},156:function(t,e,n){"use strict";var r=n(0),a=n.n(r),i=n(4),s=n.n(i),o=(n(73),n(7)),u=n.n(o),c=n(153),l=n(148),d=(n(154),function(t){function e(){return t.apply(this,arguments)||this}u()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach(function(t){t.addEventListener("click",function(){var e=t.dataset.target,n=document.getElementById(e);t.classList.toggle("is-active"),n.classList.toggle("is-active")})})},n.render=function(){return a.a.createElement(l.b,{query:"1438032872",render:function(t){var e=t.allWordpressPage.edges;return a.a.createElement("nav",{className:"navbar is-primary",role:"navigation","aria-label":"main-navigation"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"navbar-brand"},a.a.createElement(l.a,{to:"/",className:"navbar-item",title:"IOT Work Shed"},"IOT WORK SHED"),a.a.createElement("div",{className:"navbar-burger burger","data-target":"navMenu"},a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null))),a.a.createElement("div",{id:"navMenu",className:"navbar-menu"},a.a.createElement("div",{className:"navbar-end has-text-centered"},e.map(function(t){return a.a.createElement(l.a,{className:"navbar-item",to:"/"+t.node.slug,key:t.node.wordpress_id},t.node.title)})))))},data:c})},e}(r.Component)),h=n(155),f=(n(158),function(t){var e=t.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(d,null),a.a.createElement("section",{className:"section"},a.a.createElement("main",{className:"container"},e)),a.a.createElement(h.a,null))});f.propTypes={children:s.a.node.isRequired};e.a=f},167:function(t,e,n){var r=n(25).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||n(17)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},168:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",a="day",i="week",s="month",o="year",u=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,c=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},d={padStart:l,padZoneStr:function(t){var e=Math.abs(t),n=Math.floor(e/60),r=e%60;return(t<=0?"+":"-")+l(n,2,"0")+":"+l(r,2,"0")},monthDiff:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,"months"),a=e-r<0,i=t.clone().add(n+(a?-1:1),"months");return Number(-(n+(e-r)/(a?r-i:i-r))||0)},absFloor:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},prettyUnit:function(u){return{M:s,y:o,w:i,d:a,h:r,m:n,s:e,ms:t}[u]||String(u||"").toLowerCase().replace(/s$/,"")},isUndefined:function(t){return void 0===t}},h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f="en",m={};m[f]=h;var p=function(t){return t instanceof M},g=function(t,e,n){var r;if(!t)return null;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var a=t.name;m[a]=t,r=a}return n||(f=r),r},y=function(t,e){if(p(t))return t.clone();var n=e?"string"==typeof e?{format:e}:e:{};return n.date=t,new M(n)},$=function(t,e){return y(t,{locale:e.$L})},v=d;v.parseLocale=g,v.isDayjs=p,v.wrapper=$;var M=function(){function l(t){this.parse(t)}var d=l.prototype;return d.parse=function(t){var e,n;this.$d=null===(e=t.date)?new Date(NaN):v.isUndefined(e)?new Date:e instanceof Date?e:"string"==typeof e&&/.*[^Z]$/i.test(e)&&(n=e.match(u))?new Date(n[1],n[2]-1,n[3]||1,n[4]||0,n[5]||0,n[6]||0,n[7]||0):new Date(e),this.init(t)},d.init=function(t){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds(),this.$L=this.$L||g(t.locale,null,!0)||f},d.$utils=function(){return v},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return y(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<y(t)},d.year=function(){return this.$y},d.month=function(){return this.$M},d.day=function(){return this.$W},d.date=function(){return this.$D},d.hour=function(){return this.$H},d.minute=function(){return this.$m},d.second=function(){return this.$s},d.millisecond=function(){return this.$ms},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,u){var c=this,l=!!v.isUndefined(u)||u,d=v.prettyUnit(t),h=function(t,e){var n=$(new Date(c.$y,e,t),c);return l?n:n.endOf(a)},f=function(t,e){return $(c.toDate()[t].apply(c.toDate(),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,p=this.$M,g=this.$D;switch(d){case o:return l?h(1,0):h(31,11);case s:return l?h(1,p):h(0,p+1);case i:var y=this.$locale().weekStart||0,M=(m<y?m+7:m)-y;return h(l?g-M:g+(6-M),p);case a:case"date":return f("setHours",0);case r:return f("setMinutes",1);case n:return f("setSeconds",2);case e:return f("setMilliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(i,u){var c,l=v.prettyUnit(i),d=(c={},c[a]="setDate",c.date="setDate",c[s]="setMonth",c[o]="setFullYear",c[r]="setHours",c[n]="setMinutes",c[e]="setSeconds",c[t]="setMilliseconds",c)[l],h=l===a?this.$D+(u-this.$W):u;return this.$d[d]&&this.$d[d](h),this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.add=function(t,u){var c,l=this;t=Number(t);var d=v.prettyUnit(u),h=function(e,n){var r=l.set("date",1).set(e,n+t);return r.set("date",Math.min(l.$D,r.daysInMonth()))},f=function(e){var n=new Date(l.$d);return n.setDate(n.getDate()+e*t),$(n,l)};if(d===s)return h(s,this.$M);if(d===o)return h(o,this.$y);if(d===a)return f(1);if(d===i)return f(7);var m=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[d]||1,p=this.valueOf()+t*m;return $(p,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=v.padZoneStr(this.$d.getTimezoneOffset()),a=this.$locale(),i=a.weekdays,s=a.months,o=function(t,e,n,r){return t&&t[e]||n[e].substr(0,r)},u=function(t){return 0===e.$H?12:v.padStart(e.$H<13?e.$H:e.$H-12,"hh"===t?2:1,"0")},l={YY:String(this.$y).slice(-2),YYYY:String(this.$y),M:String(this.$M+1),MM:v.padStart(this.$M+1,2,"0"),MMM:o(a.monthsShort,this.$M,s,3),MMMM:s[this.$M],D:String(this.$D),DD:v.padStart(this.$D,2,"0"),d:String(this.$W),dd:o(a.weekdaysMin,this.$W,i,2),ddd:o(a.weekdaysShort,this.$W,i,3),dddd:i[this.$W],H:String(this.$H),HH:v.padStart(this.$H,2,"0"),h:u("h"),hh:u("hh"),a:this.$H<12?"am":"pm",A:this.$H<12?"AM":"PM",m:String(this.$m),mm:v.padStart(this.$m,2,"0"),s:String(this.$s),ss:v.padStart(this.$s,2,"0"),SSS:v.padStart(this.$ms,3,"0"),Z:r};return n.replace(c,function(t){return t.indexOf("[")>-1?t.replace(/\[|\]/g,""):l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,u,c){var l,d=v.prettyUnit(u),h=y(t),f=6e4*(h.utcOffset()-this.utcOffset()),m=this-h,p=v.monthDiff(this,h);return p=(l={},l[o]=p/12,l[s]=p,l.quarter=p/3,l[i]=(m-f)/6048e5,l[a]=(m-f)/864e5,l[r]=m/36e5,l[n]=m/6e4,l[e]=m/1e3,l)[d]||m,c?p:v.absFloor(p)},d.daysInMonth=function(){return this.endOf(s).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,e){var n=this.clone();return n.$L=g(t,e,!0),n},d.clone=function(){return $(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.$d.toISOString()},d.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},d.toString=function(){return this.$d.toUTCString()},l}();return y.prototype=M.prototype,y.extend=function(t,e){return t(e,M,y),y},y.locale=g,y.isDayjs=p,y.unix=function(t){return y(1e3*t)},y.en=m[f],y}()}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-1ead73e367f698a9ea33.js.map