// Underscore.js 1.3.3
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){var s=this,L=s._,p={},k=Array.prototype,q=Object.prototype,M=k.push,i=k.slice,N=k.unshift,m=q.toString,O=q.hasOwnProperty,z=k.forEach,A=k.map,B=k.reduce,C=k.reduceRight,D=k.filter,E=k.every,F=k.some,r=k.indexOf,G=k.lastIndexOf,q=Array.isArray,P=Object.keys,t=Function.prototype.bind,b=function(a){return new l(a)};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports._=b):s._=b;b.VERSION="1.3.3";var j=b.each=b.forEach=function(a,c,
d){if(a!=null)if(z&&a.forEach===z)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(c.call(d,a[e],e,a)===p)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===p)break};b.map=b.collect=function(a,c,d){var b=[];if(a==null)return b;if(A&&a.map===A)return a.map(c,d);j(a,function(a,g,h){b[b.length]=c.call(d,a,g,h)});return b};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(B&&a.reduce===B){e&&(c=b.bind(c,e));return f?a.reduce(c,
d):a.reduce(c)}j(a,function(a,b,i){if(f)d=c.call(e,d,a,b,i);else{d=a;f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(C&&a.reduceRight===C){e&&(c=b.bind(c,e));return f?a.reduceRight(c,d):a.reduceRight(c)}var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=function(a,c,b){var e;H(a,function(a,g,h){if(c.call(b,a,g,h)){e=
a;return true}});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(D&&a.filter===D)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(E&&a.every===E)return a.every(c,b);j(a,function(a,g,h){if(!(e=e&&c.call(b,a,g,h)))return p});return!!e};var H=b.some=b.any=
function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(F&&a.some===F)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return p});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;if(r&&a.indexOf===r)return a.indexOf(c)!=-1;return b=H(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};
b.max=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&(e={value:a,computed:b})});
return e.value};b.shuffle=function(a){var c,b=0,e=[];j(a,function(a){c=Math.floor(Math.random()*++b);e[b-1]=e[c];e[c]=a});return e};b.sortBy=function(a,c,d){var e=I(a,c);return b.pluck(b.map(a,function(a,c,b){return{value:a,criteria:e.call(d,a,c,b)}}).sort(function(a,c){var b=a.criteria,d=c.criteria;return b===void 0?1:d===void 0?-1:b<d?-1:b>d?1:0}),"value")};var I=function(a,c){return b.isFunction(c)?c:function(a){return a[c]}},J=function(a,c,b){var e={},f=I(a,c);j(a,function(a,c){var i=f(a,c);b(e,
i,a)});return e};b.groupBy=function(a,c){return J(a,c,function(a,c,b){(a[c]||(a[c]=[])).push(b)})};b.countBy=function(a,c){return J(a,c,function(a,c){a[c]||(a[c]=0);a[c]++})};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var c=d(c),e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<c?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:b.isArray(a)||b.isArguments(a)?i.call(a):a.toArray&&b.isFunction(a.toArray)?a.toArray():b.values(a)};b.size=function(a){return b.isArray(a)?a.length:b.keys(a).length};
b.first=b.head=b.take=function(a,c,b){return c!=null&&!b?i.call(a,0,c):a[0]};b.initial=function(a,c,b){return i.call(a,0,a.length-(c==null||b?1:c))};b.last=function(a,c,b){return c!=null&&!b?i.call(a,Math.max(a.length-c,0)):a[a.length-1]};b.rest=b.tail=function(a,c,b){return i.call(a,c==null||b?1:c)};b.compact=function(a){return b.filter(a,function(a){return!!a})};var n=function(a,c,d){j(a,function(a){b.isArray(a)?c?M.apply(d,a):n(a,c,d):d.push(a)});return d};b.flatten=function(a,c){return n(a,c,
[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,e=[];b.reduce(d,function(d,g,h){if(c?b.last(d)!==g||!d.length:!b.include(d,g)){d.push(g);e.push(a[h])}return d},[]);return e};b.union=function(){return b.uniq(n(arguments,true,[]))};b.intersection=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=n(i.call(arguments,
1),true,[]);return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.zipObject=function(a,c){for(var b={},e=0,f=a.length;e<f;e++)b[a[e]]=c[e];return b};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d){d=b.sortedIndex(a,c);return a[d]===c?d:-1}if(r&&a.indexOf===r)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(a[d]===c)return d;return-1};b.lastIndexOf=function(a,
c){if(a==null)return-1;if(G&&a.lastIndexOf===G)return a.lastIndexOf(c);for(var b=a.length;b--;)if(a[b]===c)return b;return-1};b.range=function(a,c,b){if(arguments.length<=1){c=a||0;a=0}for(var b=arguments[2]||1,e=Math.max(Math.ceil((c-a)/b),0),f=0,g=Array(e);f<e;){g[f++]=a;a=a+b}return g};var K=function(){};b.bind=function(a,c){var d,e;if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,
e.concat(i.call(arguments)));K.prototype=a.prototype;var b=new K,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,c){var b=i.call(arguments,2);return setTimeout(function(){return a.apply(null,
b)},c)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i,j=b.debounce(function(){h=g=false},c);return function(){d=this;e=arguments;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);j()},c));if(g)h=true;else{g=true;i=a.apply(d,e)}j();return i}};b.debounce=function(a,b,d){var e;return function(){var f=this,g=arguments,h=d&&!e;clearTimeout(e);e=setTimeout(function(){e=null;d||a.apply(f,g)},b);h&&a.apply(f,g)}};b.once=function(a){var b=
false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=P||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,
d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.pick=function(a){var b={};j(n(i.call(arguments,1),true,[]),function(d){d in a&&(b[d]=a[d])});return b};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?
a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};var u=function(a,c,d){if(a===c)return a!==0||1/a==1/c;if(a==null||c==null)return a===c;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=m.call(a);if(e!=m.call(c))return false;switch(e){case "[object String]":return a==""+c;case "[object Number]":return a!=+a?c!=+c:a==0?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==
+c;case "[object RegExp]":return a.source==c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if(typeof a!="object"||typeof c!="object")return false;for(var f=d.length;f--;)if(d[f]==a)return true;d.push(a);var f=0,g=true;if(e=="[object Array]"){f=a.length;if(g=f==c.length)for(;f--;)if(!(g=f in a==f in c&&u(a[f],c[f],d)))break}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return false;for(var h in a)if(b.has(a,h)){f++;if(!(g=b.has(c,h)&&
u(a[h],c[h],d)))break}if(g){for(h in c)if(b.has(c,h)&&!f--)break;g=!f}}d.pop();return g};b.isEqual=function(a,b){return u(a,b,[])};b.isEmpty=function(a){if(a==null)return true;if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=q||function(a){return m.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};j("Arguments,Function,String,Number,Date,RegExp".split(","),function(a){b["is"+
a]=function(b){return m.call(b)=="[object "+a+"]"}});b.isArguments(arguments)||(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))});b.isFinite=function(a){return b.isNumber(a)&&isFinite(a)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||m.call(a)=="[object Boolean]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,b){return O.call(a,b)};b.noConflict=function(){s._=L;return this};b.identity=function(a){return a};
b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};var Q={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"},R=/[&<>"'\/]/g;b.escape=function(a){return(""+a).replace(R,function(a){return Q[a]})};b.result=function(a,c){if(a==null)return null;var d=a[c];return b.isFunction(d)?d.call(a):d};b.mixin=function(a){j(b.functions(a),function(c){S(c,b[c]=a[c])})};var T=0;b.uniqueId=function(a){var b=T++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,
escape:/<%-([\s\S]+?)%>/g};var v=/.^/,o={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"},w;for(w in o)o[o[w]]=w;var U=/\\|'|\r|\n|\t|\u2028|\u2029/g,V=/\\(\\|'|r|n|t|u2028|u2029)/g,x=function(a){return a.replace(V,function(a,b){return o[b]})};b.template=function(a,c,d){d=b.defaults(d||{},b.templateSettings);a="__p+='"+a.replace(U,function(a){return"\\"+o[a]}).replace(d.escape||v,function(a,b){return"'+\n((__t=("+x(b)+"))==null?'':_.escape(__t))+\n'"}).replace(d.interpolate||
v,function(a,b){return"'+\n((__t=("+x(b)+"))==null?'':__t)+\n'"}).replace(d.evaluate||v,function(a,b){return"';\n"+x(b)+"\n__p+='"})+"';\n";d.variable||(a="with(obj||{}){\n"+a+"}\n");var a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'')};\n"+a+"return __p;\n",e=new Function(d.variable||"obj","_",a);if(c)return e(c,b);c=function(a){return e.call(this,a,b)};c.source="function("+(d.variable||"obj")+"){\n"+a+"}";return c};b.chain=function(a){return b(a).chain()};
var l=function(a){this._wrapped=a};b.prototype=l.prototype;var y=function(a,c){return c?b(a).chain():a},S=function(a,c){l.prototype[a]=function(){var a=i.call(arguments);N.call(a,this._wrapped);return y(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];l.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);(a=="shift"||a=="splice")&&d.length===0&&delete d[0];return y(d,this._chain)}});j(["concat","join","slice"],function(a){var b=
k[a];l.prototype[a]=function(){return y(b.apply(this._wrapped,arguments),this._chain)}});l.prototype.chain=function(){this._chain=true;return this};l.prototype.value=function(){return this._wrapped}}).call(this);
