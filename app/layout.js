import './globals.css'
import TreeSidebar from '../components/TreeSidebar'

export const metadata = {
  title: 'Paula Aranchipe - Psicóloga | CRP-03/33885',
  description: 'Psicóloga especializada em TCC, Adicção e Transtorno do Espectro Autista (TEA). Atendimento humanizado e acolhedor.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <TreeSidebar />
        {children}
      </body>
    </html>
  )
}

