// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function m(t,i,m){var a;return e(t)||e(i)||e(m)||i<=0||m<=0?NaN:t<=0?0:(a=i*r(m)-s(i),a-=(i+1)*r(t),n(a-=m/t))}function a(t,m){var a;return e(t)||e(m)||t<=0||m<=0?i(NaN):(a=t*r(m)-s(t),function(s){var i;if(e(s))return NaN;if(s<=0)return 0;return i=a-(t+1)*r(s)-m/s,n(i)})}t(m,"factory",a);export{m as default,a as factory};
//# sourceMappingURL=index.mjs.map
