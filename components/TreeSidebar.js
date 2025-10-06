'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/TreeSidebar.module.css'

export default function TreeSidebar() {
  const [isOpen, setIsOpen] = useState(true)

  const menuItems = [
    { name: 'Início', href: '#inicio', position: { x: 280, y: 150 } },     // Fora da árvore, lado direito
    { name: 'Sobre', href: '#sobre', position: { x: 280, y: 210 } },      // Fora da árvore, lado direito
    { name: 'Serviços', href: '#servicos', position: { x: 280, y: 270 } }, // Fora da árvore, lado direito
    { name: 'Galeria', href: '#galeria', position: { x: 280, y: 330 } },  // Fora da árvore, lado direito
    { name: 'Contato', href: '#contato', position: { x: 280, y: 390 } }   // Fora da árvore, lado direito
  ]

  return (
    <>
      <motion.div 
        className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
        initial={{ x: -380 }}
        animate={{ x: isOpen ? 0 : -380 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className={styles.treeContainer}>
          <Image
            src="/images/tree.png"
            alt="Árvore de navegação"
            width={280}
            height={380}
            style={{ objectFit: 'contain' }}
            priority
          />

          {/* Links nos galhos */}
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className={styles.menuItem}
              style={{ 
                left: `${item.position.x}px`, 
                top: `${item.position.y}px` 
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                scale: isOpen ? 1 : 0 
              }}
              transition={{ 
                delay: index * 0.1 + 0.3,
                duration: 0.3 
              }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

      </motion.div>

      {/* Botão toggle - sempre visível */}
      <button 
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Overlay quando sidebar está aberta */}
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
