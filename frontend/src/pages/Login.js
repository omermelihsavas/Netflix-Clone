import { useState } from 'react'

export default function Login() {
    const [firstFocused, setFirstFocused] = useState(false);
    const [secondFocused, setSecondFocused] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked((prev) => !prev);
    };

    return (
        <div className='login'>
            <div className="login-header">
                <a href="/login">
                    <svg className='login-logo' xmlns="http://www.w3.org/2000/svg" height="70" width="200" viewBox="-153.6 -69.1855 1331.2 415.113"><path fill="#d81f26" d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0z"></path></svg>
                </a>
            </div>

            <div className="login-body">
                <div className="login-form">
                    <h1>Oturum Aç</h1>
                    <form action="">
                        <div className="input-container">
                            <input type="email" id="id_email" onClick={() => setFirstFocused(true)} onBlur={() => setFirstFocused(false)} />
                            <label className={firstFocused ? 'label-shrink' : ''} htmlFor="id_email">E-posta veya telefon numarası</label>
                        </div>

                        <div className="input-container">
                            <input type="password" id="id_password" onClick={() => setSecondFocused(true)} onBlur={() => setSecondFocused(false)} />
                            <label className={secondFocused ? 'label-shrink' : ''} htmlFor="id_password">Parola</label>
                        </div>

                        <button className='btn-login' type="submit">Oturum Aç</button>

                        <div className="login-help">
                            <div className="login-remember">
                                <label className="custom-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleChange}
                                    />
                                    <span className="checkmark"></span>
                                    Beni hatırla
                                </label>
                            </div>

                            <a className='login-help-link'>Yardım ister misiniz?</a>
                        </div>
                    </form>

                    <div className="login-form-other">
                        <div className="login-signup">
                            Netflix'e katılmak ister misiniz?
                            <a href='/signup'> Şimdi kaydolun</a>
                            .
                        </div>

                        <div className="recaptcha">
                            <p>
                                <span>Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA tarafından korunuyor.</span>
                                &nbsp;
                                <button>Daha fazlasını öğrenin.</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className='login-footer'>
                <div className="login-footer-container">
                    <p>
                        Sorularınız mı var?
                        <a> 0850-390-7444 </a>
                        numaralı telefonu arayın
                    </p>

                    <ul className="footer-links">
                        <li className="footer-link-item"><a>SSS</a></li>
                        <li className="footer-link-item"><a>Yardım Merkezi</a></li>
                        <li className="footer-link-item"><a>Kullanım Koşulları</a></li>
                        <li className="footer-link-item"><a>Gizlilik</a></li>
                        <li className="footer-link-item"><a>Çerez Tercihleri</a></li>
                        <li className="footer-link-item"><a>Kurumsal Bilgiler</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}
