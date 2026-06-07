import { create } from 'zustand';

interface Exhibit {
  id: string;
  title: string;
  description: string;
}

interface InteractionState {
  activeExhibit: Exhibit | null;
  hoveredExhibitId: string | null;
  setActiveExhibit: (exhibit: Exhibit | null) => void;
  setHoveredExhibitId: (id: string | null) => void;
}

export const useInteractionStore = create<InteractionState>((set) => ({
  activeExhibit: null,
  hoveredExhibitId: null,
  setActiveExhibit: (exhibit) => set({ activeExhibit: exhibit }),
  setHoveredExhibitId: (id) => set({ hoveredExhibitId: id })
}));