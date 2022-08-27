function component() {
    console.log('component here')
    const element = document.createElement('div');

    // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack', '!'], ' ');

    return element;
}

document.body.appendChild(component());

var c = document.getElementById("tutorial");

/** @type {WebGLRenderingContext} */
var gl = c.getContext("webgl");

gl.createBuffer();
console.log('main.js here', gl)


