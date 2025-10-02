# Projeto Final SENAI: Site Zhu Coffee

Este é o site desenvolvido para a cafeteria fictícia **Zhu Coffee**, criado como Projeto Final para o Front-end Programmer SENAI.

## Guia Rápido para os Requisitos

Esta tabela mapeia a localização exata de cada requisito no código para facilitar a revisão.

| Requisito | Status | Localização no Código | Detalhes da Implementação |
| :--- | :--- | :--- | :--- |
| **1. Tecnologia (HTML/CSS/JS/Framework)** | ✅ | | Framework: **MasterCSS**. |
| **2. Mínimo de 3 Páginas** | ✅ 
| **3. Carrossel Informativo** | ✅ | `index.html` | Usa **Swiper.js**. Aparece apenas no layout mobile, na seção de produtos. |
| **4. Organização Semântica** | ✅ |
| **5. Formulário (Login/Cadastro)** | ✅ | `/entrar/`, `/cadastar/` | Validação em `src/scripts/cadastrar`. |
| **6. Página de Integrantes** | ✅ | `/grupo/` | Fotos em formato **avatar** com informações ao lado. |
| **7. Responsividade / Imagens Condicionais** | ✅ | `index.html` (Header) | Implementação de `<picture>` e `<source>` para carregamento condicional de imagens (mobile/desktop). |
| **8. Pseudo-classe e Pseudo-elemento** | ✅ | `/entrar/`, `/cadastar/`, `/src/scripts/map.js` | **Pseudo-elemento:** `::placeholder` nos campos de input. **Pseudo-classe:** `:hover` para interatividade no mapa SVG. |

## Como Executar o Projeto

1.  Clone este repositório.
2.  Abra o arquivo **`index.html`** diretamente no seu navegador.