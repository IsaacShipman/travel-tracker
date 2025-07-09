import React, { useMemo } from 'react';
import { Cartesian3, Color } from 'cesium';
import { Entity, PointGraphics } from 'resium';
import type { TravelPoint } from '../data/travelData';

interface TravelMarkerProps {
  points: TravelPoint[];
  currentIndex: number;
  markerColor?: Color;
  markerSize?: number;
  showPulse?: boolean;
}

const TravelMarker: React.FC<TravelMarkerProps> = ({
  points,
  currentIndex,
  markerColor = Color.YELLOW,
  markerSize = 15,
  showPulse = true
}) => {
  const currentPosition = useMemo(() => {
    if (currentIndex < 0 || currentIndex >= points.length) return null;
    
    const point = points[currentIndex];
    return Cartesian3.fromDegrees(point.longitude, point.latitude, point.height + 5);
  }, [points, currentIndex]);

  const pulseSize = useMemo(() => {
    if (!showPulse) return markerSize;
    
    // Create a pulsing effect
    const time = Date.now() / 1000;
    const pulse = Math.sin(time * 3) * 0.3 + 1;
    return markerSize * pulse;
  }, [showPulse, markerSize]);

  if (!currentPosition) return null;

  return (
    <Entity position={currentPosition}>
      <PointGraphics
        pixelSize={pulseSize}
        color={markerColor}
        outlineColor={Color.WHITE}
        outlineWidth={2}
        heightReference={undefined}
        scaleByDistance={undefined}
      />
    </Entity>
  );
};

export default TravelMarker;
