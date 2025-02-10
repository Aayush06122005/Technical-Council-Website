// import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingPage from "./pages/LandingPage.jsx"
import ClubsPage from "./pages/ClubsPage.jsx"
import ContactUsPage from "./pages/ContactUsPage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import TeamsPage from "./pages/TeamsPage.jsx"
import EventsPage from "./pages/EventsPage.jsx"
import 'boxicons';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
        {
            path: "/",
            element: <LandingPage />,
        },
        {
            path: "/about",
            element: <AboutPage/>,
        },
        {
            path: "/events",
            element: <EventsPage />,
        },
        {
            path: "/team",
            element: <TeamsPage />,
        },
        {
            path: "/clubs",
            element: <ClubsPage />,
        },
        {
            path: "/contact",
            element: <ContactUsPage />,
        },
    ],
},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
