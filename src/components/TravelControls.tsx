import React, { useMemo } from 'react';

interface TravelControlsProps {
  isPlaying: boolean;
  currentIndex: number;
  totalPoints: number;
  onPlay: () => void;
  onPause: () => void;
  onReset: () => void;
  onSpeedChange: (speed: number) => void;
  speed: number;
}

const TravelControls: React.FC<TravelControlsProps> = ({
  isPlaying,
  currentIndex,
  totalPoints,
  onPlay,
  onPause,
  onReset,
  onSpeedChange,
  speed
}) => {
  // Memoize expensive calculations
  const progress = useMemo(() => 
    totalPoints > 0 ? (currentIndex / (totalPoints - 1)) * 100 : 0, 
    [currentIndex, totalPoints]
  );

  // Memoize static styles
  const containerStyle = useMemo(() => ({
    position: 'absolute' as const,
    top: '20px',
    left: '20px',
    background: 'rgba(0, 0, 0, 0.8)',
    padding: '15px',
    borderRadius: '8px',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    zIndex: 1000,
    minWidth: '280px'
  }), []);

  const progressBarStyle = useMemo(() => ({
    width: '100%',
    height: '4px',
    backgroundColor: '#333',
    borderRadius: '2px',
    overflow: 'hidden' as const
  }), []);

  const progressFillStyle = useMemo(() => ({
    width: `${progress}%`,
    height: '100%',
    backgroundColor: '#00ffff',
    transition: 'width 0.1s ease'
  }), [progress]);

  const buttonBaseStyle = useMemo(() => ({
    padding: '8px 16px',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px'
  }), []);

  const playButtonStyle = useMemo(() => ({
    ...buttonBaseStyle,
    backgroundColor: isPlaying ? '#ff6b6b' : '#4ecdc4',
  }), [buttonBaseStyle, isPlaying]);

  const resetButtonStyle = useMemo(() => ({
    ...buttonBaseStyle,
    backgroundColor: '#45b7d1',
  }), [buttonBaseStyle]);

  return (
    <div style={containerStyle}>
      <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Travel Animation</h3>
      
      <div style={{ marginBottom: '10px' }}>
        <div style={{ fontSize: '12px', marginBottom: '5px' }}>
          Point {currentIndex + 1} of {totalPoints}
        </div>
        <div style={progressBarStyle}>
          <div style={progressFillStyle} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <button
          onClick={isPlaying ? onPause : onPlay}
          style={playButtonStyle}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        
        <button
          onClick={onReset}
          style={resetButtonStyle}
        >
          Reset
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <label style={{ fontSize: '12px', minWidth: '40px' }}>Speed:</label>
        <input
          type="range"
          min="0.5"
          max="5"
          step="0.5"
          value={speed}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          style={{ flex: 1 }}
        />
        <span style={{ fontSize: '12px', minWidth: '30px' }}>{speed}x</span>
      </div>
    </div>
  );
};

export default React.memo(TravelControls);
