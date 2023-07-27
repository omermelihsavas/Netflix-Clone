import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-social-links">
                <ul className='footer-social-list'>
                    <li className='footer-social-item'>
                        <a href="https://www.facebook.com/netflixturkiye">
                            <FontAwesomeIcon icon={faFacebookF} size="xl" style={{ color: "#ffffff", }} />
                        </a>
                    </li>
                    <li className='footer-social-item'>
                        <a href="https://www.instagram.com/netflixturkiye">
                            <FontAwesomeIcon icon={faInstagram} size="xl" style={{ color: "#ffffff", }} />
                        </a>
                    </li>
                    <li className='footer-social-item'>
                        <a href="https://www.twitter.com/netflixturkiye">
                            <FontAwesomeIcon icon={faTwitter} size="xl" style={{ color: "#ffffff", }} />
                        </a>
                    </li>
                    <li className='footer-social-item'>
                        <a href="https://www.youtube.com/channel/UCeZOywU-zg9j3SxYG0FdLtw">
                            <FontAwesomeIcon icon={faYoutube} size="xl" style={{ color: "#ffffff", }} />
                        </a>
                    </li>
                </ul>
            </div>

            <ul className='footer-member-list'>
                <li className='footer-member-item'>
                    <a href="#" className='footer-member-link'>
                        <span>Sesli Betimleme</span>
                    </a>
                </li>
                <li className='footer-member-item'>
                    <a href="#" className="footer-member-link">
                        <span>Yardım Merkezi</span>
                    </a>
                </li>
                <li className='footer-member-item'>
                    <a href="#" className="footer-member-link">
                        <span>Hediye Kartları</span>
                    </a>
                </li>
                <li className='footer-member-item'>
                    <a href="#" className="footer-member-link">
                        <span>Medya Merkezi</span>
                    </a>
                </li>
                <li className='footer-member-item'>
                    <a href="#" className="footer-member-link">
                        <span>Yatırımcı İlişkileri</span>
                    </a>
                </li>
                <li className='footer-member-item'>
                    <a href="#" className="footer-member-link">
                        <span>İş İmkanları</span>
                    </a>
                </li>
                <li className='footer-member-item'>
                    <a href="#" className="footer-member-link">
                        <span>Kullanım Koşulları</span>
                    </a>
                </li>
                <li className='footer-member-item'>
                    <a href="#" className="footer-member-link">
                        <span>Gizlilik</span>
                    </a>
                </li>
                <li className='footer-member-item'>
                    <a href="#" className="footer-member-link">
                        <span>Yasal Hükümler</span>
                    </a>
                </li>
                <li className='footer-member-item'>
                    <a href="#" className="footer-member-link">
                        <span>Çerez Tercihleri</span>
                    </a>
                </li>
                <li className='footer-member-item'>
                    <a href="#" className="footer-member-link">
                        <span>Kurumsal Bilgiler</span>
                    </a>
                </li>
                <li className='footer-member-item'>
                    <a href="#" className="footer-member-link">
                        <span>Bize Ulaşın</span>
                    </a>
                </li>
            </ul>

            <div className="footer-service">
                <button className='btn-service'>Hizmet Kodu</button>
            </div>

            <div className="footer-copyright">
                <span>© 1997-2023 Netflix, Inc.</span>
            </div>
        </footer>
    )
}
