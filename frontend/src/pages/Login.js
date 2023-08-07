import LoginHeader from '../components/login/LoginHeader';
import LoginBody from '../components/login/LoginBody';
import LoginFooter from '../components/login/LoginFooter';

export default function Login() {
    return (
        <div className='main'>
            <LoginHeader />
            <LoginBody />
            <LoginFooter />
        </div>
    )
}
