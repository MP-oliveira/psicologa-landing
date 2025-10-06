'use client'

import { FaHeart } from 'react-icons/fa'
import Image from 'next/image'
import styles from '../../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.logoSection}>
            <div className={styles.logoContainer}>
              <Image
                src="/images/logoImg.png"
                alt="Logo Paula Aranchipe"
                width={120}
                height={120}
                style={{ objectFit: 'contain' }}
              />
              <Image
                src="/images/logoTexto.png"
                alt="Paula Aranchipe - Psicóloga"
                width={240}
                height={60}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          <div className={styles.linksSection}>
            <h4>Navegação</h4>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className={styles.specialtiesSection}>
            <h4>Especialidades</h4>
            <ul>
              <li>Terapia Cognitivo-Comportamental</li>
              <li>Adicção e Dependência Química</li>
              <li>Transtorno do Espectro Autista</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>
            © {new Date().getFullYear()} Verzza Marketing. Todos os direitos reservados.
          </p>
          <p className={styles.madeWith}>
            Feito com <FaHeart className={styles.heart} /> para cuidar de você
          </p>
        </div>
      </div>
    </footer>
  )
}

