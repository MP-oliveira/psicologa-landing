'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'
import styles from '../../styles/Hero.module.css'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <motion.div 
          className={styles.logo}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.logoImg}>
            <Image
              src="/images/logoImg.png?v=2"
              alt="Logo Paula Aranchipe"
              width={300}
              height={300}
              priority
            />
          </div>
          <div className={styles.logoText}>
            <Image
              src="/images/logoTexto.png"
              alt="Paula Aranchipe - Psicóloga"
              width={500}
              height={133}
              priority
            />
          </div>
        </motion.div>


        <motion.p
          className={styles.description}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Cuidando da sua saúde mental com acolhimento, empatia e profissionalismo
        </motion.p>

        <motion.div
          className={styles.ctaButtons}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a href="#contato" className={styles.btnPrimary}>
            Agendar Consulta
          </a>
          <a 
            href="https://wa.me/5571999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.btnWhatsapp}
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  )
}

