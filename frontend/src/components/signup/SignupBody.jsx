import { useState } from 'react'
import "../styles/LoginSignupBody.css";

export default function SignupBody() {
    const [firstFocused, setFirstFocused] = useState(false);
    const [secondFocused, setSecondFocused] = useState(false);
    const [thirdFocused, setThirdFocused] = useState(false);

    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [warningPassword, setWarningPassword] = useState('');
    const [submitted, setSubmitted] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (firstPassword === secondPassword) {
            setSubmitted('Başarılı bir şekilde kayıt oldunuz.');
        }
        else {
            setWarningPassword('Parolalar uyuşmamaktadır. Lütfen tekrar deneyiniz!');
        }
    }
    
    return (
        <div className="signup-body">
            <div className="signup-form">
                <h1>Kayıt Ol</h1>
                <form onSubmit={handleSubmit} action="">
                    {submitted && <div className='success-message'><p>{submitted} <a href="/login">Şimdi giriş yapın</a>.</p></div>}
                    {warningPassword && <div className='warning-message'><p>{warningPassword}</p></div>}

                    <div className="input-container">
                        <input type="email" id="email" onClick={() => setFirstFocused(true)} onBlur={(e) => e.target.value === "" ? setFirstFocused(false) : setFirstFocused(true)} />
                        <label className={firstFocused ? 'label-shrink' : ''} htmlFor="email">E-posta veya telefon numarası</label>
                    </div>

                    <div className="input-container">
                        <input
                            type="password"
                            id="password"
                            onClick={() => setSecondFocused(true)}
                            onBlur={(e) => e.target.value === "" ? setSecondFocused(false) : setSecondFocused(true)}
                            onChange={(e) => setFirstPassword(e.target.value)}
                        />
                        <label className={secondFocused ? 'label-shrink' : ''} htmlFor="password">Parola</label>
                    </div>

                    <div className="input-container">
                        <input
                            type="password"
                            id="again_password"
                            onClick={() => setThirdFocused(true)}
                            onBlur={(e) => e.target.value === "" ? setThirdFocused(false) : setThirdFocused(true)}
                            onChange={(e) => setSecondPassword(e.target.value)}
                        />
                        <label className={thirdFocused ? 'label-shrink' : ''} htmlFor="again_password">Parola tekrar</label>
                    </div>

                    <button className='btn-login' type="submit">Kayıt Ol</button>

                </form>

                <div className="signup-form-other">
                    <div className="login-signup">
                        <a href='/login'> Şimdi giriş yapın</a>
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
