import { createGlobalStyle } from 'styled-components';

/**
 * CSS Reset to normalize styles across the app
 * https://piccalil.li/blog/a-more-modern-css-reset/
 *
 *
 * Scroll to the bottom for app defaults
 */
export const GlobalStyles = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Prevent font size inflation */
  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  /* Remove default margin in favour of better control in authored CSS */
  body, h1, h2, h3, h4, p,
  figure, blockquote, dl, dd {
    margin-block-end: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    line-height: 1.5;
  }

  /* Set shorter line heights on headings and interactive elements */
  h1, h2, h3, h4,
  button, input, label {
    line-height: 1.1;
  }

  /* Balance text wrapping on headings */
  h1, h2,
  h3, h4 {
    text-wrap: balance;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
    color: currentColor;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input, button,
  textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  /* Make sure textareas without a rows attribute are not tiny */
  textarea:not([rows]) {
    max-height: 8rem;
    min-height: 8em;
  }

  /* Anything that has been anchored to should have extra scroll margin */
  :target {
    scroll-margin-block: 5ex;
  }

  /** App defaults */
  html, body {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 400;
  }

  body {
    padding: 0;
    margin: 0;
  }
`;
