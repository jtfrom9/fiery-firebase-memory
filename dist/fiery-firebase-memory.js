!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";var n,i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.SDK_VERSION="FFM-0.0.1",t.apps=[],t.initializeApp=function(e,r){var n=new t.app.App(e,r);return o[n.name]=n,t.apps.push(n),n};var e=function(){function t(t){this._kept=!1,this._resolve=[],this._reject=[],t&&t(this.resolve.bind(this),this.reject.bind(this))}return t.prototype.resolve=function(t){return this._kept||(this._kept=!0,this._resolved=t,this._resolve.forEach(function(e){return e(t)}),this._resolve.length=0,this._reject.length=0),this},t.prototype.reject=function(t){return this._kept||(this._kept=!0,this._error=t,this._reject.forEach(function(e){return e(t)}),this._reject.length=0,this._resolve.length=0),this},t.prototype.then=function(t){return this._kept?this._error||t(this._resolved):this._resolve.push(t),this},t.prototype.catch=function(t){return this._kept?this._error&&t(this._error):this._reject.push(t),this},t}();function r(t){return o[t||s]}function n(e){var r=t.app(e);return new t.firestore.Firestore(r)}t.Promise=e,t.app=r,function(e){var r=function(){function e(e,r){this.options=e,this.name=r||s,this.firebase_=t}return e.prototype.auth=function(){throw"firebase.app.App.auth is not supported"},e.prototype.database=function(){throw"firebase.app.App.database is not supported"},e.prototype.delete=function(){throw"firebase.app.App.delete is not supported"},e.prototype.messaging=function(){throw"firebase.app.App.messaging is not supported"},e.prototype.storage=function(){throw"firebase.app.App.storage is not supported"},e}();e.App=r}(r=t.app||(t.app={})),t.firestore=n,function(e){var r=function(){function t(t){this.app=t,this._docs=Object.create(null),this._collections=Object.create(null),this._listeners=Object.create(null)}return t.prototype.batch=function(){throw"firebase.firestore.Firestore.batch is not supported"},t.prototype.collection=function(t){return new y(this,t)},t.prototype.doc=function(t){return new v(this,t)},t.prototype.disableNetwork=function(){throw"firebase.firestore.Firestore.disableNetwork is not supported"},t.prototype.enableNetwork=function(){throw"firebase.firestore.Firestore.enableNetwork is not supported"},t.prototype.enablePersistence=function(){throw"firebase.firestore.Firestore.enablePersistence is not supported"},t.prototype.setLogLevel=function(t){throw"firebase.firestore.Firestore.setLogLevel is not supported"},t.prototype.runTransaction=function(t){return t(new b)},t.prototype.settings=function(t){this._settings=t},t.prototype.dataAt=function(t,e){if(void 0===e&&(e=!1),!(t in this._docs)&&e){this._docs[t]=Object.create(null);var r=d(t),n=r.id,i=r.parentPath,o=this._collections[i];o||(o=this._collections[i]=[]),-1===o.indexOf(n)&&o.push(n)}return this._docs[t]},t.prototype.dataAtRemove=function(t){var e=d(t),r=e.id,n=e.parentPath,i=this._collections[n];if(delete this._docs[t],i){var o=i.indexOf(r);-1!==o&&(i.splice(o,1),0===i.length&&delete this._collections[n])}},t.prototype.documentsAt=function(t,e){return void 0===e&&(e=!1),t in this._collections||!e||(this._collections[t]=[]),this._collections[t]},t.prototype.documentsAtRemove=function(t){delete this._collections[t]},t.prototype.listenersAt=function(t){return t in this._listeners||(this._listeners[t]=[]),this._listeners[t]},t.prototype.listenersAtAdd=function(t,e){this.listenersAt(t).push(e)},t.prototype.listenersAtRemove=function(t,e){var r=this.listenersAt(t),n=r.indexOf(e);-1!==n&&r.splice(n,1),0===r.length&&delete this._listeners[t]},t.prototype.notifyAt=function(t){this.listenersAt(t).forEach(function(t){return t()})},t}();e.Firestore=r;var n=function(){function e(t,e){this._orderBy=[],this._startAfter=[],this._startAt=[],this._endAt=[],this._endBefore=[],this._where=[],this._limit=Number.MAX_VALUE,this.firestore=t,this._path=e}return e.prototype.endAt=function(t){return this.copy(function(e){return e._endAt.push(t)})},e.prototype.endBefore=function(t){return this.copy(function(e){return e._endBefore.push(t)})},e.prototype.startAfter=function(t){return this.copy(function(e){return e._startAfter.push(t)})},e.prototype.startAt=function(t){return this.copy(function(e){return e._startAt.push(t)})},e.prototype.limit=function(t){return this.copy(function(e){return e._limit=t})},e.prototype.orderBy=function(t,e){return void 0===e&&(e="asc"),this.copy(function(r){return r._orderBy.push(new c(t,e))})},e.prototype.where=function(t,e,r){return this.copy(function(n){return n._where.push(new h(t,e,r))})},e.prototype.get=function(e){var r=new t.Promise;return r.resolve(new p(this,[],this.getResults())),r},e.prototype.onSnapshot=function(t,e,r){var n=this,i="function"==typeof t?t:e,o=this.getResults(),s=new p(this,[],o);i(s);var u=function(){var t=n.getResults(),e=new p(n,o,t);e.isEqual(s)||(o=t,i(s=e))};this.firestore.listenersAtAdd(this._path,u);return function(){n.firestore.listenersAtRemove(n._path,u)}},e.prototype.copyInstance=function(){return new e(this.firestore,this._path)},e.prototype.copy=function(t){var e=this.copyInstance();return e._orderBy=this._orderBy.slice(),e._startAfter=this._startAfter.slice(),e._startAt=this._startAt.slice(),e._endBefore=this._endBefore.slice(),e._endAt=this._endAt.slice(),e._where=this._where.slice(),e._limit=this._limit,t&&t(e),e},e.prototype.getResults=function(){var t=this._path+u,e=[],r=this.firestore.documentsAt(this._path);if(!r)return e;for(var n=0,i=r;n<i.length;n++){var o=i[n],s=this.firestore.doc(t+o).snapshot();if(0===this._where.length)e.push(s);else{for(var a=this._where,c=!0,h=0;c&&h<a.length;h++)a[h].matches(s)||(c=!1);c&&e.push(s)}}if(this._orderBy.length){var p=this._orderBy;e.sort(function(t,e){for(var r=0,n=0;n<p.length&&0===(r=p[n].compare(t,e));n++);return r})}return this._limit!==Number.MAX_VALUE&&this._limit<e.length&&e.splice(this._limit,e.length-this._limit),e},e}();e.Query=n;var o=function(){function t(t){this.compute=t}return t.arrayRemove=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return new t(function(t){if(!Array.isArray(t))return t;for(var r=t.slice(),n=0;n<e.length;n++){var i=r.indexOf(e[n]);-1!==i&&r.splice(i,1)}return r})},t.arrayUnion=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return new t(function(t){if(!Array.isArray(t))return t;for(var r=t.slice(),n=0;n<e.length;n++){-1===r.indexOf(e[n])&&r.push(e[n])}return r})},t.delete=function(){return new t(function(t){})},t.serverTimestamp=function(){return new t(function(t){return new Date})},t}();e.FieldValue=o;var s=function(){function t(t,e,r){this.metadata={fromCache:!0,hasPendingWrites:!1},this.id=t,this.exists=!!e,this.ref=r,this._data=e}return t.prototype.data=function(){return this._data},t.prototype.get=function(t){for(var e=t.split(a),r=this._data,n=0;n<e.length;n++){if(!(r&&e[n]in r))return;r=r[e[n]]}return r},t.prototype.isEqual=function(t){return this.ref.path===t.ref.path&&function t(e,r){if(0!==f(e,r))return!1;if(e===r)return!0;var n=typeof e;var i=typeof r;if(n!==i)return!1;if(e instanceof Date&&r instanceof Date)return e.getTime()===r.getTime();if(Array.isArray(e)&&Array.isArray(r)){if(e.length!==r.length)return!1;for(var o=0;o<e.length;o++)if(!t(e[o],r[o]))return!1;return!0}if("object"===n){for(var s in e)if(!(s in r&&t(e[s],r[s])))return!1;for(var s in r)if(!(s in e))return!1;return!0}return!1}(this._data,t._data)},t}();e.DocumentSnapshot=s;var p=function(){function t(t,e,r){this.metadata={fromCache:!0,hasPendingWrites:!1},this.query=t,this.docs=r,this.empty=r.length>0,this.size=r.length,this._prev=e,this._next=r}return t.prototype.docChanges=function(){for(var t=[],e=function(e){var n=r._next[e],i=e,o=r._prev.findIndex(function(t){return t.id===n.id});-1===o?t.push({doc:n,newIndex:i,oldIndex:o,type:"added"}):o===i&&n.isEqual(r._prev[o])||t.push({doc:n,newIndex:i,oldIndex:o,type:"modified"})},r=this,n=0;n<this._next.length;n++)e(n);for(var i=function(){var e=o._prev[s],r=o._next.findIndex(function(t){return t.id===e.id}),n=s;-1===r&&t.push({doc:e,newIndex:r,oldIndex:n,type:"removed"})},o=this,s=0;s<this._prev.length;s++)i();return t},t.prototype.forEach=function(t,e){this._next.forEach(t.bind(e))},t.prototype.isEqual=function(t){var e=this.docs,r=t.docs;if(e.length!==r.length)return!1;for(var n=0;n<e.length;n++)if(!e[n].isEqual(r[n]))return!1;return!0},t}();e.QuerySnapshot=p;var y=function(t){function e(e,r){var n=this,i=d(r),o=i.id,s=i.parentPath;return(n=t.call(this,e,r)||this).id=o,n._documentPath=s,n}return i(e,t),Object.defineProperty(e.prototype,"parent",{get:function(){return this.firestore.doc(this._documentPath)},enumerable:!0,configurable:!0}),e.prototype.doc=function(t){return this.firestore.doc(this._path+u+(t||function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e="",r=0;r<20;r++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}()))},e.prototype.add=function(t){return this.doc().set(t)},e.prototype.isEqual=function(t){return t._path===this._path},e}(n);e.CollectionReference=y;var v=function(){function e(t,e){var r=d(e),n=r.id,i=r.parentPath;this.firestore=t,this.path=e,this.id=n,this._collectionPath=i}return Object.defineProperty(e.prototype,"parent",{get:function(){return this.firestore.collection(this._collectionPath)},enumerable:!0,configurable:!0}),e.prototype.collection=function(t){return this.firestore.collection(this.path+u+t)},e.prototype.set=function(e,r){return r&&r.merge||this.clearValues(),this.applyValues(e),this.notify(),(new t.Promise).resolve(this)},e.prototype.delete=function(){return this.firestore.dataAt(this.path)&&(this.clearValues(),this.notify()),(new t.Promise).resolve(void 0)},e.prototype.update=function(e){return this.applyValues(e),this.notify(),(new t.Promise).resolve(void 0)},e.prototype.get=function(e){return(new t.Promise).resolve(this.snapshot())},e.prototype.onSnapshot=function(t,e,r){var n=this,i="function"==typeof t?t:e,o=function(){i(n.snapshot())};o(),this.firestore.listenersAtAdd(this.path,o);return function(){n.firestore.listenersAtRemove(n.path,o)}},e.prototype.clearValues=function(){this.firestore.dataAtRemove(this.path)},e.prototype.applyValues=function(t){var e=this.firestore.dataAt(this.path,!0);for(var r in t)e[r]=l(e[r],t[r])},e.prototype.notify=function(){this.firestore.notifyAt(this._collectionPath),this.firestore.notifyAt(this.path)},e.prototype.snapshot=function(){return new s(this.id,_(this.firestore.dataAt(this.path)),this)},e}();e.DocumentReference=v;var m=function(){return function(){}}();e.FieldPath=m;var g=function(){function t(t,e){this.latitude=t,this.longitude=e}return t.prototype.isEqual=function(t){return this.latitude===t.latitude&&this.longitude===t.longitude},t}();e.GeoPoint=g;var A=function(){function t(t,e){void 0===e&&(e=0),this._seconds=t,this._nanoseconds=e}return t.prototype.toMillis=function(){return 1e3*this._seconds+Math.floor(1e-6*this._nanoseconds)},t.prototype.toDate=function(){return new Date(this.toMillis())},t.fromMillis=function(e){return new t(Math.floor(e/1e3),1e6*e)},t.fromDate=function(t){return this.fromMillis(t.getTime())},t.now=function(){return this.fromMillis(Date.now())},t}();e.Timestamp=A;var b=function(){return function(){}}();e.Transaction=b;var w=function(){return function(){}}();e.WriteBatch=w}(n=t.firestore||(t.firestore={}))}(n=e.firebase||(e.firebase={})),e.default=n;var o=Object.create(null),s="[DEFAULT]",u="/",a=".",c=function(){function t(t,e){this._fieldPath=t,this._directionStr=e}return t.prototype.compare=function(t,e){var r=f(t.get(this._fieldPath),e.get(this._fieldPath));return"asc"===this._directionStr?r:-r},t}(),h=function(){function t(t,e,r){this._fieldPath=t,this._opStr=e,this._value=r}return t.prototype.matches=function(t){var e=t.get(this._fieldPath);if(void 0===e)return!1;switch(this._opStr){case"==":return 0===f(this._value,e);case">=":return f(this._value,e)>=0;case">":return f(this._value,e)>0;case"<=":return f(this._value,e)<=0;case"<":return f(this._value,e)<0;case"array-contains":case"array_contains":return Array.isArray(e)&&-1!==e.indexOf(this._value)}return!1},t}();function p(t){return t<0?-1:t>0?1:0}function f(t,e){return t===e?0:void 0===t?1:void 0===e?-1:"number"==typeof t&&"number"==typeof e?p(t-e):t instanceof Date&&e instanceof Date?p(t.getTime()-e.getTime()):"string"==typeof t&&"string"==typeof e?t.localeCompare(e):"boolean"==typeof t&&"boolean"==typeof e?(t?1:0)-(e?1:0):0}function l(t,e){return e instanceof n.firestore.FieldValue?e.compute(t):e}function d(t){var e=t.split(u);return{id:e.pop(),parentPath:e.join(u)}}function _(t){var e=t;if(t instanceof Date)e=new Date(t.getTime());else if(Array.isArray(t))e=t.map(_);else if("object"==typeof t)for(var r in e=Object.create(null),t)e[r]=_(t[r]);return e}}]);