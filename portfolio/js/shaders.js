// Define the vertex shader
export const vertexShader = `
    uniform float time;
    varying vec2 vUv;

    void main() {

        float amplitude = 0.5;

        vUv = uv;
        vec3 pos = position;
        pos.z += sin(pos.x + pos.y + time * 0.5) * amplitude;
        pos.y += sin(pos.x + pos.x + time * 0.1) * amplitude;
        pos.x += cos(pos.x + pos.x + time * 0.1) * amplitude;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`;

// Define the fragment shader
export const fragmentShader = `
    uniform vec3 color;
    varying vec2 vUv;
    uniform float time;

    void main() {


        // Rotate vUv
        float angle = time; // rotation angle
        mat2 rotationMatrix = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
        vec2 rotatedUv = rotationMatrix * (vUv - 0.5) + 0.5;

        // Original color
        vec4 originalColor = vec4(rotatedUv, 1.0, 0.8);

        // White tint
        vec4 whiteColor = vec4(1.0, 1.0, 1.0, 1.0);

        // Blend original color with white
        float tintStrength = 0.55; // Adjust this value to change the strength of the tint
        vec4 finalColor = mix(originalColor, whiteColor, tintStrength);

        gl_FragColor = finalColor; 
    }
`;