import React from 'react';
import { Canvas } from '@react-three/fiber';
import { InfoPanel } from './InfoPanel';
import { useInteractionStore } from '../stores/interactionStore';
import { Poster } from './Poster';
import { usePosterStore } from '../stores/posterStore';

function Exhibit({ position, id }: { position: [number, number, number], id: string }) {
  const { setActiveExhibit } = useInteractionStore();
  
  return (
    <mesh 
      position={position}
      onPointerDown={() => setActiveExhibit({ id, title: 'Экспонат ' + id, description: 'Описание экспоната ' + id })}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='#ff7f0e' />
    </mesh>
  );
}

export const HallEnvironment: React.FC = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 1.6, 5] }} style={{ width: '100%', height: '100%' }}>
        <color attach="background" args={['#222']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Exhibit position={[0, 0.5, 0]} id='exhibit-1' />
        <Exhibit position={[-2, 0.5, 0]} id='exhibit-2' />
        <Exhibit position={[2, 0.5, 0]} id='exhibit-3' />
      </Canvas>
      <InfoPanel />
    </>
  );
};
