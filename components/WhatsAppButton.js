'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import styles from '../styles/WhatsAppButton.module.css'

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/5571999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.', '_blank')
  }

  return (
    <motion.button
      className={styles.whatsappButton}
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp className={styles.icon} />
      <span className={styles.tooltip}>Fale comigo no WhatsApp</span>
      <span className={styles.pulse}></span>
    </motion.button>
  )
}

