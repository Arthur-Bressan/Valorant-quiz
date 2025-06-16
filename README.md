# 🧠 Emoji Guess – Jogo de Adivinhação com Emojis

**Emoji Guess** é um mini-jogo interativo onde o jogador tenta adivinhar uma sequência de emojis (incluindo bandeiras de países) em até quatro tentativas. A cada tentativa, uma animação é exibida e um som de feedback é tocado.

---

## 🎯 Objetivo do Jogo

Descubra a sequência correta de emojis usando as dicas visuais fornecidas. Cada tentativa revela uma nova caixa com efeito visual e som para criar uma experiência mais dinâmica.

---

## 🛠️ Habilidades Desenvolvidas

Durante o desenvolvimento deste projeto, fui desafiado a combinar lógica, interatividade e experiência do usuário. Aqui estão as habilidades técnicas que pratiquei e desenvolvi:

### 🎨 Front-end com React

- Criação de **componentes funcionais reutilizáveis** com `useEffect` e `useRef`
- Controle de **estados dinâmicos** baseados em interações do usuário (`attempt`, `showResult`, etc.)

### ⚙️ DOM Animations com Web Animations API

- Animação fluida de rotação (`rotateY`) e desfoque (`blur`) usando `element.animate()`
- Controle preciso da temporização (`offsets`) e curvas de animação personalizadas (`cubic-bezier`)

### 🔊 Manipulação de Áudio em Interfaces

- Sincronização de **áudio com animações**
- **Preload e otimização** de som para evitar atrasos em dispositivos móveis
- Compatibilidade cross-platform (desktop e mobile)

### 📁 Organização de Projeto

- Uso da pasta `public/assets` para assets estáticos como áudio e imagens
- Estrutura modular e semântica para componentes e estilos (`EmojiBoxes.css`)

### 📱 Otimização Mobile

- Identificação e solução de **delays específicos em navegadores mobile**
- Estratégias como pré-carregamento de áudio e fallback para diferentes formatos


---

## 🚀 Como Rodar o Projeto

```bash
# Instale as dependências
npm install

# Rode em ambiente local
npm run dev
```

###📌 Tecnologias Utilizadas
- React.js

- CSS (Keyframes + Web Animations API)

- JavaScript ES6+

- HTML5 Audio API

###💡 Próximos Passos (Ideias Futuras)
 - Sistema de pontuação e ranking

- Outros modos de jogo

 - Compartilhamento de resultados nas redes sociais

### 👨‍💻 Sobre o Desenvolvedor
Este projeto é parte do meu processo de evolução como programador front-end. Com ele, busquei desenvolver minha autonomia, aprender a resolver problemas reais como atrasos de áudio no mobile, e aperfeiçoar minha capacidade de criar experiências ricas e envolventes com JavaScript e React.
