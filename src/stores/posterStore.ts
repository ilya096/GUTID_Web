import { create } from 'zustand';

export interface PosterData {
  id: string;
  texturePath: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

interface PosterState {
  posters: PosterData[];
}

export const usePosterStore = create<PosterState>(() => ({
  posters: [
    {
      id: 'poster-1',
      texturePath: '/assets/posters/poster-1.png',
      position: [-4.5, 2, -4.9],
      rotation: [0, 0, 0],
      scale: [2, 3, 1]
    }
  ]
}));
