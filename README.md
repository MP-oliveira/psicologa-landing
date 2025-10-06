# 🧠 Landing Page - Paula Aranchipe | Psicóloga

Landing page moderna e responsiva para divulgação dos serviços de psicologia da **Paula Aranchipe - CRP 03/33885**.

## ✨ Características

- 🎨 Design moderno e clean
- 🌊 Animações suaves com Framer Motion
- 📱 Totalmente responsivo
- ♿ Acessível
- 🎯 Otimizado para conversão
- 💚 Integração com WhatsApp
- 📧 Formulário de contato

## 🛠️ Tecnologias

- **Next.js 15** - Framework React
- **React 19** - Biblioteca JavaScript
- **CSS Modules** - Estilização com CSS puro
- **Framer Motion** - Animações
- **React Icons** - Ícones

## 📋 Especialidades Destacadas

- Terapia Cognitivo-Comportamental (TCC)
- Adicção e Dependência Química
- Transtorno do Espectro Autista (TEA)

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura do Projeto

```
psicologa-landing/
├── app/
│   ├── layout.js           # Layout principal
│   ├── page.js             # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── sections/           # Componentes de seção
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Gallery.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   └── WhatsAppButton.js   # Botão flutuante WhatsApp
├── styles/                 # CSS Modules
│   ├── Hero.module.css
│   ├── About.module.css
│   ├── Services.module.css
│   ├── Gallery.module.css
│   ├── Contact.module.css
│   ├── Footer.module.css
│   └── WhatsAppButton.module.css
└── public/
    └── images/             # Imagens e assets
```

## 🎨 Paleta de Cores

- **Primária**: `#4a7c7e` (Verde-azulado)
- **Secundária**: `#f5f5f0` (Bege claro)
- **Destaque**: `#6b9fa1` (Azul suave)

## 📝 Personalização

### Adicionar Fotos Reais

As fotos anexadas podem ser adicionadas facilmente:

1. Salve as fotos na pasta `public/images/`
2. Siga as instruções detalhadas em `INSTRUCOES_FOTOS.md`
3. As fotos serão usadas em:
   - Seção "Sobre" (foto principal)
   - Galeria (3 fotos)
   - Hero (opcional - foto de fundo)

**Nota**: Os placeholders coloridos já estão estilizados e prontos para receber as fotos!

### Alterar WhatsApp

Nos arquivos `Hero.js`, `Contact.js` e `WhatsAppButton.js`, substitua o número:
```javascript
https://wa.me/5571999999999
```

### Alterar Cores

Edite as variáveis CSS em `app/globals.css`:
```css
:root {
  --primary-color: #4a7c7e;
  --secondary-color: #f5f5f0;
  --accent-color: #6b9fa1;
}
```

## 📦 Deploy

Recomendado: [Vercel](https://vercel.com)

```bash
npm run build
```

## 📄 Licença

Projeto desenvolvido para Paula Aranchipe - Psicóloga.

---

Desenvolvido com 💚 para cuidar de você

