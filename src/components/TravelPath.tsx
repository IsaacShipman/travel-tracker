import React, { useMemo, useRef } from 'react';
import { Cartesian3, Color, PolylineGlowMaterialProperty } from 'cesium';
import { Entity, PolylineGraphics } from 'resium';
import type { TravelPoint } from '../data/travelData';

interface AnimatedTrailProps {
  points: TravelPoint[];
  currentIndex: number;
  trailColor?: Color;
  trailWidth?: number;
  glowPower?: number;
}

const AnimatedTrail: React.FC<AnimatedTrailProps> = ({
  points,
  currentIndex,
  trailColor = Color.CYAN,
  trailWidth = 8,
  glowPower = 0.3
}) => {
  // Pre-calculate all positions once to avoid repeated calculations
  const allPositions = useMemo(() => {
    return points.map(point => 
      Cartesian3.fromDegrees(point.longitude, point.latitude, point.height)
    );
  }, [points]);

  const trailPositions = useMemo(() => {
    if (currentIndex < 1) return [];
    return allPositions.slice(0, currentIndex + 1);
  }, [allPositions, currentIndex]);

  // Optimize material - create once and reuse
  const materialRef = useRef<PolylineGlowMaterialProperty | null>(null);
  
  const dynamicMaterial = useMemo(() => {
    if (!materialRef.current) {
      materialRef.current = new PolylineGlowMaterialProperty({
        glowPower: glowPower,
        taperPower: 0.7,
        color: trailColor.withAlpha(0.8) // Use static alpha for better performance
      });
    }
    return materialRef.current;
  }, [trailColor, glowPower]);

  // Memoize polyline properties
  const polylineProps = useMemo(() => ({
    positions: trailPositions,
    width: trailWidth,
    material: dynamicMaterial,
    clampToGround: true,
    zIndex: 1,
  }), [trailPositions, trailWidth, dynamicMaterial]);

  if (trailPositions.length < 2) return null;

  return (
    <Entity>
      <PolylineGraphics {...polylineProps} />
    </Entity>
  );
};

export default React.memo(AnimatedTrail);
