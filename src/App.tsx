import { Routes, Route } from 'react-router-dom';

// Styles
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { theme } from '@theme';

// Pages
import Home from '@pages/Home';

// API
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Define a new client for react-query
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
