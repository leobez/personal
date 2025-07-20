import { create } from 'zustand';

export type Theme = 'LIGHT' | 'DARK'

export interface Colors {
  headerBg: string;
  headerFont: string;
  mainBg: string;
  mainFont: string;
  sectionBg: string;
  sectionFont: string
}
export const ThemeMap:Record<Theme, Colors> = {
  'LIGHT': {
    headerBg: '#000000',
    headerFont: '#ffffff',
    mainBg: '#ffffff',
    mainFont: '#000000',
    sectionBg: '#ffffff',
    sectionFont: "#000000"
  },
  'DARK': {
    headerBg: '#000',      
    headerFont: '#ffffff',
    mainBg: '#121212',     
    mainFont: "#ffffff",
    sectionBg: '#18181b',
    sectionFont: "#ffffff"
  },

}
export const ThemesOptions = [
  { name: "LIGHT"     , icon: "#ffffff"},
  { name: "DARK"      , icon: "#000000"},
]
interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'LIGHT',
  setTheme: (theme:Theme) => set(() => ({ theme })),
}));



/*   'RED': {
    headerBg: '#991b1b',
    headerFont: '#ffffff',
    mainBg: '#dc2626',      
    mainFont: '#ffffff',
    sectionBg: '#991b1b',  
    sectionFont: '#ffffff',
  },
  'GREEN': {
    headerBg: '#14532d',
    headerFont: '#ffffff',
    mainBg: '#16a34a',      
    mainFont: '#ffffff',
    sectionBg: '#14532d',   
    sectionFont: '#ffffff',
  },
  'BLUE': {
    headerBg: '#1e3a8a',
    headerFont: '#ffffff',
    mainBg: '#2563eb',      
    mainFont: '#ffffff',
    sectionBg: '#1e3a8a',  
    sectionFont: '#ffffff',
  },
  'YELLOW': {
    headerBg: '#ca8a04',
    headerFont: '#ffffff',
    mainBg: '#facc15',     
    mainFont: '#ffffff',
    sectionBg: '#ca8a04',   
    sectionFont: '#ffffff',
  } */