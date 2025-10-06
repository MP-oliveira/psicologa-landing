'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaUserCircle, FaCalendarCheck, FaComments, FaChartLine } from 'react-icons/fa'
import styles from '../../styles/Services.module.css'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      icon: <FaUserCircle />,
      title: "1. Primeiro Contato",
      description: "Entre em contato por WhatsApp ou pelo formulário. Tire suas dúvidas e conheça mais sobre o atendimento."
    },
    {
      icon: <FaCalendarCheck />,
      title: "2. Agendamento",
      description: "Escolha o melhor horário para você. Atendimento presencial ou online, conforme sua preferência."
    },
    {
      icon: <FaComments />,
      title: "3. Primeira Sessão",
      description: "Momento de acolhimento onde conversaremos sobre suas necessidades e definiremos os objetivos terapêuticos."
    },
    {
      icon: <FaChartLine />,
      title: "4. Acompanhamento",
      description: "Sessões regulares focadas no seu desenvolvimento pessoal e superação de desafios emocionais."
    }
  ]

  const benefits = [
    "Atendimento humanizado e personalizado",
    "Ambiente seguro e acolhedor",
    "Sigilo profissional garantido",
    "Horários flexíveis",
    "Modalidade presencial e online",
    "Abordagem baseada em evidências científicas"
  ]

  return (
    <section id="servicos" className={styles.services} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2>Como Funciona</h2>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            Seu caminho para o bem-estar emocional começa aqui
          </p>
        </motion.div>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.stepCard}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.8 }}
            >
              <div className={styles.stepIcon}>
                {step.icon}
              </div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.connector}></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.benefitsSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3>Por que escolher meu atendimento?</h3>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className={styles.benefitItem}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              >
                <span className={styles.checkmark}>✓</span>
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

