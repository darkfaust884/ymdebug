import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../pages/Home/Home';
import ContentMicrodata from '../pages/ContentMicrodata/ContentMicrodata';
import ContentJsonld from '../pages/ContentJsonld/ContentJsonld';
import ContentOpengraph from '../pages/ContentOpengraph/ContentOpengraph';

const AppRouter = () => {
const location = useLocation();
const test = window.hitGo

useEffect(() => {
  test()
}, [location])
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/microdata" element={<ContentMicrodata />} />
          <Route path="/jsonld" element={<ContentJsonld />} />
          <Route path="/opengraph" element={<ContentOpengraph />} />
        </Routes>
    );
};

export default AppRouter;