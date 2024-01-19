import { add_scroll_triggers } from "./resume.js";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { vertexShader, fragmentShader } from "./shaders.js";

// From Console run this to start server after npm install: npm run dev
// From Console run this to build (git actions will do this when publishing): npm run build

export class App {

  _konami_code_sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  _user_sequence = [];

  constructor() {
    this._generate_background();
    window.addEventListener('keydown', (event) => this._check_konami_code(event));

    add_scroll_triggers();
  }

  _generate_background() {
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create an ambient light
    var ambientLight = new THREE.AmbientLight(0xffffff, 0); // white light
    scene.add(ambientLight);

    // create directional light
    var directionalLight = new THREE.DirectionalLight(0xffffff, 3.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    // Create geometry and material
    const geometry = new THREE.PlaneGeometry(13, 13, 100, 100);
    geometry.verticesNeedUpdate = true;

    var shader_material_2 = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0x00ff00) }, // Set color to red
        time: { value: 0 },
      },
      wireframe: false,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      side: THREE.DoubleSide, // Make the material double-sided
    });

    // same thing, but not wireframe
    var mesh2 = new THREE.Mesh(geometry, shader_material_2); // Create a mesh with your geometry and the normal material
    scene.add(mesh2); // Add the mesh to the scene

    // Position camera
    camera.position.z = 3;

    // Animate function
    const animate = function () {
      // Rotate mesh2
      mesh2.rotation.z += 0.0005;

      if (shader_material_2.uniforms) {
        shader_material_2.uniforms.time.value = performance.now() / 1000;
      }

      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    // Start animation
    animate();

    window.addEventListener(
      "resize",
      function () {
        // Update camera
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(window.innerWidth, window.innerHeight);
      },
      false
    );
  }

  _check_konami_code(event) {
    this._user_sequence.push(event.key);
    if (this._user_sequence.length > this._konami_code_sequence.length) {
      this._user_sequence.shift();
    }
    if (this._user_sequence.join() === this._konami_code_sequence.join()) {
      this._konami_code_enabled();
    }
  }

  _konami_code_enabled() {
    // Perform some action when the Konami code is entered
    console.log('Konami code entered!');

    var navbarNav = document.querySelector('.navbar-nav');
    var newLi = document.createElement('li');
    newLi.classList.add('nav-item');
    newLi.innerHTML = `
    <a id="konami" class="nav-link js-scroll-trigger" href="#projects">
      <span class="star">&#9734;</span> Projects
      </a>
    `;
    navbarNav.appendChild(newLi);

    // re-add scroll triggers so pojects link will work
    add_scroll_triggers();

    // show projects area
    document.querySelector('#projects').setAttribute('style', 'display: block !important;');

  }

}

// bootstrap and start application
document.addEventListener("DOMContentLoaded", function () {
  new App();
});
