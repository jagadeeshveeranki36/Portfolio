import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export default function Hero3DAccent() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isFallback, setIsFallback] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion or is on mobile/touch screens
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window);

    if (prefersReducedMotion || isTouch) {
      setIsFallback(true);
      return;
    }
    setIsFallback(false);

    // Three.js Scene setup
    let scene, camera, renderer;
    let geometry = null, meshMaterial = null, wireframeMaterial = null, pointsMaterial = null;
    let mainMesh = null, wireMesh = null, glowParticles = null;
    let ambientLight, dirLight1, dirLight2, pointLight;
    let frameId = null;

    try {
      scene = new THREE.Scene();
      
      // Camera
      camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.z = 4.2;

      // WebGL Renderer
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } catch (error) {
      console.warn("WebGL initialization failed, falling back to CSS glow:", error);
      setIsFallback(true);
      return;
    }

    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // 1. Lights Configuration (Crucial for MeshStandardMaterial chrome render)
    ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambientLight);

    // White key light
    dirLight1 = new THREE.DirectionalLight(0xffffff, 1.6);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    // Cool ice-blue fill light
    dirLight2 = new THREE.DirectionalLight(0x0ea5e9, 1.2);
    dirLight2.position.set(-5, -3, 2);
    scene.add(dirLight2);

    // Orbiting point light for animated chrome highlights
    pointLight = new THREE.PointLight(0x38bdf8, 2.5, 8);
    scene.add(pointLight);

    // 2. Geometry: Sleek abstract Torus Knot (premium aerospace/tech feel)
    geometry = new THREE.TorusKnotGeometry(0.68, 0.22, 140, 16);

    // 3. Materials
    // Glossy metallic chrome material
    meshMaterial = new THREE.MeshStandardMaterial({
      color: 0xefeff3,
      metalness: 0.95,
      roughness: 0.12,
      flatShading: false,
    });
    
    mainMesh = new THREE.Mesh(geometry, meshMaterial);
    scene.add(mainMesh);

    // Ice-blue geometric wireframe outline overlay
    wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    
    wireMesh = new THREE.Mesh(geometry, wireframeMaterial);
    wireMesh.scale.set(1.005, 1.005, 1.005);
    scene.add(wireMesh);

    // Glowing coordinate dust particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 60;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);
      const r = THREE.MathUtils.randFloat(1.3, 2.0);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    pointsMaterial = new THREE.PointsMaterial({
      color: 0x0ea5e9,
      size: 0.03,
      transparent: true,
      opacity: 0.65,
      sizeAttenuation: true
    });
    glowParticles = new THREE.Points(particleGeometry, pointsMaterial);
    scene.add(glowParticles);

    // Mouse coordinates tracking for subtle rotation offset
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetX = (event.clientX - windowHalfX) * 0.0006;
      targetY = (event.clientY - windowHalfY) * 0.0006;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse coordination interpolation
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      // Base auto rotation
      const autoY = elapsedTime * 0.16;
      const autoX = elapsedTime * 0.08;

      mainMesh.rotation.y = autoY + mouseX;
      mainMesh.rotation.x = autoX + mouseY;
      
      wireMesh.rotation.y = autoY + mouseX;
      wireMesh.rotation.x = autoX + mouseY;

      glowParticles.rotation.y = -elapsedTime * 0.05;

      // Orbiting light to reflect continuously on the metallic curves
      pointLight.position.x = Math.sin(elapsedTime * 1.2) * 2.2;
      pointLight.position.y = Math.cos(elapsedTime * 1.2) * 1.5;
      pointLight.position.z = Math.sin(elapsedTime * 0.6) * 1.8;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up Three.js GL context
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (frameId) cancelAnimationFrame(frameId);
      if (geometry) geometry.dispose();
      if (particleGeometry) particleGeometry.dispose();
      if (meshMaterial) meshMaterial.dispose();
      if (wireframeMaterial) wireframeMaterial.dispose();
      if (pointsMaterial) pointsMaterial.dispose();
    };
  }, []);

  if (isFallback) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-sky-500/10 to-blue-500/10 blur-[80px] animate-pulse-slow" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
