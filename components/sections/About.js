'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { FaHeart, FaBrain, FaHandHoldingHeart } from 'react-icons/fa'
import styles from '../../styles/About.module.css'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const specialties = [
    {
      icon: <FaBrain />,
      title: "Terapia Cognitivo-Comportamental (TCC)",
      description: "Abordagem focada em identificar e modificar padrões de pensamento e comportamento que causam sofrimento emocional."
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Adicção e Dependência Química",
      description: "Tratamento especializado para superar vícios e dependências, promovendo recuperação sustentável e qualidade de vida."
    },
    {
      icon: <FaHeart />,
      title: "Transtorno do Espectro Autista (TEA)",
      description: "Acompanhamento dedicado a pessoas autistas e suas famílias, promovendo desenvolvimento, autonomia e bem-estar."
    }
  ]

  return (
    <section id="sobre" className={styles.about} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2>Sobre Mim</h2>
          <div className={styles.divider}></div>
        </motion.div>

        <div className={styles.introContainer}>
          <motion.div
            className={styles.introImage}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className={styles.imageFrame}>
              <div className={styles.photoPlaceholder}>
                <Image 
                  src="/images/paula-principal.jpg" 
                  alt="Paula Aranchipe - Psicóloga CRP 03/33885" 
                  fill 
                  style={{objectFit: 'cover'}} 
                  priority 
                />
              </div>
              <div className={styles.frameDecoration}></div>
            </div>
          </motion.div>

          <motion.div
            className={styles.intro}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className={styles.mainText}>
              Olá! Sou <strong>Paula Aranchipe</strong>, psicóloga pós Graduanda em TCC - PUC/PR, dedicada a transformar vidas através 
              de um atendimento humanizado e baseado em evidências científicas. Acredito que cada pessoa 
              é única e merece um cuidado personalizado para alcançar seu bem-estar emocional.
            </p>
            <p className={styles.secondaryText}>
              Com experiência em diferentes áreas da psicologia clínica — incluindo transtornos de 
              ansiedade, depressão, psicopatologia e uso abusivo de substâncias psicoativas, temas com os 
              quais possuo forte vínculo pessoal e profissional — dedico-me ao atendimento de adolescentes, 
              jovens e adultos. Meu trabalho é sempre guiado pelo acolhimento, compreensão e 
              construção de práticas que auxiliem no enfrentamento das dificuldades do dia a dia, promovendo 
              o bem-estar e favorecendo o processo de autoconhecimento do paciente.
            </p>
          </motion.div>
        </div>

        <div className={styles.specialtiesGrid}>
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              className={styles.specialtyCard}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className={styles.iconWrapper}>
                {specialty.icon}
              </div>
              <h3>{specialty.title}</h3>
              <p>{specialty.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

