import React, { useRef, useEffect, useState } from 'react';
import './MagicBento.css';

const MagicBento = ({ children, className, spotlight = true, stars = true, borderGlow = true, tilt = true, magnetism = true, ripple = true }) => {
  const bentoRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState([]);
  
  // Handle mouse movement for spotlight effect
  useEffect(() => {
    if (!spotlight || !bentoRef.current) return;
    
    const handleMouseMove = (e) => {
      if (!bentoRef.current) return;
      
      const rect = bentoRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setPosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [spotlight]);
  
  // Handle tilt and magnetism effects
  useEffect(() => {
    if ((!tilt && !magnetism) || !bentoRef.current) return;

    const el = bentoRef.current;

    const handleMouseMove = (e) => {
      if (!isHovered) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (tilt) {
        const tiltX = (y - centerY) / 10;
        const tiltY = (centerX - x) / 10;
        el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      }

      if (magnetism) {
        const magnetStrength = 20;
        const moveX = ((x - centerX) / centerX) * magnetStrength;
        const moveY = ((y - centerY) / centerY) * magnetStrength;
        el.style.transform += ` translate(${moveX}px, ${moveY}px)`;
      }
    };

    const handleMouseLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    if (tilt || magnetism) {
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);
      el.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [tilt, magnetism, isHovered]);
  
  // Handle click ripple effect
  const handleClick = (e) => {
    if (!ripple || !bentoRef.current) return;
    
    const rect = bentoRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    };
    
    setRipples([...ripples, newRipple]);
    
    setTimeout(() => {
      setRipples(ripples => ripples.filter(r => r.id !== newRipple.id));
    }, 1000);
  };
  
  return (
    <div 
      ref={bentoRef}
      className={`magic-bento ${className || ''}`}
      onClick={handleClick}
    >
      {spotlight && (
        <div 
          className="spotlight" 
          style={{
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.15), transparent 80%)`
          }}
        />
      )}
      
      {stars && (
        <div className="stars">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      )}
      
      {borderGlow && <div className="border-glow" />}
      
      {ripples.map(ripple => (
        <div 
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y
          }}
        />
      ))}
      
      <div className="content">{children}</div>
    </div>
  );
};

export default MagicBento;