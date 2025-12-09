'use client'

import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseOpacity: number
}

export default function ParticleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number | undefined>(undefined)
  const mouseRef = useRef({ x: 0, y: 0 })
  const currentOpacitiesRef = useRef<Map<number, number>>(new Map())
  const animationTimeRef = useRef(0)
  const scrollRef = useRef({ y: 0, lastY: 0, velocity: 0 })
  const [isClient, setIsClient] = useState(false)

  const PARTICLE_COLOR = 'rgba(94, 194, 142)'
  const TOTAL_PARTICLES = 1000 // Particles distributed across screen
  const PARTICLE_MIN_RADIUS = 2
  const PARTICLE_MAX_RADIUS = 4
  const PARTICLE_OPACITY = 0.8 // Maximum opacity when visible
  const BASE_VISIBILITY_RADIUS = 200 // Base distance from cursor where particles become visible
  const VISIBILITY_RADIUS_PULSE = 80 // How much the radius pulses (grows/shrinks)
  const CIRCULAR_MOTION_RADIUS = 60 // Radius of circular motion for visibility area
  const CIRCULAR_MOTION_SPEED = 0.003 // Speed of circular motion
  const PULSE_SPEED = 0.002 // Speed of pulsing (grow/shrink)
  const FADE_SPEED = 0.15 // How fast particles fade in/out (0-1, higher = faster)
  const MIN_VELOCITY = 0.3 // Minimum particle speed
  const MAX_VELOCITY = 1.0 // Maximum particle speed
  const MOUSE_INFLUENCE_RADIUS = 100 // How far mouse affects particles
  const MOUSE_REPULSION_STRENGTH = 0.5 // Strength of mouse repulsion
  const SCROLL_INFLUENCE_STRENGTH = 2.0 // How much scroll affects particles
  const SCROLL_VELOCITY_DECAY = 0.92 // How fast scroll velocity decays
  const SCROLL_PARALLAX_STRENGTH = 0.3 // Parallax effect strength

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Create a particle at a random position with random velocity
    const createParticle = (): Particle => {
      const angle = Math.random() * Math.PI * 2
      const speed = MIN_VELOCITY + Math.random() * (MAX_VELOCITY - MIN_VELOCITY)
      
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * (PARTICLE_MAX_RADIUS - PARTICLE_MIN_RADIUS) + PARTICLE_MIN_RADIUS,
        baseOpacity: PARTICLE_OPACITY,
      }
    }

    // Set canvas size and recreate particles on resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Recreate particles for new screen size
      particlesRef.current = []
      for (let i = 0; i < TOTAL_PARTICLES; i++) {
        particlesRef.current.push(createParticle())
      }
      currentOpacitiesRef.current = new Map()
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize particles distributed across screen
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < TOTAL_PARTICLES; i++) {
        particlesRef.current.push(createParticle())
      }
      // Initialize mouse position to center of screen
      mouseRef.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      }
      // Initialize opacity map
      currentOpacitiesRef.current = new Map()
    }
    initParticles()

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    // Scroll handler - track scroll position and velocity
    let lastScrollTime = Date.now()
    const handleScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset
      const currentTime = Date.now()
      const timeDelta = Math.max(currentTime - lastScrollTime, 1) // Prevent division by zero
      const scrollDelta = currentScrollY - scrollRef.current.y
      
      scrollRef.current.lastY = scrollRef.current.y
      scrollRef.current.y = currentScrollY
      // Calculate velocity based on scroll delta and time
      scrollRef.current.velocity = (scrollDelta / timeDelta) * 16 * SCROLL_INFLUENCE_STRENGTH // Normalize to ~60fps
      lastScrollTime = currentTime
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initialize scroll position
    scrollRef.current.y = window.scrollY || window.pageYOffset
    scrollRef.current.lastY = scrollRef.current.y

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current
      const currentOpacities = currentOpacitiesRef.current
      
      // Update animation time
      animationTimeRef.current += 1

      // Get current scroll position for parallax effect
      const scrollY = window.scrollY || window.pageYOffset
      const scrollOffset = scrollY * SCROLL_PARALLAX_STRENGTH // Parallax offset
      
      // Update scroll velocity decay
      scrollRef.current.velocity *= SCROLL_VELOCITY_DECAY

      // Calculate circular motion for visibility area center
      // Add scroll influence to make it more dynamic
      const scrollInfluence = Math.min(Math.abs(scrollRef.current.velocity) * 2, 50)
      const circularAngle = animationTimeRef.current * CIRCULAR_MOTION_SPEED
      const adjustedRadius = CIRCULAR_MOTION_RADIUS + scrollInfluence
      const visibilityCenterX = mouse.x + Math.cos(circularAngle) * adjustedRadius
      const visibilityCenterY = mouse.y + Math.sin(circularAngle) * adjustedRadius + (scrollY * 0.1)
      
      // Calculate pulsing radius (grows and shrinks)
      const pulseValue = (Math.sin(animationTimeRef.current * PULSE_SPEED) + 1) / 2 // 0 to 1
      const currentVisibilityRadius = BASE_VISIBILITY_RADIUS + (pulseValue * VISIBILITY_RADIUS_PULSE)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i]
        
        // Scroll interaction - particles move based on scroll velocity (much more noticeable)
        const scrollVelocity = scrollRef.current.velocity
        if (Math.abs(scrollVelocity) > 0.5) {
          // Apply scroll velocity to particles (vertical movement)
          particle.vy += scrollVelocity * 0.05
          // Also add horizontal drift for more dynamic effect
          particle.vx += (Math.random() - 0.5) * Math.abs(scrollVelocity) * 0.02
        }
        
        // Mouse interaction - particles are repelled by cursor
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const mouseDistance = Math.sqrt(dx * dx + dy * dy)
        
        if (mouseDistance < MOUSE_INFLUENCE_RADIUS && mouseDistance > 0) {
          const force = (MOUSE_INFLUENCE_RADIUS - mouseDistance) / MOUSE_INFLUENCE_RADIUS
          const angle = Math.atan2(dy, dx)
          particle.vx -= Math.cos(angle) * force * MOUSE_REPULSION_STRENGTH
          particle.vy -= Math.sin(angle) * force * MOUSE_REPULSION_STRENGTH
        }
        
        // Update particle position with parallax effect
        const parallaxOffset = (scrollOffset - (particle.y * 0.0001)) * 0.5
        particle.x += particle.vx
        particle.y += particle.vy + parallaxOffset
        
        // Wrap around screen edges for continuous movement
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
        
        // Damping to keep movement smooth
        particle.vx *= 0.98
        particle.vy *= 0.98
        
        // Calculate distance from moving visibility center
        const visDx = visibilityCenterX - particle.x
        const visDy = visibilityCenterY - particle.y
        const visibilityDistance = Math.sqrt(visDx * visDx + visDy * visDy)
        
        // Calculate target opacity based on distance from moving visibility area
        let targetOpacity = 0
        if (visibilityDistance < currentVisibilityRadius) {
          // Fade in as visibility area gets closer
          const normalizedDistance = visibilityDistance / currentVisibilityRadius
          targetOpacity = particle.baseOpacity * (1 - normalizedDistance)
        }
        
        // Smoothly transition opacity
        const currentOpacity = currentOpacities.get(i) || 0
        const newOpacity = currentOpacity + (targetOpacity - currentOpacity) * FADE_SPEED
        currentOpacities.set(i, newOpacity)
        
        // Only draw if opacity is significant
        if (newOpacity > 0.01) {
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
          const colorParts = PARTICLE_COLOR.match(/rgba?\(([^)]+)\)/)
          if (colorParts) {
            const rgb = colorParts[1].split(',').slice(0, 3).join(',')
            ctx.fillStyle = `rgba(${rgb}, ${newOpacity})`
          } else {
            ctx.fillStyle = PARTICLE_COLOR
          }
          ctx.fill()
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isClient])

  if (!isClient) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}

