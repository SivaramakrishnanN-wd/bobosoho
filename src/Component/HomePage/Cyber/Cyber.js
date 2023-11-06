import React,{useEffect} from "react";
import "./Cyber.css";
import AOS from 'aos'
import "aos/dist/aos.css"

export default function Cyber() {
    useEffect(()=>{
        AOS.init({duration:2000})
    })
  return (
    <div className="cyber_main">
      <div className="cyber_content_all">
        <div className="cyber_content" data-aos="fade-down-right">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <span>
            Bitss N for database network protection includes dedicted servers
            within network
          </span>
          <p>
            Bitss N for database network protection includes dedicted servers
            within network Bitss N offers an innovative solution designed to
            fortify your network's defenses, ensuring that your sensitive
            information remains secure.
          </p>
        </div>
        <div className="cyber_content" data-aos="flip-right">
          <ion-icon name="earth-outline"></ion-icon>
          <span>Bitss WP for database website protection</span>
          <p>
            Bitss WP offers an innovative solution ensuring that your sensitive
            information remains secure from cyber threats.
          </p>
        </div>
        <div className="cyber_content"   data-aos="fade-down-left">
          <ion-icon name="settings-outline"></ion-icon>
          <span>Bitss S for dedicated server database protection</span>
          <p>
            Bitss S offers a comprehensive and proactive approach to database
            security, ensuring that your sensitive information remains safe and
            secure.
          </p>
        </div>
        <div className="cyber_content" data-aos="fade-right">
          <ion-icon name="search-circle-outline"></ion-icon>{" "}
          <span>Bitss C antispam for contact page on website</span>
          <p>
            Bitss C offers a powerful and intelligent antispam system that
            ensures a hassle-free experience for your website visitors and
            enhances the security of your communication channels.
          </p>
        </div>
        <div className="cyber_content" data-aos="fade-left">
          <ion-icon name="shield-checkmark-outline"></ion-icon>
          <span>
            Bitss V verifies IT identity, identification of false fake copy
            sites, advertising, brand infringement
          </span>
          <p>
            Bitss V offers a powerful and proactive approach to ensure the
            legitimacy of your digital presence and protect your brand from
            unauthorized use.
          </p>
        </div>
      </div>
    </div>
  );
}
