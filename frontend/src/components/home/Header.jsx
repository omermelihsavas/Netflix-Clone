import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCaretUp, faBell, faXmark, faPencil, faArrowRotateRight, faUser, faQuestion } from '@fortawesome/free-solid-svg-icons'
import "../styles/Header.css";

import { useLogout } from '../../hooks/UseLogout';
import { useAuthContext } from '../../hooks/UseAuthContext';

export default function Header() {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    
    const [scrollPos, setScrollPos] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const [showSearchInput, setShowSearchInput] = useState(false);

    useEffect(() => {
        const handleScroll = e => {
            const scrollTop = e.target.documentElement.scrollTop;
            if (scrollTop > 20) {
                setScrollPos(true);
            } else {
                setScrollPos(false);
            }
        };

        if (document) {
            document.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (document) {
                document.removeEventListener("scroll", handleScroll);
            }
        };
    }, [setScrollPos]);

    const handleLogout = () => {
        logout();
    }

    return (
        <div style={scrollPos ? { backgroundColor: "rgba(20,20,20)", position: "fixed", transition: "all 0.7s" } : { backgroundColor: "transparent", position: "absolute", transition: "all 0.7s" }} className='header'>
            <div className="left-side">
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" width="120" viewBox="-153.6 -69.1855 1331.2 415.113"><path fill="#d81f26" d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0z"></path></svg>
                </div>

                <nav className='nav'>
                    <ul className="nav-list">
                        <li className="nav-item">Ana Sayfa</li>
                        <li className="nav-item">Diziler</li>
                        <li className="nav-item">Filmler</li>
                        <li className="nav-item">Yeni ve Popüler</li>
                        <li className="nav-item">Listem</li>
                        <li className="nav-item">Dile Göre Göz At</li>
                    </ul>
                </nav>

                <div className="little-nav">
                    <span className='little-nav-span'>Göz at</span>
                    <FontAwesomeIcon
                        icon={faCaretUp}
                        rotation={180}
                        style={{ color: "#ffffff" }}
                    />

                    <nav className="little-nav-open">
                        <ul className='little-nav-list'>
                            <li className="little-nav-open-icon">
                                <FontAwesomeIcon
                                    icon={faCaretUp}
                                    style={{ color: "#ffffff" }}
                                />
                            </li>
                            <li className='little-nav-item'>Ana Sayfa</li>
                            <li className='little-nav-item'>Diziler</li>
                            <li className='little-nav-item'>Filmler</li>
                            <li className='little-nav-item'>Yeni ve Popüler</li>
                            <li className='little-nav-item'>Listem</li>
                            <li className='little-nav-item'>Dile Göre Göz At</li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="right-side">
                {showSearchInput &&
                    <div className="search">
                        <FontAwesomeIcon
                            className='search-icon'
                            icon={faMagnifyingGlass}
                            size="xl"
                            style={{ color: "#ffffff" }}
                        />
                        <input
                            type="text"
                            id="search-input"
                            onClick={() => setSearchFocused(true)}
                            onBlur={(e) => e.target.value === "" ? setSearchFocused(false) : setSearchFocused(true)}
                        />
                        <label className={searchFocused ? 'label-shrink' : ''} htmlFor="search-input">İçerik, kişi, tür</label>

                        <FontAwesomeIcon
                            className='close-icon'
                            icon={faXmark}
                            size='xl'
                            style={{ color: "#ffffff" }}
                            onClick={() => setShowSearchInput(!showSearchInput)}
                        />
                    </div>
                }

                {
                    !showSearchInput &&
                    <FontAwesomeIcon
                        className='search-icon'
                        icon={faMagnifyingGlass}
                        size="xl"
                        style={{ color: "#ffffff" }}
                        onClick={() => setShowSearchInput(!showSearchInput)}
                    />
                }

                <span className='child-link'>Çocuk</span>

                <FontAwesomeIcon
                    className='notification-icon'
                    icon={faBell}
                    size="lg"
                    style={{ color: "#ffffff" }}
                />

                <div className="settings">
                    <img className='profile-icon' src="https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229" alt="settings" />
                    <FontAwesomeIcon
                        icon={faCaretUp}
                        rotation={180}
                        style={{ color: "#ffffff" }}
                    />

                    <div className="settings-open">
                        <ul className='settings-list'>
                            <li className="settings-item">
                                <img className="profile-icon" src="https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4" alt="profile-icon" />
                                {user && <p>{user.email}</p>}
                            </li>
                            <li className="settings-item">
                                <img className="profile-icon" src="https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSabysfbatDkmDvtUfjq2DZ8w9wBqOH8v3ZWUBy2huiv_KyjE_GLuCsGUyFADtHs73cbIYg9zg5XdN9JawQ1bpb5hisQC80.png?r=533" alt="kids-icon" />
                                <p>Çocuk</p>
                            </li>
                            <li className="settings-item">
                                <FontAwesomeIcon
                                    className='item-icon'
                                    icon={faPencil}
                                    size="2xl"
                                    style={{ color: "#8c8c8c" }}
                                />
                                <p>Profil Yönetimi</p>
                            </li>
                            <li className="settings-item">
                                <FontAwesomeIcon
                                    className='item-icon'
                                    icon={faArrowRotateRight}
                                    size="2xl"
                                    style={{ color: "#8c8c8c" }}
                                />
                                <p>Profil Aktar</p>
                            </li>
                            <li className="settings-item">
                                <FontAwesomeIcon
                                    className='item-icon'
                                    icon={faUser}
                                    size="2xl"
                                    style={{ color: "#8c8c8c" }}
                                />
                                <p>Hesap</p>
                            </li>
                            <li className="settings-item">
                                <FontAwesomeIcon
                                    className='item-icon'
                                    icon={faQuestion}
                                    size="2xl"
                                    style={{ color: "#8c8c8c" }}
                                />
                                <p>Yardım Merkezi</p>
                            </li>
                            <li className="settings-item logout item-icon">
                                <button onClick={handleLogout} className='btn-logout'>Netflix oturumunu kapat</button>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}
