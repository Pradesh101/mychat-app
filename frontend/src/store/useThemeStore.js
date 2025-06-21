import {create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem('chat-theme') || 'coffee', // Default theme
  setTheme: (theme) => set(
    localStorage.setItem('chat-theme', theme) || { theme: theme }
  ), // Reset to default theme
}));