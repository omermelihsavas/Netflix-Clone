import SignupHeader from '../components/signup/SignupHeader';
import SignupBody from '../components/signup/SignupBody';
import SignupFooter from '../components/signup/SignupFooter';

export default function Signup() {
    return (
        <div className='main'>
            <SignupHeader />
            <SignupBody />
            <SignupFooter />
        </div>
    )
}
