import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import { useState, useEffect } from 'react'

const HeroSimple = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const floatingElements = [
    { text: 'import pandas as pd', x: 70, y: 15, delay: 1.0 },
    { text: 'df.head()', x: 75, y: 75, delay: 1.2 },
    { text: 'sklearn.model_selection', x: 55, y: 65, delay: 1.4 }, // Moved away from face
    { text: 'numpy.array', x: 80, y: 60, delay: 1.6 },
    { text: 'matplotlib.pyplot', x: 65, y: 85, delay: 1.8 },
    { text: 'def train_model():', x: 85, y: 25, delay: 2.0 }
  ]

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Single Layer: Deep Space Background with Parallax */}
      <Parallax speed={-20} className="absolute inset-0">
        <div 
          className="absolute inset-0 w-full h-[120vh] opacity-60"
          style={{
            backgroundImage: 'url(/assets/layer1-space-constellations.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </Parallax>

      {/* Dark Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black/40 z-5" />
      
      {/* Additional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-5" />

      {/* Floating Code Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute bg-black/50 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 text-white font-mono text-sm z-20 shadow-lg"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: element.delay }}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          {element.text}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-8 md:px-16 lg:px-24">
        
        {/* Left Side - Text Content */}
        <motion.div 
          className="flex-1 max-w-2xl"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Nitin Nandan
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Aspiring Data Scientist
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-lg font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Diving deep into data to surface meaningful insights
          </motion.p>
        </motion.div>

        {/* Right Side - 2D Data Scientist Character */}
        <motion.div 
          className="flex-1 flex justify-center items-center relative z-10"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="relative"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
            }}
          >
            {/* PNG Data Scientist Character - Made Bigger */}
            <img 
              src="/assets/data-scientist.png"
              alt="Data Scientist Character"
              className="w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] drop-shadow-2xl"
            />
            
            {/* Floating elements around character - Fixed to move together */}
            <motion.div
              className="absolute -top-8 -left-8 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/30"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -15, 0], 
                rotate: [0, 10, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 1.2 },
                scale: { duration: 0.8, delay: 1.2 },
                y: { duration: 3, repeat: Infinity },
                rotate: { duration: 3, repeat: Infinity }
              }}
            >
              <div className="text-white font-bold text-lg">📊</div>
            </motion.div>
            
            <motion.div
              className="absolute -top-4 -right-12 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/30"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -10, 0], 
                rotate: [0, -10, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 1.5 },
                scale: { duration: 0.8, delay: 1.5 },
                y: { duration: 2.5, repeat: Infinity, delay: 0.5 },
                rotate: { duration: 2.5, repeat: Infinity, delay: 0.5 }
              }}
            >
              <div className="text-white font-bold">🧠</div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-8 -left-12 w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/30"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -20, 0], 
                rotate: [0, 15, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 1.8 },
                scale: { duration: 0.8, delay: 1.8 },
                y: { duration: 4, repeat: Infinity, delay: 1 },
                rotate: { duration: 4, repeat: Infinity, delay: 1 }
              }}
            >
              <div className="text-white font-bold text-xl">📈</div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -right-8 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/30"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -12, 0], 
                rotate: [0, -15, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 2.1 },
                scale: { duration: 0.8, delay: 2.1 },
                y: { duration: 3.5, repeat: Infinity, delay: 1.5 },
                rotate: { duration: 3.5, repeat: Infinity, delay: 1.5 }
              }}
            >
              <div className="text-white font-bold">💡</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSimple;
