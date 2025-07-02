import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Star {
  x: number;
  y: number;
  opacity: number;
  twinkleSpeed: number;
  size: number;
  color: string;
  pulsePhase: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export const EnhancedStarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const animationRef = useRef<number>();
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateStars();
    };

    const generateStars = () => {
      const numStars = Math.floor((canvas.width * canvas.height) / 8000);
      starsRef.current = [];
      
      const colors = ['#ffffff', '#ffd700', '#87ceeb', '#dda0dd', '#98fb98'];
      
      for (let i = 0; i < numStars; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          opacity: Math.random(),
          twinkleSpeed: 0.01 + Math.random() * 0.02,
          size: Math.random() * 3 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    };

    const createShootingStar = () => {
      if (Math.random() < 0.003) { // 0.3% chance per frame
        shootingStarsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.3,
          vx: (Math.random() - 0.5) * 8,
          vy: Math.random() * 4 + 2,
          life: 0,
          maxLife: 60 + Math.random() * 40
        });
      }
    };

    const animate = () => {
      timeRef.current += 0.016; // ~60fps
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Animate regular stars
      starsRef.current.forEach(star => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }
        star.opacity = Math.max(0.2, Math.min(1, star.opacity));
        
        // Add pulsing effect
        const pulse = Math.sin(timeRef.current * 2 + star.pulsePhase) * 0.3 + 0.7;
        const finalOpacity = star.opacity * pulse;

        // Draw star with glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color.replace(')', `, ${finalOpacity})`).replace('rgb', 'rgba');
        ctx.fill();
        
        // Add glow effect for larger stars
        if (star.size > 2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = star.color.replace(')', `, ${finalOpacity * 0.2})`).replace('rgb', 'rgba');
          ctx.fill();
        }
      });

      // Create and animate shooting stars
      createShootingStar();
      
      shootingStarsRef.current = shootingStarsRef.current.filter(shootingStar => {
        shootingStar.x += shootingStar.vx;
        shootingStar.y += shootingStar.vy;
        shootingStar.life++;
        
        const alpha = 1 - (shootingStar.life / shootingStar.maxLife);
        
        if (alpha > 0) {
          // Draw shooting star trail
          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(shootingStar.x - shootingStar.vx * 10, shootingStar.y - shootingStar.vy * 10);
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.lineWidth = 2;
          ctx.stroke();
          
          // Draw shooting star head
          ctx.beginPath();
          ctx.arc(shootingStar.x, shootingStar.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.fill();
          
          return true;
        }
        
        return false;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 30%, #312e81 70%, #1e1b4b 100%)' }}
      />
      
      {/* Nebula effects */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 3 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </motion.div>
    </>
  );
};