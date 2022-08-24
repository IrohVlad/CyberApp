import React from "react";
import ContactPage from "./pages/ContactPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import InfoPage from "./pages/InfoPage.jsx";
import MainPage from "./pages/MainPage.jsx";
import { CONTACT_ROUTE, GALLERY_ROUTE, INFO_ROUTE, MAIN_ROUTE } from "./utils/const.js";

export const Rout = [
    {
        path: MAIN_ROUTE,
        Component: <MainPage/>
    },
    {
        path: INFO_ROUTE,
        Component: <InfoPage/>
    },
    {
        path: GALLERY_ROUTE,
        Component: <GalleryPage/>
    },
    {
        path: CONTACT_ROUTE,
        Component: <ContactPage/>
    }
]