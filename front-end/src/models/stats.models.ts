export interface PlayerStats {
  statsByTheme: ThemeStats[];
}

export interface ThemeStats {
  themeName: string;
  themePoints: number;
}
