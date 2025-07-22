import 'styled-components';
import type { Theme } from './theme';

declare module 'styled-components' {
  // Completely safe to disable this here - just a warning that Theme and DefaultTheme are basically the same
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
