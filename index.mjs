// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.4-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";function m(t,i,m){var a;return e(t)||e(i)||e(m)||i<=0||m<=0?NaN:t<=0?0:(a=i*r(m)-s(i),a-=(i+1)*r(t),n(a-=m/t))}function a(t,m){var a;return e(t)||e(m)||t<=0||m<=0?i(NaN):(a=t*r(m)-s(t),function(s){var i;if(e(s))return NaN;if(s<=0)return 0;return i=a-(t+1)*r(s)-m/s,n(i)})}t(m,"factory",a);export{m as default,a as factory};
//# sourceMappingURL=index.mjs.map