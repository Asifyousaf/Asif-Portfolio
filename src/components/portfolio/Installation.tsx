import { useEffect, useRef } from "react";

export function Installation() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let disposed = false;
    let cleanup = () => {};
    import("three").then((THREE) => {
      if (disposed) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
      } catch { return; }
      const styles = getComputedStyle(element);
      const accent = new THREE.Color(styles.getPropertyValue("--scene-accent").trim());
      const surface = new THREE.Color(styles.getPropertyValue("--scene-surface").trim());
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
      element.appendChild(renderer.domElement);
      element.classList.add("scene-ready");
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.z = 8.8;
      const group = new THREE.Group();
      scene.add(group);
      const geometry = new THREE.TorusKnotGeometry(1.34, 0.43, 180, 4, 2, 3);
      const material = new THREE.MeshStandardMaterial({ color: surface, metalness: 0.86, roughness: 0.27, flatShading: true });
      const mesh = new THREE.Mesh(geometry, material);
      group.add(mesh);
      const edgesGeometry = new THREE.EdgesGeometry(geometry, 12);
      const edgesMaterial = new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.85 });
      group.add(new THREE.LineSegments(edgesGeometry, edgesMaterial));
      const ambient = new THREE.AmbientLight(accent, 1.5);
      scene.add(ambient);
      const light = new THREE.DirectionalLight(accent, 8);
      light.position.set(3, 5, 4); scene.add(light);
      const fill = new THREE.DirectionalLight(new THREE.Color(styles.getPropertyValue("--scene-light").trim()), 5);
      fill.position.set(-4, -2, 3); scene.add(fill);
      group.rotation.set(0.45, -0.3, -0.4);
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
      let visible = true, frame = 0, pointerX = 0, pointerY = 0;
      const resize = () => {
        const { width, height } = element.getBoundingClientRect();
        if (!width || !height) return;
        renderer.setSize(width, height); camera.aspect = width / height; camera.updateProjectionMatrix();
        renderer.render(scene, camera);
      };
      const pointer = (event: PointerEvent) => {
        pointerX = (event.clientX / window.innerWidth - 0.5) * 0.6;
        pointerY = (event.clientY / window.innerHeight - 0.5) * 0.4;
      };
      const animate = (time: number) => {
        frame = requestAnimationFrame(animate);
        if (!visible || document.hidden || reduced.matches) return;
        group.rotation.y += (pointerX + time * 0.00006 - group.rotation.y) * 0.025;
        group.rotation.x += (0.45 + pointerY - group.rotation.x) * 0.035;
        renderer.render(scene, camera);
      };
      const observer = new IntersectionObserver(([entry]) => { visible = entry?.isIntersecting ?? false; });
      observer.observe(element);
      const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(element);
      window.addEventListener("pointermove", pointer, { passive: true });
      resize(); frame = requestAnimationFrame(animate);
      cleanup = () => {
        cancelAnimationFrame(frame); observer.disconnect(); resizeObserver.disconnect();
        window.removeEventListener("pointermove", pointer);
        geometry.dispose(); material.dispose(); edgesGeometry.dispose(); edgesMaterial.dispose(); renderer.dispose();
        renderer.domElement.remove();
      };
    }).catch(() => {});
    return () => { disposed = true; cleanup(); };
  }, []);

  return <div className="installation" ref={host} role="img" aria-label="An angular, interconnected digital sculpture, responding to your movement"><div className="installation-fallback" aria-hidden="true"><span /><span /><span /></div></div>;
}