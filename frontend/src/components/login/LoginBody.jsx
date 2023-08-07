import { useState } from 'react'
import "../styles/LoginSignupBody.css";

export default function LoginBody() {
    const [firstFocused, setFirstFocused] = useState(false);
    const [secondFocused, setSecondFocused] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked((prev) => !prev);
    };
    
    return (
        <div className="login-body">
            <div className="login-form">
                <h1>Oturum Aç</h1>
                <form action="">
                    <div className="input-container">
                        <input
                            type="email"
                            id="id_email"
                            onClick={() => setFirstFocused(true)}
                            onBlur={(e) => e.target.value === "" ? setFirstFocused(false) : setFirstFocused(true)}
                        />
                        <label className={firstFocused ? 'label-shrink' : ''} htmlFor="id_email">E-posta veya telefon numarası</label>
                    </div>

                    <div className="input-container">
                        <input
                            type="password"
                            id="id_password"
                            onClick={() => setSecondFocused(true)}
                            onBlur={(e) => e.target.value === "" ? setSecondFocused(false) : setSecondFocused(true)}
                        />
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

                        <a className='login-help-link' href='#'>Yardım ister misiniz?</a>
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
    )
}
