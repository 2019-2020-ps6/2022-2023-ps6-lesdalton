export interface PlayerStats {
  name: string;
  totalPoints: number;
  statsByTheme: ThemeStats[];
}

export interface ThemeStats {
  themeName: string;
  themePoints: number;
}
