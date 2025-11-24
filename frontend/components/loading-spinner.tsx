import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className='min-h-screen bg-black flex items-center justify-center relative overflow-hidden'>
      {/* Animated grid background morado */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute inset-0' style={{
          backgroundImage: 'linear-gradient(rgba(168,85,247,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.4) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Glow effect morado */}
      <div className='absolute inset-0 bg-purple-600/5 blur-3xl'></div>
      
      <div className='text-center space-y-8 relative z-10'>
        <div className='relative'>
          {/* Main spinner morado */}
          <div className='w-24 h-24 rounded-full border-4 border-purple-900/30 border-t-purple-500 animate-spin mx-auto shadow-lg shadow-purple-500/50'></div>
          {/* Inner spinner morado */}
          <div className='absolute inset-2 w-20 h-20 rounded-full border-2 border-purple-800/20 border-t-purple-400 animate-spin mx-auto' style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
        </div>
        
        <div className='space-y-4 max-w-md mx-auto'>
          <h2 className='text-3xl font-bold text-purple-400 tracking-tight'>Loading</h2>
          <p className='text-purple-300 text-lg'>Preparing content...</p>
          
          <div className='flex justify-center space-x-2 mt-6'>
            <div className='w-2 h-2 bg-purple-500 rounded-full animate-bounce shadow-lg shadow-purple-500/50'></div>
            <div className='w-2 h-2 bg-purple-400 rounded-full animate-bounce shadow-lg shadow-purple-400/50' style={{ animationDelay: '0.1s' }}></div>
            <div className='w-2 h-2 bg-purple-300 rounded-full animate-bounce shadow-lg shadow-purple-300/50' style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}