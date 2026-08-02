import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export default function Hero3DAccent() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isFallback, setIsFallback] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window);

    if (prefersReducedMotion || isTouch) {
      setIsFallback(true);
      return;
    }

    let scene, camera, renderer;
    let mainGeometry = null, mainMaterial = null, torusMesh = null;
    let particleGeometry = null, pointsMaterial = null, glowParticles = null;
    let frameId = null;

    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    // Mouse coordinates tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetX = (event.clientX - windowHalfX) * 0.0008;
      targetY = (event.clientY - windowHalfY) * 0.0008;
    };

    try {
      scene = new THREE.Scene();
      
      // Camera config
      camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
      camera.position.z = 5.5;

      // WebGL Renderer with high quality settings
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      setIsFallback(false);
    } catch (e) {
      console.warn("WebGL initialization failed, loading fallback:", e);
      setIsFallback(true);
      return;
    }

    // Now safely register event listeners and run the scene setup
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', onMouseMove);

    // Chrome metallic abstract geometric centerpiece (Torus Knot)
    mainGeometry = new THREE.TorusKnotGeometry(0.7, 0.22, 120, 16);
    mainMaterial = new THREE.MeshStandardMaterial({
      color: 0x94a3b8, // Sleek chrome steel
      metalness: 0.95,
      roughness: 0.12,
      wireframe: true
    });
    torusMesh = new THREE.Mesh(mainGeometry, mainMaterial);
    scene.add(torusMesh);

    // Glowing coordinate dust particles (Ice blue tech ambiance)
    particleGeometry = new THREE.BufferGeometry();
    const particleCount = 120;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = THREE.MathUtils.randFloatSpread(6.5);
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    pointsMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8, // Ice blue tech glow
      size: 0.025,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true
    });
    glowParticles = new THREE.Points(particleGeometry, pointsMaterial);
    scene.add(glowParticles);

    // Soft Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 1.5);
    keyLight.position.set(5, 3, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
    rimLight.position.set(-5, -3, -5);
    scene.add(rimLight);

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse coordination interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Base auto rotation + mouse interaction rotation
      if (torusMesh) {
        torusMesh.rotation.y = elapsedTime * 0.15 + mouseX;
        torusMesh.rotation.x = elapsedTime * 0.1 + mouseY;
        torusMesh.rotation.z = elapsedTime * 0.05;
      }

      if (glowParticles) {
        glowParticles.rotation.y = elapsedTime * 0.02 + mouseX * 0.5;
        glowParticles.rotation.x = elapsedTime * 0.01 + mouseY * 0.5;
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (frameId) cancelAnimationFrame(frameId);
      if (mainGeometry) mainGeometry.dispose();
      if (mainMaterial) mainMaterial.dispose();
      if (particleGeometry) particleGeometry.dispose();
      if (pointsMaterial) pointsMaterial.dispose();
    };
  }, []);

  if (isFallback) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-sky-500/5 to-cyan-500/5 blur-[80px]" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
