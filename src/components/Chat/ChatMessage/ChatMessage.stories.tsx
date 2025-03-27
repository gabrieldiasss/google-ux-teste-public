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
    <ChatMessage
      message={{
        id: '',
        message: `Para te informar sobre a data da pr\u00f3xima prova ou avalia\u00e7\u00e3o, preciso de mais informa\u00e7\u00f5es.  Por favor, me diga:\n\n* **Em qual curso voc\u00ea est\u00e1?** (Ex: T\u00e9cnico em Mec\u00e2nica, T\u00e9cnico em Enfermagem, etc.)\n* **Qual o nome da disciplina ou mat\u00e9ria?**\n* **Se poss\u00edvel, qual o nome do professor?**  (Isso pode me ajudar a encontrar informa\u00e7\u00f5es mais espec\u00edficas.)\n\nCom essas informa\u00e7\u00f5es, poderei te ajudar a descobrir a data da sua pr\u00f3xima avalia\u00e7\u00e3o.  Voc\u00ea tamb\u00e9m pode verificar o calend\u00e1rio acad\u00eamico do seu curso ou entrar em contato com a secretaria da sua escola ou diretamente com o professor da disciplina.\n`,
        file: undefined,
        from: 'user',
        type: 'text',
      }}
    />
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
