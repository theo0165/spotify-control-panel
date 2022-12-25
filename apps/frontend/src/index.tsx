import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Bootstrap from './components/Bootstrap';
import { socket, SocketContext } from './context/socket';
import HomePage from './pages/Home';
import LoginPage from './pages/Login/Login';
import NotFound from './pages/NotFound';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import appTheme from './theme';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
    width: 100vw;
    height: 100vh;
    min-width: 100vw;
    min-height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
  }

  body {
    font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::selection{
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <SocketContext.Provider value={socket}>
      <Provider store={store}>
        <ThemeProvider theme={appTheme}>
          <Bootstrap />
          <GlobalStyles />
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </SocketContext.Provider>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
