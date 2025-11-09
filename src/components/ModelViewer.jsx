import React from 'react';

const ModelViewer = ({ src = '/ROBOT 3.glb', alt = '3D Model', className = '' }) => {
  return (
    <model-viewer
      src={src}
      alt={alt}
      camera-controls
      auto-rotate
      shadow-intensity="1"
      exposure="1.0"
      environment-image="https://modelviewer.dev/shared-assets/environments/neutral.hdr"
      camera-orbit="30deg 80deg 3.5m"
      camera-target="0m 0m 0m"
      field-of-view="30deg"
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      className={className}
    ></model-viewer>
  );
};

export default ModelViewer;