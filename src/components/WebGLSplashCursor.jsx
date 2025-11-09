import React, { useEffect, useRef, useMemo } from 'react';

const defaultOptions = {
  TRIGGER: 'hover',
  IMMEDIATE: true,
  AUTO: false,
  INTERVAL: 3000,
  SIM_RESOLUTION: 128,
  DYE_RESOLUTION: 1024,
  CAPTURE_RESOLUTION: 512,
  DENSITY_DISSIPATION: 1,
  VELOCITY_DISSIPATION: 0.28,
  PRESSURE: 0.8,
  PRESSURE_ITERATIONS: 20,
  CURL: 30,
  SPLAT_RADIUS: 0.33,
  SPLAT_FORCE: 6200,
  SHADING: true,
  COLORFUL: true,
  COLOR_UPDATE_SPEED: 10,
  PAUSED: false,
  BACK_COLOR: { r: 0, g: 0, b: 0 },
  TRANSPARENT: true,
  BLOOM: true,
  BLOOM_ITERATIONS: 8,
  BLOOM_RESOLUTION: 256,
  BLOOM_INTENSITY: 0.6,
  BLOOM_THRESHOLD: 0.6,
  BLOOM_SOFT_KNEE: 0.7,
  SUNRAYS: true,
  SUNRAYS_RESOLUTION: 196,
  SUNRAYS_WEIGHT: 1.0,
};

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (window.WebGLFluid) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = (e) => reject(e);
    document.head.appendChild(script);
  });
}

const WebGLSplashCursor = ({ options = {}, className, allowPointerEvents = false, zIndex = 1 }) => {
  const canvasRef = useRef(null);
  // Memoize merged options to keep useEffect dependencies stable and avoid re-init on each render
  const merged = useMemo(() => ({ ...defaultOptions, ...options }), [options]);

  useEffect(() => {
    let destroyed = false;
    const src = 'https://cdn.jsdelivr.net/npm/webgl-fluid@0.3';

    loadScript(src)
      .then(() => {
        if (destroyed) return;
        if (typeof window.WebGLFluid !== 'function') {
          console.error('WebGLFluid global not found after script load');
          return;
        }
        const canvas = canvasRef.current;
        if (!canvas) return;
        // Initialize the simulation
        window.WebGLFluid(canvas, merged);

        // Forward pointer movement from the whole window to the canvas
        // so the splash appears across the entire page even though the
        // canvas has pointer-events disabled.
        let raf = null;
        let lastEvt = null;

        const schedule = (e) => {
          lastEvt = e;
          if (raf == null) {
            raf = requestAnimationFrame(() => {
              raf = null;
              if (!lastEvt || !canvas) return;
              const { clientX, clientY } = lastEvt;
              const movementX = lastEvt.movementX || 0;
              const movementY = lastEvt.movementY || 0;

              // Dispatch both pointer and mouse events for compatibility
              try {
                const pe = new PointerEvent('pointermove', {
                  bubbles: true,
                  clientX,
                  clientY,
                  movementX,
                  movementY,
                });
                canvas.dispatchEvent(pe);
              } catch (_) {}

              const me = new MouseEvent('mousemove', {
                bubbles: true,
                clientX,
                clientY,
                movementX,
                movementY,
              });
              canvas.dispatchEvent(me);
            });
          }
        };

        const onTouchMove = (e) => {
          const t = e.touches && e.touches[0];
          if (!t) return;
          schedule({ clientX: t.clientX, clientY: t.clientY, movementX: 0, movementY: 0 });
        };

        window.addEventListener('mousemove', schedule, { passive: true });
        window.addEventListener('pointermove', schedule, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: true });

        // Cleanup listeners when component unmounts
        return () => {
          window.removeEventListener('mousemove', schedule);
          window.removeEventListener('pointermove', schedule);
          window.removeEventListener('touchmove', onTouchMove);
          if (raf) cancelAnimationFrame(raf);
        };
      })
      .catch((err) => {
        console.error('Failed to load WebGL Fluid script', err);
      });

    return () => {
      destroyed = true;
    };
  }, [merged]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex,
        pointerEvents: allowPointerEvents ? 'auto' : 'none',
        // Show fluid as a background layer without affecting text color
        mixBlendMode: 'normal',
      }}
    />
  );
};

export default WebGLSplashCursor;