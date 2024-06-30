import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CssHead2.css';
import logoImage from '../Img/Logo.png';

const SubPokeHead = ({ handleSearchChange, setSearchPoke}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showClearIcon, setShowClearIcon] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
        setShowClearIcon(true);
    };

    const handleBlur = (event) => {
        setIsFocused(false);
        if (!event.target.value) {
            setShowClearIcon(false);
        }
    };

    const clearSearch = () => {
        const searchInput = document.getElementById('search_input');
        searchInput.value = '';
        setSearchPoke('');
        setShowClearIcon(false);
    };

    return (
        <div className="d-flex align-items-center justify-content-between p-2">
            <img src={logoImage} alt="Pokemon Logo" className="pokemon-logo" />
            <div style={{ position: 'relative' }} className="search-bar input-group">
                <span style={{ position: 'absolute', left: '15px', top: '3px', zIndex: '1000' }} id="basic-addon1">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.82491 15.5663C12.5481 15.5663 15.5663 12.5481 15.5663 8.82491C15.5663 5.10173 12.5481 2.0835 8.82491 2.0835C5.10173 2.0835 2.0835 5.10173 2.0835 8.82491C2.0835 12.5481 5.10173 15.5663 8.82491 15.5663Z" stroke="#FFCB05" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.5137 13.8638L16.1567 16.4999" stroke="#FFCB05" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
                <input
                    id="search_input"
                    onKeyUp={handleSearchChange}
                    style={{ paddingLeft: '40px', borderRadius: '8px', border: 'none' }}
                    type="text"
                    className="form-control"
                    placeholder="Search name Pokémon ..."
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                {showClearIcon && (
                    <svg
                        id="icon_clear"
                        onClick={clearSearch}
                        style={{ position: 'absolute', right: '15px', top: '10px', cursor: 'pointer', zIndex: '1500' }}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M7.99992 14.6666C11.6666 14.6666 14.6666 11.6666 14.6666 7.99992C14.6666 4.33325 11.6666 1.33325 7.99992 1.33325C4.33325 1.33325 1.33325 4.33325 1.33325 7.99992C1.33325 11.6666 4.33325 14.6666 7.99992 14.6666Z" stroke="#FFCB05" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.11328 9.88661L9.88661 6.11328" stroke="#FFCB05" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.88661 9.88661L6.11328 6.11328" stroke="#FFCB05" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </div>
            <div className="user-controls d-flex align-items-center">
                <svg
                    style={{ marginRight: '-8px' }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="12"
                        cy="8"
                        r="4.75"
                        stroke="#FFCB05"
                        strokeWidth="1.5"
                    ></circle>
                    <path
                        d="M6 21C6 21 6 19.75 6 18.5C6 17.25 8.24914 16 12 16C15.7509 16 18 17.25 18 18.5C18 20.375 18 21 18 21"
                        stroke="#FFCB05"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
                <div className="username mx-3">
                    <i className="bi bi-person"></i> Username
                    <span style={{ marginLeft: '20px' }}>|</span>
                </div>
                <div className="pocket position-relative">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
                            stroke="#FFCB05"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M9.00007 22H15.0001C19.0201 22 19.7401 20.39 19.9501 18.43L20.7001 12.43C20.9701 9.99 20.2701 8 16.0001 8H8.00007C3.73007 8 3.03007 9.99 3.30007 12.43L4.05007 18.43C4.26007 20.39 4.98007 22 9.00007 22Z"
                            stroke="#FFCB05"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M15.4955 12H15.5045"
                            stroke="#FFCB05"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M8.49451 12H8.50349"
                            stroke="#FFCB05"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <div className="position-relative ms-3">
                        <a href="/pocket" className="text-dark text-decoration-none">
                            <span
                                className="badge bg-dark rounded-circle position-absolute translate-middle"
                                style={{ position: 'absolute', top: '-20px', left: '10px' }}
                            >
                                0
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubPokeHead;