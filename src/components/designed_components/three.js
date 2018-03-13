import React, { Component } from 'react';
import * as THREE from 'three';

class Three extends Component {

	componentDidMount() {
		var scene, camera, renderer;
		var mesh, geo, mat;
		var start;

		var width, height;

		if (window.innerWidth < 1040) {
			width = window.innerWidth;
			height = window.innerHeight;
		} else {
			width = window.innerWidth / 2;
			height = window.innerHeight;
		}

		start = Date.now();
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
		renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true
		});

		camera.position.z = 50;
		renderer.setSize( width, height);
		this.refs.anchor.appendChild(renderer.domElement);
		renderer.setPixelRatio( window.devicePixelRatio );

		geo = new THREE.IcosahedronGeometry(20, 5);
		mat = new THREE.ShaderMaterial({
			uniforms: {
				time: {
					type: 'f',
					value: 0.0
				}
			},
			vertexShader: document.getElementById( 'vertexShader' ).textContent,
			fragmentShader: document.getElementById( 'fragmentShader').textContent,
			wireframe: true
		})
		mesh = new THREE.Mesh(geo, mat);
		scene.add(mesh);

		function loop() {
			mat.uniforms[ 'time' ].value = .00025 * ( Date.now() - start );
			renderer.render(scene, camera);
			requestAnimationFrame( loop );
		}
		loop();

		window.addEventListener('resize', function () {

			if (window.innerWidth < 1040) {
				width = window.innerWidth;
				height = window.innerHeight;
			} else {
				width = window.innerWidth / 2;
				height = window.innerHeight;
			}
			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		});
	}

	render() {
		return(
			<div className='anch' ref='anchor'>
			</div>
		)
	}

}

export default Three;
