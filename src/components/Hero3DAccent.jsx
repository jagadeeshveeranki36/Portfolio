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

    let scene, camera, renderer;
    let particleGeometry = null, pointsMaterial = null;
    let glowParticles = null;
    let frameId = null;

    try {
      scene = new THREE.Scene();
      
      // Camera
      camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.z = 4.0;

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

    // Glowing coordinate dust particles (Premium luxury gold dust look)
    particleGeometry = new THREE.BufferGeometry();
    const particleCount = 180;
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Disperse in a sphere
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);
      const r = THREE.MathUtils.randFloat(0.8, 3.5);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      speeds[i] = THREE.MathUtils.randFloat(0.1, 0.4);
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    pointsMaterial = new THREE.PointsMaterial({
      color: 0xc5a880, // Luxury champagne gold
      size: 0.035,
      transparent: true,
      opacity: 0.65,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending
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
      targetX = (event.clientX - windowHalfX) * 0.0004;
      targetY = (event.clientY - windowHalfY) * 0.0004;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse coordination interpolation
      mouseX += (targetX - mouseX) * 0.03;
      mouseY += (targetY - mouseY) * 0.03;

      // Base auto rotation for galaxy dust
      glowParticles.rotation.y = elapsedTime * 0.04 + mouseX;
      glowParticles.rotation.x = elapsedTime * 0.02 + mouseY;

      // Displace dust particles gently up and down
      const positionAttribute = particleGeometry.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        let y = positionAttribute.getY(i);
        // Slowly float upward, then loop back
        y += Math.sin(elapsedTime * speeds[i] + i) * 0.002;
        positionAttribute.setY(i, y);
      }
      positionAttribute.needsUpdate = true;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up Three.js GL context
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (frameId) cancelAnimationFrame(frameId);
      if (particleGeometry) particleGeometry.dispose();
      if (pointsMaterial) pointsMaterial.dispose();
    };
  }, []);

  if (isFallback) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-amber-500/5 to-yellow-500/5 blur-[80px] animate-pulse-slow" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
