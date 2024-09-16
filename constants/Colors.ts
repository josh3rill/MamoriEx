const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#000',
    background: '#fff',
    separator: '#eee', // Light theme separator color
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    separator: 'rgba(255,255,255,0.1)', // Dark theme separator color
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
