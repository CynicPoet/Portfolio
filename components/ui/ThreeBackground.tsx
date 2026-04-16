"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Nodes
    const NODE_COUNT = 80;
    const nodePositions: THREE.Vector3[] = [];
    const nodeMeshes: THREE.Mesh[] = [];

    const goldColor = new THREE.Color(0xc4962d);
    const cyanColor = new THREE.Color(0x06b6d4);

    for (let i = 0; i < NODE_COUNT; i++) {
      const geo = new THREE.SphereGeometry(0.025, 8, 8);
      const mat = new THREE.MeshBasicMaterial({
        color: i % 3 === 0 ? goldColor : cyanColor,
        transparent: true,
        opacity: 0.7,
      });
      const mesh = new THREE.Mesh(geo, mat);
      const x = (Math.random() - 0.5) * 8;
      const y = (Math.random() - 0.5) * 6;
      const z = (Math.random() - 0.5) * 4;
      mesh.position.set(x, y, z);
      nodePositions.push(mesh.position.clone());
      nodeMeshes.push(mesh);
      scene.add(mesh);
    }

    // Edges
    const EDGE_DISTANCE = 1.5;
    const edgeGroup = new THREE.Group();
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const posI = nodePositions[i];
        const posJ = nodePositions[j];
        if (!posI || !posJ) continue;
        const dist = posI.distanceTo(posJ);
        if (dist < EDGE_DISTANCE) {
          const geo = new THREE.BufferGeometry().setFromPoints([posI, posJ]);
          const opacity = (1 - dist / EDGE_DISTANCE) * 0.25;
          const mat = new THREE.LineBasicMaterial({
            color: i % 5 === 0 ? goldColor : cyanColor,
            transparent: true,
            opacity,
          });
          edgeGroup.add(new THREE.Line(geo, mat));
        }
      }
    }
    scene.add(edgeGroup);

    // Velocity for floating nodes
    const velocities = nodeMeshes.map(() => ({
      x: (Math.random() - 0.5) * 0.002,
      y: (Math.random() - 0.5) * 0.002,
      z: (Math.random() - 0.5) * 0.001,
    }));

    let frameId: number;
    let time = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      time += 0.005;

      // Float nodes
      nodeMeshes.forEach((mesh, i) => {
        const vel = velocities[i];
        if (!vel) return;
        mesh.position.x += vel.x;
        mesh.position.y += vel.y;
        mesh.position.z += vel.z;
        // Boundary bounce
        if (Math.abs(mesh.position.x) > 4) vel.x *= -1;
        if (Math.abs(mesh.position.y) > 3) vel.y *= -1;
        if (Math.abs(mesh.position.z) > 2) vel.z *= -1;

        // Pulse opacity
        const mat = mesh.material as THREE.MeshBasicMaterial;
        mat.opacity = 0.4 + 0.35 * Math.sin(time + i * 0.3);
      });

      // Slow rotate
      edgeGroup.rotation.y = time * 0.05;
      scene.rotation.y = time * 0.03;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
