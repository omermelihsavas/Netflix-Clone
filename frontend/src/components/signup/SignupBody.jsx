import { useRef, useState } from 'react'
import "../styles/LoginSignupBody.css";

import { useSignup } from '../../hooks/UseSignup';

export default function SignupBody() {
    const resetForm = useRef();

    const [firstFocused, setFirstFocused] = useState(false);
    const [secondFocused, setSecondFocused] = useState(false);
    const [thirdFocused, setThirdFocused] = useState(false);

    const [email, setEmail] = useState('');
    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    
    const [warningPassword, setWarningPassword] = useState('');
    const [submitted, setSubmitted] = useState('');

    const {signup, loading, error} = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (firstPassword === secondPassword && !error) {
            setSubmitted('Başarılı bir şekilde kayıt oldunuz.');
            await signup(email, firstPassword);
        }
        else if (firstPassword != secondPassword) {
            setWarningPassword('Parolalar uyuşmamaktadır. Lütfen tekrar deneyiniz!');
        }

        resetForm.current.reset();
    }
    
    return (
        <div className="signup-body">
            <div className="signup-form">
                <h1>Kayıt Ol</h1>
                <form onSubmit={handleSubmit} ref={resetForm}>
                    {warningPassword && <div className='warning-message'><p>{warningPassword}</p></div>}
                    {!warningPassword && error && <div className='warning-message'><p>{error}</p></div>}
                    {submitted && !error && <div className='success-message'><p>{submitted} <a href="/login">Şimdi giriş yapın</a>.</p></div>}
                    
                    <div className="input-container">
                        <input 
                            type="email" 
                            id="email" 
                            onClick={() => setFirstFocused(true)} 
                            onBlur={(e) => e.target.value === "" ? setFirstFocused(false) : setFirstFocused(true)}
                            onChange={(e) => setEmail(e.target.value)}
                        />
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

                    <button disabled={loading} className='btn-login' type="submit">Kayıt Ol</button>
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
