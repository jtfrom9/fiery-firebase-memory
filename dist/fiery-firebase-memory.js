module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";var n,o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.SDK_VERSION="FFM-0.0.4",t.apps=[];var e=d(),r="[DEFAULT]";function n(t){return e[t||r]}function i(e){return(e||t.app()).firestore()}t.initializeApp=function(n,o){var i=o||r;if(i in e)return e[i];var s=new t.app.App(n,i);return e[i]=s,t.apps.push(s),s},t.app=n,function(e){var r=function(){function e(e,r){this.options=e,this.name=r,this.firebase_=t}return e.prototype.auth=function(){throw"firebase.app.App.auth is not supported"},e.prototype.database=function(){},e.prototype.firestore=function(){return this.firestore_||(this.firestore_=new t.firestore.Firestore(this)),this.firestore_},e.prototype.delete=function(){throw"firebase.app.App.delete is not supported"},e.prototype.messaging=function(){throw"firebase.app.App.messaging is not supported"},e.prototype.storage=function(){throw"firebase.app.App.storage is not supported"},e}();e.App=r}(n=t.app||(t.app={})),t.firestore=i,function(e){var r={fromCache:!1,hasPendingWrites:!1,isEqual:function(t){return this.fromCache===t.fromCache&&this.hasPendingWrites===t.hasPendingWrites}},n=function(){function t(t){var e=this;this.app=t,this._docs=d(),this._collections=d(),this._listeners=d(),this.INTERNAL={delete:function(){return e._docs=d(),e._collections=d(),e._listeners=d(),Promise.resolve()}}}return t.prototype.batch=function(){throw"firebase.firestore.Firestore.batch is not supported"},t.prototype.collection=function(t){return new l(this,t)},t.prototype.doc=function(t){return new _(this,t)},t.prototype.disableNetwork=function(){throw"firebase.firestore.Firestore.disableNetwork is not supported"},t.prototype.enableNetwork=function(){throw"firebase.firestore.Firestore.enableNetwork is not supported"},t.prototype.enablePersistence=function(){throw"firebase.firestore.Firestore.enablePersistence is not supported"},t.prototype.setLogLevel=function(t){throw"firebase.firestore.Firestore.setLogLevel is not supported"},t.prototype.runTransaction=function(t){return t(new O)},t.prototype.settings=function(t){this._settings=t},t.prototype.dataAt=function(t,e){if(void 0===e&&(e=!1),!(t in this._docs)&&e){this._docs[t]=d();var r=m(t),n=r.id,o=r.parentPath,i=this._collections[o];i||(i=this._collections[o]=[]),-1===i.indexOf(n)&&i.push(n)}return this._docs[t]},t.prototype.dataAtRemove=function(t){var e=m(t),r=e.id,n=e.parentPath,o=this._collections[n];if(delete this._docs[t],o){var i=o.indexOf(r);-1!==i&&(o.splice(i,1),0===o.length&&delete this._collections[n])}},t.prototype.documentsAt=function(t,e){return void 0===e&&(e=!1),t in this._collections||!e||(this._collections[t]=[]),this._collections[t]},t.prototype.documentsAtRemove=function(t){delete this._collections[t]},t.prototype.listenersAt=function(t){return t in this._listeners||(this._listeners[t]=[]),this._listeners[t]},t.prototype.listenersAtAdd=function(t,e){this.listenersAt(t).push(e)},t.prototype.listenersAtRemove=function(t,e){var r=this.listenersAt(t),n=r.indexOf(e);-1!==n&&r.splice(n,1),0===r.length&&delete this._listeners[t]},t.prototype.notifyAt=function(t){this.listenersAt(t).forEach(function(t){return t()})},t}();e.Firestore=n;var i=function(){function t(t,e){this._orderBy=[],this._startAfter=[],this._startAt=[],this._endAt=[],this._endBefore=[],this._where=[],this._limit=Number.MAX_VALUE,this.firestore=t,this._path=e}return t.prototype.endAt=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this.extend(function(e){t instanceof f?e._endAt.push(t):e._endAt=e._endAt.concat(t)})},t.prototype.endBefore=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this.extend(function(e){t instanceof f?e._endBefore.push(t):e._endBefore=e._endBefore.concat(t)})},t.prototype.startAfter=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this.extend(function(e){t instanceof f?e._startAfter.push(t):e._startAfter=e._startAfter.concat(t)})},t.prototype.startAt=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this.extend(function(e){t instanceof f?e._startAt.push(t):e._startAt=e._startAt.concat(t)})},t.prototype.limit=function(t){return this.extend(function(e){return e._limit=t})},t.prototype.orderBy=function(t,e){return void 0===e&&(e="asc"),this.extend(function(r){return r._orderBy.push(new B(t,e))})},t.prototype.where=function(t,e,r){return this.extend(function(n){return n._where.push(new E(t,e,r))})},t.prototype.get=function(t){return Promise.resolve(new c(this,[],this.getResults()))},t.prototype.isEqual=function(t){return!1},t.prototype.onSnapshot=function(t,e,r){var n=this,o=(p(t),p(t)?t:e),i=(p(t),this.getResults()),s=new c(this,[],i);o(s);var u=function(){var t=n.getResults(),e=new c(n,i,t);e.isEqual(s)||(i=t,o(s=e))};this.firestore.listenersAtAdd(this._path,u);return function(){n.firestore.listenersAtRemove(n._path,u)}},t.prototype.extend=function(e){var r=new t(this.firestore,this._path);return r._where=this._where.slice(),r._orderBy=this._orderBy.slice(),r._startAfter=this._startAfter.slice(),r._startAt=this._startAt.slice(),r._endBefore=this._endBefore.slice(),r._endAt=this._endAt.slice(),r._limit=this._limit,e&&e(r),r},t.prototype.getResults=function(){var t=this._path+s,e=[],r=this.firestore.documentsAt(this._path);if(!r)return e;for(var n=0,o=r;n<o.length;n++){var i=o[n],u=this.firestore.doc(t+i).snapshot(),a=this._where;if(0===a.length)e.push(u);else{for(var f=!0,c=0;f&&c<a.length;c++)a[c].matches(u)||(f=!1);f&&e.push(u)}}var p=0,h=Math.min(this._limit,e.length),l=this._orderBy;if(l.length){e.sort(function(t,e){for(var r=0,n=0;n<l.length&&0===(r=l[n].compare(t,e));n++);return r});for(var d=this._startAt,_=this._startAfter,v=this._endAt,y=this._endBefore,g=0;g<l.length;g++){var m=l[g]._fieldPath;if(g<d.length&&(p=Math.max(p,j(e,m,d[g]))),g<_.length&&(p=Math.max(p,j(e,m,_[g],b)+1)),g<v.length){var A=j(e,m,v[g]);A>=0&&(h=Math.min(h,A))}if(g<y.length){var w=j(e,m,y[g])-1;w>=0&&(h=Math.min(h,w))}}}if(p>=h)return[];p>0&&e.splice(0,p);var P=h-p;return P!==e.length&&e.splice(P,e.length-P),e},t}();e.Query=i;var a=function(){function t(t){this.compute=t}return t.prototype.isEqual=function(t){return!1},t.arrayRemove=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return new t(function(t){if(!h(t))return t;for(var r=t.slice(),n=0;n<e.length;n++){var o=r.indexOf(e[n]);-1!==o&&r.splice(o,1)}return r})},t.arrayUnion=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return new t(function(t){if(!h(t))return t;for(var r=t.slice(),n=0;n<e.length;n++){-1===r.indexOf(e[n])&&r.push(e[n])}return r})},t.delete=function(){return new t(function(t){})},t.serverTimestamp=function(){return new t(function(t){return new Date})},t}();e.FieldValue=a;var f=function(){function t(t,e,n){this.metadata=r,this.id=t,this.exists=!!e,this.ref=n,this._data=e}return t.prototype.data=function(t){return this._data},t.prototype.get=function(t,e){return g(this._data,t,u).get()},t.prototype.isEqual=function(t){return this.ref.path===t.ref.path&&y(this._data,t._data)},t}();e.DocumentSnapshot=f;var c=function(){function t(t,e,n){this.metadata=r,this.query=t,this.docs=n,this.empty=n.length>0,this.size=n.length,this._prev=e,this._next=n}return t.prototype.docChanges=function(){for(var t=[],e=function(e){var n=r._next[e],o=e,i=r._prev.findIndex(function(t){return t.id===n.id});-1===i?t.push({doc:n,newIndex:o,oldIndex:i,type:"added"}):i===o&&n.isEqual(r._prev[i])||t.push({doc:n,newIndex:o,oldIndex:i,type:"modified"})},r=this,n=0;n<this._next.length;n++)e(n);var o=function(e){var r=i._prev[e],n=i._next.findIndex(function(t){return t.id===r.id}),o=e;-1===n&&t.push({doc:r,newIndex:n,oldIndex:o,type:"removed"})},i=this;for(n=0;n<this._prev.length;n++)o(n);return t},t.prototype.forEach=function(t,e){this._next.forEach(t.bind(e))},t.prototype.isEqual=function(t){var e=this.docs,r=t.docs;if(e.length!==r.length)return!1;for(var n=0;n<e.length;n++)if(!e[n].isEqual(r[n]))return!1;return!0},t}();e.QuerySnapshot=c;var l=function(t){function e(e,r){var n=this,o=m(r),i=o.id,s=o.parentPath;return(n=t.call(this,e,r)||this).id=i,n.path=r,n._documentPath=s,n}return o(e,t),Object.defineProperty(e.prototype,"parent",{get:function(){return this._documentPath?this.firestore.doc(this._documentPath):null},enumerable:!0,configurable:!0}),e.prototype.doc=function(t){return this.firestore.doc(this._path+s+(t||function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e="",r=0;r<20;r++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}()))},e.prototype.add=function(t){var e=this.doc(),r=e.set(t);return new Promise(function(t,n){r.then(function(){return t(e)}).catch(function(t){return n(t)})})},e.prototype.isEqual=function(t){return t.path===this.path},e}(i);e.CollectionReference=l;var _=function(){function t(t,e){var r=m(e),n=r.id,o=r.parentPath;this.firestore=t,this.path=e,this.id=n,this._collectionPath=o}return Object.defineProperty(t.prototype,"parent",{get:function(){return this.firestore.collection(this._collectionPath)},enumerable:!0,configurable:!0}),t.prototype.collection=function(t){return this.firestore.collection(this.path+s+t)},t.prototype.isEqual=function(t){return this.path===t.path},t.prototype.set=function(t,e){return e&&e.merge||this.clearValues(),this.applyValues(t),this.notify(),Promise.resolve()},t.prototype.delete=function(){return this.firestore.dataAt(this.path)&&(this.clearValues(),this.notify()),Promise.resolve()},t.prototype.update=function(t){return this.applyValues(t),this.notify(),Promise.resolve()},t.prototype.get=function(t){return Promise.resolve(this.snapshot())},t.prototype.onSnapshot=function(t,e,r){var n=this,o=(p(t),p(t)?t:e),i=(p(t),function(){o(n.snapshot())});i(),this.firestore.listenersAtAdd(this.path,i);return function(){n.firestore.listenersAtRemove(n.path,i)}},t.prototype.clearValues=function(){this.firestore.dataAtRemove(this.path)},t.prototype.applyValues=function(t){var e=this.firestore.dataAt(this.path,!0);for(var r in t){var n=g(e,r,u),o=T(n.get(),t[r]);void 0===o?n.delete():n.set(o)}},t.prototype.notify=function(){this.firestore.notifyAt(this._collectionPath),this.firestore.notifyAt(this.path)},t.prototype.snapshot=function(){return new f(this.id,A(this.firestore.dataAt(this.path)),this)},t}();e.DocumentReference=_;var w=function(){function t(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]}return t.prototype.isEqual=function(t){return!1},t.documentId=function(){return new t},t}();e.FieldPath=w;var P=function(){function t(t,e){this.latitude=t,this.longitude=e}return t.prototype.isEqual=function(t){return this.latitude===t.latitude&&this.longitude===t.longitude},t}();e.GeoPoint=P;var x=function(){function t(t,e){void 0===e&&(e=0),this.seconds=t,this.nanoseconds=e}return t.prototype.toMillis=function(){return 1e3*this.seconds+Math.floor(1e-6*this.nanoseconds)},t.prototype.toDate=function(){return new Date(this.toMillis())},t.prototype.isEqual=function(t){return this.seconds===t.seconds&&this.nanoseconds===t.nanoseconds},t.fromMillis=function(e){return new t(Math.floor(e/1e3),1e6*e)},t.fromDate=function(t){return this.fromMillis(t.getTime())},t.now=function(){return this.fromMillis(Date.now())},t}();e.Timestamp=x;var O=function(){function t(){}return t.prototype.get=function(t){throw"firebase.firestore.Transaction.get not supported"},t.prototype.set=function(t,e,r){throw"firebase.firestore.Transaction.set not supported"},t.prototype.update=function(t,e,r){for(var n=[],o=3;o<arguments.length;o++)n[o-3]=arguments[o];throw"firebase.firestore.Transaction.update not supported"},t.prototype.delete=function(t){throw"firebase.firestore.Transaction.delete not supported"},t}();e.Transaction=O;var M=function(){function t(){}return t.prototype.set=function(t,e,r){throw"firebase.firestore.WriteBatch.set not supported"},t.prototype.update=function(t,e,r){for(var n=[],o=3;o<arguments.length;o++)n[o-3]=arguments[o];throw"firebase.firestore.WriteBatch.update not supported"},t.prototype.delete=function(t){throw"firebase.firestore.WriteBatch.delete not supported"},t.prototype.commit=function(){throw"firebase.firestore.WriteBatch.commit not supported"},t}();e.WriteBatch=M;var E=function(){function t(t,e,r){this._fieldPath=t,this._opStr=e,this._value=r}return t.prototype.matches=function(t){var e=t.get(this._fieldPath);if(void 0===e)return!1;switch(this._opStr){case"==":return 0===v(this._value,e);case">=":return v(this._value,e)>=0;case">":return v(this._value,e)>0;case"<=":return v(this._value,e)<=0;case"<":return v(this._value,e)<0;case"array-contains":case"array_contains":return h(e)&&-1!==e.indexOf(this._value)}return!1},t}(),B=function(){function t(t,e){this._fieldPath=t,this._directionStr=e}return t.prototype.compare=function(t,e){var r=v(t.get(this._fieldPath),e.get(this._fieldPath));return"asc"===this._directionStr?r:-r},t}();function T(e,r){return r instanceof t.firestore.FieldValue?r.compute(e):r}function j(e,r,n,o){if(n instanceof t.firestore.DocumentSnapshot)return e.findIndex(function(t){return t.ref.path===n.ref.path});var i=function(t){return y(t.get(r),n)};return o?o(e,i):e.findIndex(i)}}(i=t.firestore||(t.firestore={}));var s="/",u=".";function a(t){return"number"==typeof t}function f(t){return"string"==typeof t}function c(t){return"boolean"==typeof t}function p(t){return"function"==typeof t}function h(t){return t instanceof Array}function l(t){return t instanceof Date}function d(){return Object.create(null)}function _(t){return t<0?-1:t>0?1:0}function v(t,e){return t===e?0:void 0===t?1:void 0===e?-1:a(t)&&a(e)?_(t-e):l(t)&&l(e)?_(t.getTime()-e.getTime()):f(t)&&f(e)?t.localeCompare(e):c(t)&&c(e)?(t?1:0)-(e?1:0):0}function y(t,e){if(0!==v(t,e))return!1;if(t===e)return!0;var r=typeof t;if(r!==typeof e)return!1;if(l(t)&&l(e))return t.getTime()===e.getTime();if(h(t)&&h(e)){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!y(t[n],e[n]))return!1;return!0}if("object"===r){for(var o in t)if(!(o in e&&y(t[o],e[o])))return!1;for(var o in e)if(!(o in t))return!1;return!0}return!1}function g(t,e,r){var n=e.split(r),o=n[n.length-1];return{get:function(){for(var e=t,r=0;r<n.length;r++){var o=n[r];if(o){if(!(e&&o in e))return;e=e[o]}}return e},set:function(e){for(var r=t,i=0;i<n.length-1;i++){var s=n[i];s&&(s in r||(r[s]={}),r=r[s])}r[o]=e},delete:function(){for(var e=t,r=0;r<n.length-1;r++){var i=n[r];if(i){if(!(e&&i in e))return;e=e[i]}}if(e){var s=e[o];return delete e[o],s}}}}function m(t){var e=t.split(s);return{id:e.pop(),parentPath:e.join(s)}}function A(t){var e=t;if(l(t))e=new Date(t.getTime());else if(h(t))e=t.map(A);else if(function(t){return"object"==typeof t}(t))for(var r in e=d(),t)e[r]=A(t[r]);return e}function b(t,e){for(var r=t.length-1;r>=0;r--)if(e(t[r],r))return r;return-1}}(n=e.firebase||(e.firebase={})),e.default=n}]);