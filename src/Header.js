import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const menuRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        if (windowWidth < 800) {
            setIsMenuOpen(prev => !prev);
        }
    };

    const closeMenu = useCallback(() => {
        if (windowWidth < 800) {
            setIsAnimating(true);
            setTimeout(() => {
                setIsMenuOpen(false);
                setIsAnimating(false);
            }, 300);
        }
    }, [windowWidth]);

    const handleClickOutside = useCallback((event) => {
        if (windowWidth < 800 && menuRef.current && !menuRef.current.contains(event.target)) {
            closeMenu();
        }
    }, [windowWidth, closeMenu]);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth >= 800) {
                setIsMenuOpen(false);
                document.removeEventListener("click", handleClickOutside);
            } else if (isMenuOpen) {
                document.addEventListener("click", handleClickOutside);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("click", handleClickOutside);
            window.removeEventListener("resize", handleResize);
        };
    }, [isMenuOpen, handleClickOutside]);

    const menuContentClass =
        windowWidth >= 801
            ? "menu-container desktop"
            : isMenuOpen
            ? "menu-container show"
            : isAnimating
            ? "menu-container hide"
            : "menu-container";

    const getLinkClass = (path) => {
        return location.pathname === path ? 'active-link' : '';
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <div>
            <div className='header-container'>
                <div className='logo' onClick={handleLogoClick}>
                    <img src={`${process.env.PUBLIC_URL}/logo192.png`} width="80px" height="80px" alt="logo" />
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} width="170px" alt="logo text" />
                </div>

                <div className='nav-menu' ref={menuRef}>
                    {windowWidth < 800 ? (
                        <>
                            <button onClick={toggleMenu} className="menu-toggle-btn">
                                <i className="ri-menu-line"></i>
                            </button>
                            <div className={menuContentClass}>
                                <div className='close-btn-container'>
                                    <button onClick={toggleMenu} className="close-menu-btn">
                                        <i className="ri-close-fill"></i>
                                    </button>
                                </div>
                                <ul>
                                    <li><Link to="/" className={getLinkClass('/')} onClick={closeMenu}>Home</Link></li>
                                    <li><Link to="/about" className={getLinkClass('/about')} onClick={closeMenu}>About</Link></li>
                                    <li><Link to="/blog" className={getLinkClass('/blog')} onClick={closeMenu}>Blog</Link></li>
                                    <li><Link to="/portfolio" className={getLinkClass('/portfolio')} onClick={closeMenu}>Portfolio</Link></li>
                                    <li><Link to="/contact" className={getLinkClass('/contact')} onClick={closeMenu}>Contact</Link></li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <div className="desktop-menu">
                            <ul>
                                <li><Link to="/" className={getLinkClass('/')} onClick={closeMenu}>Home</Link></li>
                                <li><Link to="/about" className={getLinkClass('/about')} onClick={closeMenu}>About</Link></li>
                                <li><Link to="/blog" className={getLinkClass('/blog')} onClick={closeMenu}>Blog</Link></li>
                                <li><Link to="/portfolio" className={getLinkClass('/portfolio')} onClick={closeMenu}>Portfolio</Link></li>
                                <li><Link to="/contact" className={getLinkClass('/contact')} onClick={closeMenu}>Contact</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
