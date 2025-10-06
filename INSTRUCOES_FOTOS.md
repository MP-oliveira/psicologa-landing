# 📸 Como Adicionar as Fotos Reais

Este guia mostra como substituir os placeholders pelas fotos reais da Paula Aranchipe.

## 📁 Passos para Adicionar as Fotos

### 1. Preparar as Fotos

Salve as fotos na pasta `public/images/` com os seguintes nomes:

```
public/images/
├── paula-principal.jpg    # Foto para a seção "Sobre"
├── paula-1.jpg           # Foto para a galeria
├── paula-2.jpg           # Foto para a galeria
├── paula-3.jpg           # Foto para a galeria
└── logo.png              # Logo circular (opcional)
```

### 2. Atualizar a Seção "Sobre" (About.js)

No arquivo `components/sections/About.js`, substitua:

```javascript
<div className={styles.photoPlaceholder}>
  <span className={styles.photoInitials}>PA</span>
</div>
```

Por:

```javascript
<Image
  src="/images/paula-principal.jpg"
  alt="Paula Aranchipe - Psicóloga"
  fill
  style={{ objectFit: 'cover' }}
  priority
/>
```

E adicione o import no topo:
```javascript
import Image from 'next/image'
```

### 3. Atualizar a Galeria (Gallery.js)

No arquivo `components/sections/Gallery.js`, substitua cada placeholder:

```javascript
<div className={styles.imagePlaceholder}>
  <p>Atendimento Acolhedor</p>
</div>
```

Por:

```javascript
<Image
  src="/images/paula-1.jpg"
  alt="Paula Aranchipe - Atendimento"
  fill
  style={{ objectFit: 'cover' }}
/>
```

Faça o mesmo para `paula-2.jpg` e `paula-3.jpg`.

### 4. Opcional: Adicionar Foto no Hero

Para adicionar uma foto de fundo no Hero, edite `styles/Hero.module.css`:

```css
.hero {
  background: 
    linear-gradient(135deg, rgba(74, 124, 126, 0.9) 0%, rgba(107, 159, 161, 0.9) 100%),
    url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
}
```

## 🎨 Dicas de Otimização

### Dimensões Recomendadas:

- **paula-principal.jpg**: 800x1000px (proporção 3:4)
- **paula-1.jpg, paula-2.jpg, paula-3.jpg**: 600x750px
- **hero-background.jpg**: 1920x1080px
- **logo.png**: 500x500px

### Otimizar Imagens:

Use ferramentas como:
- [TinyPNG](https://tinypng.com/) - Compressão de imagens
- [Squoosh](https://squoosh.app/) - Redimensionar e otimizar

## 🔧 CSS já está preparado!

Os estilos já estão configurados para receber as imagens reais. Os placeholders coloridos serão substituídos automaticamente quando você adicionar as fotos.

## 📝 Exemplo Completo

Arquivo `About.js` com foto real:

```javascript
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

  // ... código anterior ...

  <div className={styles.imageFrame}>
    <Image
      src="/images/paula-principal.jpg"
      alt="Paula Aranchipe - Psicóloga CRP 03/33885"
      fill
      style={{ objectFit: 'cover' }}
      priority
    />
    <div className={styles.frameDecoration}></div>
  </div>
}
```

## ✅ Checklist

- [ ] Salvar fotos na pasta `public/images/`
- [ ] Renomear fotos conforme instruções
- [ ] Adicionar import do `Image` do Next.js
- [ ] Substituir placeholders pelas tags `<Image>`
- [ ] Verificar se as fotos aparecem corretamente
- [ ] Otimizar tamanho das imagens se necessário

---

**Nota**: As fotos já foram anexadas e estão prontas para serem salvas na pasta!

