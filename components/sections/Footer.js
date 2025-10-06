'use client'

import { FaHeart } from 'react-icons/fa'
import styles from '../../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.logoSection}>
            <div className={styles.logoCircle}>
              <span>PA</span>
            </div>
            <p className={styles.logoText}>Paula Aranchipe</p>
            <p className={styles.crp}>Psicóloga | CRP-03/33885</p>
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
            © {new Date().getFullYear()} Paula Aranchipe. Todos os direitos reservados.
          </p>
          <p className={styles.madeWith}>
            Feito com <FaHeart className={styles.heart} /> para cuidar de você
          </p>
        </div>
      </div>
    </footer>
  )
}

