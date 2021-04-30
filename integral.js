"use strict";

let tex = 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}';
let image = MathJax.tex2svg(tex);
document.body.appendChild(image);