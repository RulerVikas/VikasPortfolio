import React, { useEffect, useRef } from 'react';

function SplashCursor({
  SIM_RESOLUTION = 128,
  DYE_RESOLUTION = 1440,
  CAPTURE_RESOLUTION = 512,
  DENSITY_DISSIPATION = 3.5,
  VELOCITY_DISSIPATION = 2,
  PRESSURE = 0.1,
  PRESSURE_ITERATIONS = 20,
  CURL = 3,
  SPLAT_RADIUS = 0.2,
  SPLAT_FORCE = 6000,
  SHADING = true,
  COLOR_UPDATE_SPEED = 10,
  BACK_COLOR = { r: 0, g: 0, b: 0 },
  TRANSPARENT = true,
  zIndex = 9999,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0, moved: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const state = {
      hue: Math.random() * 360,
      particles: [],
    };

    function resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    ctx.globalCompositeOperation = 'lighter';

    const baseRadiusPx = Math.max(3, SPLAT_RADIUS * 80);
    const maxParticles = Math.min(80, Math.max(20, Math.floor(SPLAT_FORCE / 250)));
    const spawnFactor = Math.max(1, SPLAT_FORCE / 1500);

    function rgba(r, g, b, a) {
      return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
      const dx = x - pointerRef.current.x;
      const dy = y - pointerRef.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy) + 0.001;

      pointerRef.current.x = x;
      pointerRef.current.y = y;
      pointerRef.current.moved = true;

      const drops = Math.min(maxParticles, Math.ceil(spawnFactor * (1 + speed / Math.max(0.5, VELOCITY_DISSIPATION))));
      for (let i = 0; i < drops; i++) {
        const jitterX = (Math.random() - 0.5) * 12;
        const jitterY = (Math.random() - 0.5) * 12;
        const radius = baseRadiusPx * (0.7 + Math.random() * 1.0) * (1 + speed / 40);
        const life = 1.0;
        state.particles.push({
          x: x + jitterX,
          y: y + jitterY,
          r: Math.min(radius, 120),
          life,
          decay: Math.max(0.003, DENSITY_DISSIPATION / 2000),
        });
      }
    }

    function onResize() {
      resize();
    }

    function step() {
      if (TRANSPARENT) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else {
        ctx.fillStyle = rgba(BACK_COLOR.r, BACK_COLOR.g, BACK_COLOR.b, 1 / (DENSITY_DISSIPATION + 5));
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      state.hue = (state.hue + COLOR_UPDATE_SPEED * 0.18) % 360;

      for (let i = state.particles.length - 1; i >= 0; i--) {
        const p = state.particles[i];
        const alpha = Math.max(0, p.life);
        if (alpha <= 0.01) {
          state.particles.splice(i, 1);
          continue;
        }

        const color = `hsla(${state.hue}, 85%, ${SHADING ? 60 : 70}%, ${alpha})`;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        grad.addColorStop(0.0, color);
        grad.addColorStop(0.5, `hsla(${(state.hue + 20) % 360}, 85%, ${SHADING ? 46 : 56}%, ${alpha * 0.75})`);
        grad.addColorStop(1.0, 'rgba(0,0,0,0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.life -= p.decay;
        p.r *= 0.992;
      }

      rafRef.current = requestAnimationFrame(step);
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('resize', onResize);
    rafRef.current = requestAnimationFrame(step);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [
    SIM_RESOLUTION,
    DYE_RESOLUTION,
    CAPTURE_RESOLUTION,
    DENSITY_DISSIPATION,
    VELOCITY_DISSIPATION,
    PRESSURE,
    PRESSURE_ITERATIONS,
    CURL,
    SPLAT_RADIUS,
    SPLAT_FORCE,
    SHADING,
    COLOR_UPDATE_SPEED,
    BACK_COLOR,
    TRANSPARENT,
    zIndex,
  ]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex,
      }}
    />
  );
}

export default SplashCursor;