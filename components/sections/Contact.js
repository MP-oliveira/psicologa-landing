'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import styles from '../../styles/Contact.module.css'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailSubject = `Nova mensagem de ${formData.name} - Site Paula Aranchipe`
    const emailBody = `Nome: ${formData.name}%0A%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`
    window.open(`mailto:paula.aranchipe@hotmail.com?subject=${emailSubject}&body=${emailBody}`, '_blank')
    
    // Limpa o formulário e mostra mensagem de confirmação
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    const message = `Olá! Meu nome é ${formData.name}.%0A%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`
    window.open(`https://wa.me/5571981366264?text=${message}`, '_blank')
    
    // Limpa o formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "(71) 98136-6264",
      link: "https://wa.me/5571981366264"
    },
    {
      icon: <FaEnvelope />,
      title: "E-mail",
      value: "paula.aranchipe@hotmail.com",
      link: "mailto:paula.aranchipe@hotmail.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Localização",
      value: "Salvador - BA",
      link: "#"
    }
  ]

  return (
    <section className={styles.contact} id="contato" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2>Entre em Contato</h2>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            Estou aqui para ajudar você. Vamos conversar?
          </p>
        </motion.div>

        <div className={styles.contactContainer}>
          <motion.div
            className={styles.formSection}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Telefone/WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Como posso ajudar você?"
                ></textarea>
              </div>

              {submitted && (
                <div className={styles.successMessage}>
                  ✓ Formulário preparado! Complete o envio no aplicativo aberto.
                </div>
              )}

              <div className={styles.buttonGroup}>
                <button type="submit" className={styles.submitBtn}>
                  <FaEnvelope /> Enviar via Email
                </button>
                <button type="button" onClick={handleWhatsAppSubmit} className={styles.whatsappBtn}>
                  <FaWhatsapp /> Enviar via WhatsApp
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            className={styles.infoSection}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className={styles.infoCard}>
              <h3>Formas de Contato</h3>
              <p className={styles.infoDescription}>
                Escolha a forma mais conveniente para entrar em contato. 
                Respondo todas as mensagens com carinho e atenção.
              </p>

              <div className={styles.contactMethods}>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactMethod}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.methodIcon}>
                      {info.icon}
                    </div>
                    <div className={styles.methodContent}>
                      <h4>{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className={styles.social}>
                <p>Me siga nas redes sociais:</p>
                <div className={styles.socialLinks}>
                  <a href="https://www.instagram.com/paulaaranchipe.psi/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://wa.me/5571981366264" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

