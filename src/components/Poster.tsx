import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, DoubleSide } from 'three';

interface PosterProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  texturePath: string;
  scale?: [number, number, number];
  id?: string;
}

export const Poster: React.FC<PosterProps> = ({
  position,
  rotation = [0, 0, 0],
  texturePath,
  scale = [1, 1, 1],
  id
}) => {
  const texture = useLoader(TextureLoader, texturePath);
  
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <planeGeometry args={[scale[0], scale[1]]} />
      <meshBasicMaterial 
        map={texture} 
        side={DoubleSide}
        transparent
        opacity={1}
      />
    </mesh>
  );
};
