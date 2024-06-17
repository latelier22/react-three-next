// store.js
import { create } from 'zustand';

const useStore = create((set) => ({
    mugTexture: null, // État initial de la texture du mug

    setMugTexture: (texture) =>
        set({ mugTexture: texture }), // Fonction pour mettre à jour la texture du mug


}));

export default useStore;
