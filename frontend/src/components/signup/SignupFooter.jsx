import "../styles/LoginSignupFooter.css";

export default function SignupFooter() {
  return (
    <footer className='signup-footer'>
            <div className="signup-footer-container">
                <p>
                    Sorularınız mı var?
                    <a href="#"> 0850-390-7444 </a>
                    numaralı telefonu arayın
                </p>

                <ul className="footer-links">
                    <li className="footer-link-item"><a href="#">SSS</a></li>
                    <li className="footer-link-item"><a href="#">Yardım Merkezi</a></li>
                    <li className="footer-link-item"><a href="#">Kullanım Koşulları</a></li>
                    <li className="footer-link-item"><a href="#">Gizlilik</a></li>
                    <li className="footer-link-item"><a href="#">Çerez Tercihleri</a></li>
                    <li className="footer-link-item"><a href="#">Kurumsal Bilgiler</a></li>
                </ul>
            </div>
        </footer>
  )
}
