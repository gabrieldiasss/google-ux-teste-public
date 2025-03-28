import type { Meta, StoryObj } from '@storybook/react';

import { ChatMessage } from '.';
import React from 'react';

const meta: Meta<typeof ChatMessage> = {
  title: 'Components/ChatMessage',
  component: ChatMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChatMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <ChatMessage
        message={{
          id: '1',
          from: 'user',
          message: 'Hello',
          type: 'text',
        }}
      />
      <ChatMessage
        message={{
          id: '',
          message: `Ok, vou inventar uma tabela.  Esta tabela mostra um poss\u00edvel cronograma de estudo para uma prova de Matem\u00e1tica, com foco em Geometria Plana,  durante uma semana:\n\n\n| Dia da Semana | Data       | T\u00f3pico de Estudo          | Tempo de Estudo | Atividades                               | Observa\u00e7\u00f5es                                   |\n|---------------|------------|---------------------------|-----------------|-------------------------------------------|-----------------------------------------------|\n| Segunda-feira | 2024-03-04 | \u00c2ngulos e Tri\u00e2ngulos       | 1 hora           | Ler o material, fazer exerc\u00edcios b\u00e1sicos     | Revisar conceitos b\u00e1sicos de geometria          |\n| Ter\u00e7a-feira  | 2024-03-05 | Quadril\u00e1teros              | 1 hora           | Ler o material, resolver problemas de aplica\u00e7\u00e3o | Enfatizar propriedades de cada quadril\u00e1tero     |\n| Quarta-feira | 2024-03-06 | C\u00edrculo e Circunfer\u00eancia   | 1.5 horas        | Ler o material, resolver problemas complexos | Desenhar figuras para melhor visualiza\u00e7\u00e3o      |\n| Quinta-feira | 2024-03-07 | \u00c1reas de Figuras Planas    | 1 hora           | Resolver exerc\u00edcios de aplica\u00e7\u00e3o            | Usar f\u00f3rmulas e memorizar as principais \u00e1reas |\n| Sexta-feira  | 2024-03-08 | Revis\u00e3o Geral              | 2 horas           | Resolver exerc\u00edcios variados, simulados      | Identificar pontos fracos e refor\u00e7ar estudos   |\n| S\u00e1bado       | 2024-03-09 | Descanso                   | 0 horas          |                                           |                                               |\n| Domingo      | 2024-03-10 | Revis\u00e3o Final             | 1 hora           | Revisar os pontos mais importantes          | Foco em resolu\u00e7\u00e3o de problemas                |\n\n\nLembre-se que este \u00e9 apenas um exemplo.  Para um cronograma mais preciso e eficaz, preciso das informa\u00e7\u00f5es sobre sua prova que mencionei antes.\n`,
          file: undefined,
          from: 'nai',
          type: 'text',
        }}
      />
    </>
  ),
};

export const WithTyping: Story = {
  render: () => (
    <div style={{ width: '50dvw' }}>
      <ChatMessage
        message={{
          id: '1',
          from: 'user',
          message: 'Hello',
          type: 'text',
        }}
      />
      <ChatMessage
        message={{
          id: '1',
          from: 'nai',
          message: 'Hello, how are you?',
          type: 'text',
        }}
      />
      <ChatMessage
        message={{
          id: '1',
          from: 'nai',
          message: 'Hello',
          type: 'text',
        }}
        isNaiTyping
      />
    </div>
  ),
};

export const WithFile: Story = {
  render: () => (
    <ChatMessage
      message={{
        id: '2',
        from: 'user',
        file: 'https://example.com/file.pdf',
        type: 'file',
      }}
    />
  ),
};

export const WithAudio: Story = {
  render: () => (
    <ChatMessage
      message={{
        id: '2',
        from: 'nai',
        file: 'https://example.com/audio.mp3',
        type: 'audio',
      }}
    />
  ),
};
