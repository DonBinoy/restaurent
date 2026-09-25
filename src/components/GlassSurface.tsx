import React, { useId } from 'react';

interface GlassSurfaceProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  className?: string;
  children?: React.ReactNode;
  displace?: number;
  distortionScale?: number;
  redOffset?: number;
  greenOffset?: number;
  blueOffset?: number;
  backgroundOpacity?: number;
}

export default function GlassSurface({
  width = '100%',
  height = '100%',
  borderRadius = 30,
  className = '',
  children,
  displace = 2,
  distortionScale = 20,
  redOffset = 0,
  greenOffset = 5,
  blueOffset = 10,
  backgroundOpacity = 0.05,
}: GlassSurfaceProps) {
  const filterId = useId();

  // Clean the id for SVG usage
  const safeId = filterId.replace(/:/g, '');

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height, borderRadius }}
    >
      <svg className="absolute w-0 h-0" style={{ pointerEvents: 'none' }}>
        <defs>
          <filter id={safeId} x="-20%" y="-20%" width="140%" height="140%">
            {/* 1. Generate a noise map for displacement */}
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 3 -1" in="noise" result="highContrastNoise" />

            {/* 2. Displace the background image directly using the noise map */}
            <feDisplacementMap in="BackgroundImage" in2="highContrastNoise" scale={distortionScale} xChannelSelector="R" yChannelSelector="G" result="displacedBg" />

            {/* 3. Apply standard blur to the displaced background to soften it */}
            <feGaussianBlur stdDeviation={displace} in="displacedBg" result="finalBlur" />
          </filter>
        </defs>
      </svg>
      
      {/* Background layer applying the filter to the elements BEHIND the component */}
      <div 
        className="absolute inset-0 backdrop-blur-2xl" 
        style={{ 
          backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`,
          // Note: Full SVG backdrop-filter support is limited in some browsers,
          // so we cascade a standard CSS blur as a baseline, and the SVG filter for browsers that support it.
          backdropFilter: `blur(12px) url(#${safeId})`
        }} 
      />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
