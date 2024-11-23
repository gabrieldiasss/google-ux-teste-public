# design-system-senai-react

Este é o **Design System do SENAI**, criado para padronizar e facilitar o desenvolvimento de interfaces acessíveis, responsivas e consistentes na rede SENAI. Este sistema foi desenvolvido em **React** e prioriza a acessibilidade, usabilidade e personalização, alinhado com as necessidades específicas do ecossistema SENAI.

---

## **Design no Figma**

O Design System do SENAI foi cuidadosamente planejado e documentado no Figma, onde você pode visualizar e explorar os protótipos, componentes e diretrizes visuais. Acesse o arquivo do Figma pelo link abaixo:

🔗 [Design System SENAI - Figma](https://www.figma.com/design/IggEFikdXEoJKTi9UxnsTI/Design-System?m=auto&t=rAr6GFNQGKZlUZnU-6)

---

## **Recursos principais**

- **Componentes reutilizáveis**: Inclui botões, inputs, modais, outros elementos padronizados.
- **Acessibilidade (WCAG)**: Totalmente compatível com boas práticas de acessibilidade.
- **Tematização**: Suporte para temas customizáveis.
- **Compatibilidade**: Desenvolvido com suporte a React 18+ e TypeScript.
- **Estilo moderno**: Baseado nas diretrizes visuais do SENAI.

---

## **Requisitos**

- Node.js 18+
- Npm, yarn ou pnpm (recomendado)
- React 18+

---

## **Dependências principais**

Este projeto utiliza as seguintes bibliotecas, essenciais para o funcionamento e desenvolvimento do Design System SENAI:

#### **Bibliotecas principais**

- **React 18+**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript para tipagem estática.
- **Styled-components**: Para estilização de componentes em JavaScript/TypeScript.
- **@headlessui/react**: Componentes acessíveis sem estilo para React.
- **clsx**: Utilitário para gerenciar classes condicionalmente.
- **@vanilla-extract/css**: Sistema de estilização CSS com integração ao TypeScript.

#### **Ferramentas de construção (Build Tools)**

- **rollup**: Bundler para JavaScript.
- **@rollup/plugin-commonjs**: Permite o uso de módulos CommonJS com Rollup.
- **@rollup/plugin-image**: Permite importar imagens no processo de bundling.
- **@rollup/plugin-node-resolve**: Resolve dependências externas com Rollup.
- **@rollup/plugin-terser**: Minifica o código JavaScript com Rollup.
- **@rollup/plugin-typescript**: Suporte ao TypeScript no Rollup.
- **rollup-plugin-dts**: Gera definições de tipos `.d.ts` para o pacote.
- **rollup-plugin-peer-deps-external**: Exclui dependências peer do bundle.
- **rollup-plugin-postcss**: Processa CSS no Rollup.

#### **Ferramentas de qualidade de código**

- **eslint**, **eslint-config-prettier**, **prettier**: Ferramentas para garantir a qualidade e consistência do código.

#### **Tipos TypeScript**

- **@types/react** e **@types/react-dom**: Tipos TypeScript para React.

---

## **Instalação**

Para utilizar este Design System no seu projeto:

1. Instale o pacote:

   ```bash
   npm install design-system-senai-react
   ```

   ou

   ```bash
   yarn add design-system-senai-react
   ```

   ou

   ```bash
   pnpm add design-system-senai-react
   ```

2. Importe os componentes no seu projeto:

   ```tsx
   import { Button } from 'design-system-senai-react';

   function App() {
     return (
       <div>
         <Button variant="filled">Clique aqui</Button>
       </div>
     );
   }

   export default App;
   ```

---

## **Como rodar localmente**

Se você deseja contribuir ou rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://CNI-STI@dev.azure.com/CNI-STI/Google-UX/_git/Google-UX
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd design-system-senai-react
   ```

3. Instale as dependências:

   ```bash
   pnpm install
   ```

4. Realizar o build ou iniciar o modo de desenvolvimento

   ```bash
   pnpm run build
   ```

   ou

   ```bash
   pnpm run dev
   ```

---

## **Contribuição**

Contribuições são bem-vindas! Para contribuir:

1. Crie uma branch para sua feature/fix:

   ```bash
   git checkout -b feature/nome-da-feature
   ```

2. Após realizar as alterações, faça o commit:

   ```bash
   git commit -m "Descrição das alterações"
   ```

3. Envie a branch para o repositório remoto:

   ```bash
   git push origin feature/nome-da-feature
   ```

4. Abra um Pull Request no repositório principal.

---

💡 **Nota**: Este Design System foi desenvolvido com foco em acessibilidade e padrões de design moderno. Para garantir a melhor experiência, mantenha o pacote sempre atualizado.
