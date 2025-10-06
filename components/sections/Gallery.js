'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import styles from '../../styles/Gallery.module.css'

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="galeria" className={styles.gallery} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2>Conheça Meu Espaço de Acolhimento</h2>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            Um ambiente profissional, acolhedor e pensado para o seu bem-estar
          </p>
        </motion.div>

        <div className={styles.imagesGrid}>
          <motion.div
            className={styles.imageCard}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <Image 
                  src="/images/paula-galeria-1.jpg" 
                  alt="Paula Aranchipe - Atendimento Acolhedor" 
                  fill 
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.imageCard}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <Image 
                  src="/images/paula-galeria-2.jpg" 
                  alt="Paula Aranchipe - Espaço Profissional" 
                  fill 
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.imageCard}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <Image 
                  src="/images/paula-galeria-3.jpg" 
                  alt="Paula Aranchipe - Ambiente Tranquilo" 
                  fill 
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className={styles.ctaText}>
            "Cada jornada de autoconhecimento é única. Estou aqui para caminhar ao seu lado, 
            oferecendo suporte profissional e acolhimento em cada etapa."
          </p>
          <p className={styles.signature}>- Paula Aranchipe</p>
        </motion.div>
      </div>
    </section>
  )
}

