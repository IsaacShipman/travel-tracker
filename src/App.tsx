import { useState, useEffect, useCallback } from 'react';
import {
  Ion,
  IonResource,
  IonGeocodeProviderType,
  Viewer as CesiumViewer
} from 'cesium';
import { Viewer, Cesium3DTileset } from 'resium';
import AnimatedTrail from './components/TravelPath';
import TravelMarker from './components/TravelMarker';
import TravelControls from './components/TravelControls';
import { sampleWalkingData } from './data/travelData';

// Set Cesium Ion access token from environment variable
Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_ION_ACCESS_TOKEN;

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [speed, setSpeed] = useState(2);
  const [viewer, setViewer] = useState<CesiumViewer | null>(null);

  // Disable base imagery layers when viewer is ready
  useEffect(() => {
    if (viewer) {
      // Remove all base imagery layers
      viewer.imageryLayers.removeAll();
      // Disable globe show ground atmosphere
      viewer.scene.globe.showGroundAtmosphere = false;
      // Disable lighting
      viewer.scene.globe.enableLighting = false;
    }
  }, [viewer]);

  // Animation loop
  useEffect(() => {
    if (!isPlaying || currentIndex >= sampleWalkingData.length - 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= sampleWalkingData.length - 1) {
          setIsPlaying(false);
          return sampleWalkingData.length - 1;
        }
        return nextIndex;
      });
    }, 1000 / speed); // Adjust speed based on multiplier

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, speed]);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleReset = useCallback(() => {
    setIsPlaying(false);
    setCurrentIndex(0);
  }, []);

  const handleSpeedChange = useCallback((newSpeed: number) => {
    setSpeed(newSpeed);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Viewer
        ref={(ref) => {
          if (ref && ref.cesiumElement) {
            setViewer(ref.cesiumElement);
          }
        }}
        full
        geocoder={IonGeocodeProviderType.GOOGLE}
        timeline={false}
        animation={false}
        homeButton={false}
        sceneModePicker={false}
        baseLayerPicker={false}
        navigationHelpButton={false}
        fullscreenButton={false}
        terrainProvider={undefined}
      >
        {/* Custom tileset from ion */}
        <Cesium3DTileset url={IonResource.fromAssetId(2275207)} />
        
        {/* Animated trail */}
        <AnimatedTrail
          points={sampleWalkingData}
          currentIndex={currentIndex}
        />
        
        {/* Moving marker */}
        <TravelMarker
          points={sampleWalkingData}
          currentIndex={currentIndex}
        />
      </Viewer>
      
      {/* Controls */}
      <TravelControls
        isPlaying={isPlaying}
        currentIndex={currentIndex}
        totalPoints={sampleWalkingData.length}
        onPlay={handlePlay}
        onPause={handlePause}
        onReset={handleReset}
        onSpeedChange={handleSpeedChange}
        speed={speed}
      />
    </div>
  );
}

export default App;