import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Text3D, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Search, ArrowRight, Users, Building, TrendingUp } from 'lucide-react';
import * as THREE from 'three';

// 3D Scene Components
const FloatingElements = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.8, 64, 64]} position={[2, 0, 0]}>
          <MeshDistortMaterial
            color="#6366f1"
            attach="material"
            distort={0.3}
            speed={2}
            wireframe={false}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.8} rotationIntensity={2} floatIntensity={1.5}>
        <Sphere args={[0.6, 32, 32]} position={[-2, 1, -1]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.4}
            speed={1.5}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={3}>
        <Sphere args={[0.4, 32, 32]} position={[0, -1, 1]}>
          <MeshDistortMaterial
            color="#06b6d4"
            attach="material"
            distort={0.2}
            speed={3}
          />
        </Sphere>
      </Float>
    </group>
  );
};

const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />
      
      <Suspense fallback={null}>
        <FloatingElements />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Suspense>
    </Canvas>
  );
};

const Hero3D = () => {
  const stats = [
    { icon: Users, label: 'Active Users', value: '50K+' },
    { icon: Building, label: 'Companies', value: '5K+' },
    { icon: TrendingUp, label: 'Success Rate', value: '95%' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        <Scene3D />
      </div>
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Find Your{' '}
              <span className="gradient-text animate-glow">Dream Job</span>
              <br />
              in 3D Style
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience job hunting like never before with our immersive 3D platform. 
              Connect with top employers and discover opportunities that match your passion.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="glass glass-strong p-4 rounded-2xl max-w-2xl mx-auto shadow-glass">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search jobs, skills, companies..."
                    className="w-full pl-12 pr-4 py-4 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  />
                </div>
                <Button size="lg" className="gradient-primary hover-glow shadow-primary px-8">
                  Search Jobs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button size="lg" className="gradient-primary hover-glow shadow-primary px-8 py-4">
              Browse Jobs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="glass hover-lift px-8 py-4">
              Post a Job
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="glass p-6 rounded-2xl hover-lift"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero3D;