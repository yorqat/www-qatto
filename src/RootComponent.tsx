import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Triplicata from './pages/Projects/Tripicata';
import YorCloud from './pages/Projects/YorCloud';
import MaxTheWaitGain from './pages/Projects/MaxTheWaitGain';
import Gallery from './pages/Gallery';

import { ROUTES } from './resources/routes-constants';
import './styles/main.scss';
import Nav from './components/Nav';

const RootComponent: React.FC = () => {
  return (
    <div className="rooted theme-dark">
      <div id="root__child">
        <div id="root__child__container">
          <Nav />
          <Router>
            <div id="main-content">
              <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                <Route path={ROUTES.GALLERY_ROUTE} element={<Gallery />}></Route>

                <Route path={ROUTES.PROJECT_ROUTES}>
                  <Route path="triplicata" element={<Triplicata />} />
                  <Route path="max-the-wait-gain" element={<MaxTheWaitGain />} />
                  <Route path="yorcloud" element={<YorCloud />} />
                </Route>
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default RootComponent;
