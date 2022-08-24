import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import {Rout} from '../../routes.jsx';



const AppRouter = () => {
    return (
    <Routes>
      {Rout.map(({path, Component})=><Route key={path} path={path} element={Component} exact/>)}
    </Routes>
    );
};

export default AppRouter;