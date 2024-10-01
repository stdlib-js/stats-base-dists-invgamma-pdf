"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=s(function(z,c){
var d=require('@stdlib/math-base-special-gammaln/dist'),t=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-exp/dist'),q=require('@stdlib/math-base-special-ln/dist');function l(e,r,n){var i;return t(e)||t(r)||t(n)||r<=0||n<=0?NaN:e<=0?0:(i=r*q(n)-d(r),i-=(r+1)*q(e),i-=n/e,g(i))}c.exports=l
});var N=s(function(A,m){
var F=require('@stdlib/utils-constant-function/dist'),O=require('@stdlib/math-base-special-gammaln/dist'),v=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/math-base-special-exp/dist'),a=require('@stdlib/math-base-special-ln/dist');function T(e,r){var n;if(v(e)||v(r)||e<=0||r<=0)return F(NaN);return n=e*a(r)-O(e),i;function i(u){var f;return v(u)?NaN:u<=0?0:(f=n-(e+1)*a(u)-r/u,R(f))}}m.exports=T
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=o(),k=N();j(y,"factory",k);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
