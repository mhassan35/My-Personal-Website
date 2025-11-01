'use client'
import Particles from './BackgroundFile'

export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black z-[-1]">
      <Particles
        particleColors={['#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  )
}
