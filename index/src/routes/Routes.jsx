import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Home from '../pages/Home';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import Loader from '../components/Loader';

const PageWrapper = ({ children }) => {
    const location = useLocation();
    const [showLoader, setShowLoader] = useState(false);
    const [currentChildren, setCurrentChildren] = useState(children);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            setCurrentChildren(children);
            return;
        }
        setShowLoader(true);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        if (!showLoader) {
            setCurrentChildren(children);
        }
    }, [children, showLoader]);

    return (
        <>
            {showLoader && (
                <Loader
                    fast
                    onLoadComplete={() => {
                        setShowLoader(false);
                        setCurrentChildren(children);
                    }}
                />
            )}
            {currentChildren}
        </>
    );
};

const Pages = () => {
  return (
    <Router>
      <PageWrapper>
        <AppRoutes />
      </PageWrapper>
    </Router>
  )
}

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    );
};

export default Pages;