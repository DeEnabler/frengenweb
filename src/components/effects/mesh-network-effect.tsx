
"use client";

import React, { useRef, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface MeshNetworkEffectProps {
  className?: string;
  particleColorHsl?: string; // HSL string e.g., "0 0% 100%" (for hue, saturation, lightness)
  lineColorHsl?: string;    // HSL string e.g., "0 0% 50%"
  particleCount?: number;
  maxDistance?: number; 
  mouseInfluenceRadius?: number;
  mouseRepelForce?: number;
}

const MeshNetworkEffect: React.FC<MeshNetworkEffectProps> = ({
  className,
  particleColorHsl = "0 0% 70%", 
  lineColorHsl = "0 0% 40%",     
  particleCount = 60, // Reduced for potentially better performance
  maxDistance = 110,
  mouseInfluenceRadius = 130,
  mouseRepelForce = 0.3, 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mousePositionRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const animationFrameIdRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null); 

  const initParticles = useCallback((canvasWidth: number, canvasHeight: number) => {
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvasWidth;
      const y = Math.random() * canvasHeight;
      particlesRef.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.4, // Slower speeds
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.2 + 0.5, // Smaller particles
      });
    }
  }, [particleCount]);

  const draw = useCallback((ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    particlesRef.current.forEach(p1 => {
      p1.x += p1.vx;
      p1.y += p1.vy;

      if (mousePositionRef.current.x !== null && mousePositionRef.current.y !== null) {
        const dxMouse = p1.x - mousePositionRef.current.x;
        const dyMouse = p1.y - mousePositionRef.current.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseInfluenceRadius) {
          const forceDirectionX = dxMouse / distMouse;
          const forceDirectionY = dyMouse / distMouse;
          const force = (mouseInfluenceRadius - distMouse) / mouseInfluenceRadius * mouseRepelForce;
          p1.vx += forceDirectionX * force * 0.2; 
          p1.vy += forceDirectionY * force * 0.2;
        }
      }
      
      // Dampen velocity to prevent excessive speed
      p1.vx *= 0.98;
      p1.vy *= 0.98;

      if (p1.x < 0 || p1.x > canvasWidth) {
        p1.vx *= -1;
        p1.x = Math.max(0, Math.min(p1.x, canvasWidth)); // clamp position
      }
      if (p1.y < 0 || p1.y > canvasHeight) {
        p1.vy *= -1;
        p1.y = Math.max(0, Math.min(p1.y, canvasHeight)); // clamp position
      }

      ctx.beginPath();
      ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${particleColorHsl}, 0.9)`;
      ctx.fill();

      particlesRef.current.forEach(p2 => {
        if (p1 === p2) return;
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          const opacity = 1 - (distance / maxDistance);
          ctx.strokeStyle = `hsla(${lineColorHsl}, ${opacity * 0.6})`; 
          ctx.lineWidth = 0.4; 
          ctx.stroke();
        }
      });
    });

    animationFrameIdRef.current = requestAnimationFrame(() => draw(ctx, canvasWidth, canvasHeight));
  }, [particleColorHsl, lineColorHsl, maxDistance, mouseInfluenceRadius, mouseRepelForce]);


  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current; 
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let canvasWidth = container.offsetWidth;
    let canvasHeight = container.offsetHeight;
    canvas.width = canvasWidth * window.devicePixelRatio;
    canvas.height = canvasHeight * window.devicePixelRatio;
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);


    initParticles(canvasWidth, canvasHeight);
    animationFrameIdRef.current = requestAnimationFrame(() => draw(ctx, canvasWidth, canvasHeight));

    const handleResize = () => {
      if (!container || !canvas || !ctx) return;
      canvasWidth = container.offsetWidth;
      canvasHeight = container.offsetHeight;
      canvas.width = canvasWidth * window.devicePixelRatio;
      canvas.height = canvasHeight * window.devicePixelRatio;
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initParticles(canvasWidth, canvasHeight); 
    };

    const handleMouseMove = (event: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mousePositionRef.current = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        };
    };
    
    const handleMouseLeave = () => {
        mousePositionRef.current = { x: null, y: null };
    };

    window.addEventListener('resize', handleResize);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      window.removeEventListener('resize', handleResize);
      if (container) { // Ensure container exists before removing listeners
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [initParticles, draw]); // Removed container from deps as it's stable via ref

  return (
    <div ref={containerRef} className={cn("absolute inset-0 z-0 pointer-events-none", className)}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default MeshNetworkEffect;
