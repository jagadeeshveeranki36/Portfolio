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

    // Initialise Three.js Scene
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 4.5;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

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

    // Construct 3D Sphere Geometry
    const geometry = new THREE.IcosahedronGeometry(1.4, 3);
    
    // Clone positions buffer for displacement calculation
    const originalPositions = geometry.clone().attributes.position;

    // 1. Wireframe core mesh
    const meshMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6, // primary violet
      wireframe: true,
      transparent: true,
      opacity: 0.14
    });
    const mesh = new THREE.Mesh(geometry, meshMaterial);
    scene.add(mesh);

    // 2. Vertex glowing particle points
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x6366f1, // indigo accent
      size: 0.045,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true
    });
    const particles = new THREE.Points(geometry, pointsMaterial);
    scene.add(particles);

    // 3. Floating outer dust rings
    const ringGeometry = new THREE.BufferGeometry();
    const ringParticlesCount = 70;
    const ringPositions = new Float32Array(ringParticlesCount * 3);
    for (let i = 0; i < ringParticlesCount; i++) {
      const angle = (i / ringParticlesCount) * Math.PI * 2;
      const radius = 2.0 + Math.random() * 0.4;
      ringPositions[i * 3] = Math.cos(angle) * radius;
      ringPositions[i * 3 + 1] = (Math.random() - 0.5) * 0.3;
      ringPositions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    ringGeometry.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3));
    
    const ringMaterial = new THREE.PointsMaterial({
      color: 0xa78bfa,
      size: 0.028,
      transparent: true,
      opacity: 0.45,
      sizeAttenuation: true
    });
    const ring = new THREE.Points(ringGeometry, ringMaterial);
    scene.add(ring);

    // Mouse coordinates tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetX = (event.clientX - windowHalfX) * 0.0012;
      targetY = (event.clientY - windowHalfY) * 0.0012;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation variables
    let clock = new THREE.Clock();
    let frameId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Lerp mouse coordinates for fluid tracking
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Base auto rotation
      mesh.rotation.y = elapsedTime * 0.12;
      mesh.rotation.x = elapsedTime * 0.06;
      
      particles.rotation.y = elapsedTime * 0.12;
      particles.rotation.x = elapsedTime * 0.06;

      ring.rotation.y = -elapsedTime * 0.08;
      
      // Apply mouse coordinate displacement to rotation
      mesh.rotation.y += mouseX;
      mesh.rotation.x += mouseY;
      particles.rotation.y += mouseX;
      particles.rotation.x += mouseY;

      // Displace points dynamically using wave mechanics (vertex morphing)
      const positionAttribute = geometry.attributes.position;
      const vertex = new THREE.Vector3();
      const originalVertex = new THREE.Vector3();

      for (let i = 0; i < positionAttribute.count; i++) {
        vertex.fromBufferAttribute(positionAttribute, i);
        originalVertex.fromBufferAttribute(originalPositions, i);
        
        // Calculate displacement based on wave sine model
        const wave = Math.sin(elapsedTime * 1.6 + originalVertex.x * 2.0 + originalVertex.y * 2.0) * 0.075;
        vertex.copy(originalVertex).addScaledVector(originalVertex.clone().normalize(), wave);
        positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
      }
      positionAttribute.needsUpdate = true;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up Three GL context
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(frameId);
      geometry.dispose();
      meshMaterial.dispose();
      pointsMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
    };
  }, []);

  if (isFallback) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-violet-500/20 to-indigo-500/20 blur-[80px] animate-pulse-slow" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
