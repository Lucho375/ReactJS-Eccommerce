import { Link } from "react-router-dom";
import "./Footer.scss";
import wspIcon from "./wsp.png"
import facebook from "./facebook.png"
import instagram from "./instagram.png"
import map from "./map.png"
import mail from "./mail.png"

const Footer = () => {
    return (
        <footer className="footer__container">

            <section className="footer__container__section">

                <div>
                    <h3>Categorias</h3>
                    <Link to="/" className="Links__footer">Inicio</Link>
                    <Link to="/products" className="Links__footer">Todos los productos</Link>
                    <Link to="/category/placas de video" preventScrollReset={true} className="Links__footer">Placas de video</Link>
                    <Link to="/category/fuentes" className="Links__footer">Fuentes</Link>
                    <Link to="/category/procesadores" className="Links__footer">Procesadores</Link>
                </div>

                <div className="footer__container__payments">
                    <h3>Medios de pago</h3>
                    <img className="footer__container__payments__card" src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" alt="" />
                    <img className="footer__container__payments__card" src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" alt="" />
                    <img className="footer__container__payments__card" src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" alt="" />
                </div>
                <div className="footer__contact">
                    <h3>Contactanos</h3>
                    <div className="footer__contact__sections">
                        <img className="footer__contact__logos" src={wspIcon} alt="whatsapp logo" />
                        <p>11524215213</p>
                    </div>
                    <div className="footer__contact__sections">
                        <img className="footer__contact__logos" src={mail} alt="facebook logo" />
                        <p>email@email.com</p>
                    </div>
                    <div className="footer__contact__sections">
                        <img className="footer__contact__logos" src={map} alt="facebook logo" />
                        <p>Av. rivadavia 5000</p>
                    </div>
                </div>
                <div>
                    <h3>Seguinos</h3>
                    <div className="footer__contact__sections">
                        <img src={facebook} width={30} height={30} alt="facebook logo" />
                        <p>Facebook</p>
                    </div>
                    <div className="footer__contact__sections">
                        <img src={instagram} width={30} height={30} alt="instagram logo" />
                        <p>Instagram</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;