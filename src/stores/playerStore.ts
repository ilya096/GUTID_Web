import { create } from 'zustand';

interface PlayerState {
  position: [number, number, number];
  rotation: [number, number, number];
  mode: 'first-person' | 'orbit';
  isMoving: boolean;
  setPosition: (pos: [number, number, number]) => void;
  setRotation: (rot: [number, number, number]) => void;
  setMode: (mode: 'first-person' | 'orbit') => void;
  setMoving: (moving: boolean) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  position: [0, 1.6, 0],
  rotation: [0, 0, 0],
  mode: 'first-person',
  isMoving: false,
  setPosition: (pos) => set({ position: pos }),
  setRotation: (rot) => set({ rotation: rot }),
  setMode: (mode) => set({ mode }),
  setMoving: (moving) => set({ isMoving: moving })
}));