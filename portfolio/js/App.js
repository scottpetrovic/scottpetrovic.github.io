import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { vertexShader, fragmentShader } from './shaders.js';

// From Console run this to start server after npm install: npx vite

export function App() {
 // Create scene, camera, and renderer
 const scene = new THREE.Scene();

 const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
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
       time: { value: 0 }
     },
     wireframe: false,
     vertexShader: vertexShader,      
     fragmentShader: fragmentShader,
     side: THREE.DoubleSide // Make the material double-sided
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


 window.addEventListener('resize', function () {
     // Update camera
     camera.aspect = window.innerWidth / window.innerHeight;
     camera.updateProjectionMatrix();

     // Update renderer
     renderer.setSize(window.innerWidth, window.innerHeight);
 }, false);


}

// bootstrap and start application
document.addEventListener("DOMContentLoaded", function() {
    App();
});