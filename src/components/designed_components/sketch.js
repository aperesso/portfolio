export default function sketch (p) {
	var w, h, canvas;
	var inc = 0.01;

 	p.setup = function () {
		if (window.innerWidth < 1040) {
			w = window.innerWidth;
			h = window.innerHeight;
		} else {
			w = window.innerWidth / 2;
			h = window.innerHeight;
		}
		canvas = p.createCanvas(w, h);
		p.pixelDensity(1);
		canvas.parent('left');
	};

	p.draw = function() {
		var yoff = 0;
		p.loadPixels();
		for (var x = 0; x < p.width; x++) {
			var xoff = 0;
			for (var y = 0; y < p.height; y++) {
				var index = (x + y * p.width) * 4;
				p.pixels[index + 0] = 55 + p.noise(xoff, yoff) * 50;
				p.pixels[index + 1] = 31;
				p.pixels[index + 2] = 45;
				p.pixels[index + 3] = 255;
				xoff += inc;
			}
			yoff += inc;
		}
		p.updatePixels();
		p.noLoop();
	}

	p.windowResized = function() {
		if (window.innerWidth < 1040) {
			w = window.innerWidth;
			h = window.innerHeight;
		} else {
			w = window.innerWidth / 2;
			h = window.innerHeight;
		}
		p.resizeCanvas(w, h)
	}
};
