import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/index.jsx'
import ContentsPage from './pages/contentsPage.jsx'
import { QueryClient } from 'react-query'
import { QueryClientProvider } from 'react-query'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/Contents',
        element: <ContentsPage />
      },
      {path: '/storage',
        element:  <h1>You caught us! we're still under Construction!</h1>
      }
    ],
    
  },
  {
    path: '/login',
    element: <h1>this is a log in page</h1>,
  }
]);
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
