/**
 * I opted to create a basic/small theme for this challenge...
 *
 * ...but for more complex applications I'd prefer to create
 * a package where I clearly split tokens and combine them into a usable theme.
 * I find this a lot more scalable, easier to support different themes like dark mode
 * and future-proof in case of rebranding etc...
 *
 * For eg:
 *
 * ```
 * const colors = {
 *   blue50: #ccc;
 *   blue100: #ccc;
 *   yellow50: #ccc;
 *   yellow100: #ccc;
 *   black100: #000;
 * };
 *
 * // Different themes can be created at this level
 * const uiColorsLight = {
 *   link: colors.blue100,
 *   textPrimary: colors.black100,
 *   ...
 * };
 *
 * export const theme = {
 *   colors: uiColorsLight,
 *   ...
 * };
 */

const LAYOUT_MAX_WIDTH = '60rem';

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  lightGrey: '#D9D9D9',
  darkGrey: '#4A4A4A',
  lightRed: '#FDE8E8',
  darkRed: '#B71C1C',
  lightYellow: '#FFF9DB',
  darkYellow: '#8C6D00',
  lightGreen: '#E6F4EA',
  darkGreen: '#2E7D32',
};

export const theme = {
  layout: {
    maxWidth: LAYOUT_MAX_WIDTH,
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '4rem',
  },
  colors: {
    textLight: colors.white,
    textPrimary: colors.black,
    textSecondary: colors.darkGrey,
    dropdown: colors.lightGrey,
    border: colors.lightGrey,
    button: colors.darkGreen,
    errorBg: colors.lightRed,
    errorText: colors.darkRed,
    warningBg: colors.lightYellow,
    warningText: colors.darkYellow,
    successBg: colors.lightGreen,
    successText: colors.darkGreen,
  },
  radii: {
    sm: '0.125rem',
    md: '0.75rem',
  },
  breakpoints: {
    sm: '40rem',
    md: '50rem',
    lg: LAYOUT_MAX_WIDTH,
  },
  fontSizes: {
    xxs: '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '2rem',
  },
  fontWeights: {
    sm: 400,
    md: 500,
    lg: 700,
  },
} as const;

export type Theme = typeof theme;
