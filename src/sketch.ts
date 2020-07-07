import * as p5 from 'p5'
import Walker from './Walker'

let sketch = function (p: p5) {
    let walker;
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight)
        p.frameRate(60);
        walker = new Walker(p);
    }

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }

    p.draw = function () {
        walker.step();
        walker.render();
    }
}

new p5(sketch)
