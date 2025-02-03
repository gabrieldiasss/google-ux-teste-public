import type { Meta, StoryObj } from '@storybook/react';

import { Chat } from '.';
import React from 'react';

const meta: Meta<typeof Chat> = {
  title: 'Components/Chat',
  component: Chat,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Chat />,
};

export const WithMessages: Story = {
  render: () => (
    <Chat
      chatMessages={[
        {
          id: '1',
          from: 'user',
          message: 'Hello',
          type: 'text',
        },
        {
          id: '2',
          from: 'nai',
          message: 'Hi there!',
          type: 'text',
        },
        {
          id: '3',
          from: 'user',
          message: 'How are you?',
          type: 'text',
        },
        {
          id: '4',
          from: 'nai',
          message: 'I am good, thank you!',
          type: 'text',
        },
      ]}
    />
  ),
};

export const WithTyping: Story = {
  render: () => (
    <Chat
      chatMessages={[
        {
          id: '1',
          from: 'user',
          message: 'Hello',
          type: 'text',
        },
        {
          id: '2',
          from: 'nai',
          message: 'Hi there!',
          type: 'text',
        },
        {
          id: '3',
          from: 'user',
          message: 'How are you?',
          type: 'text',
        },
        {
          id: '4',
          from: 'nai',
          message: 'I am good, thank you!',
          type: 'text',
        },
      ]}
      isNaiTyping
    />
  ),
};

export const WithFile: Story = {
  render: () => (
    <Chat
      chatMessages={[
        {
          id: '1',
          from: 'user',
          message: 'Hello',
          type: 'text',
        },
        {
          id: '2',
          from: 'nai',
          file: 'https://example.com/file.pdf',
          type: 'file',
        },
        {
          id: '3',
          from: 'user',
          message: 'How are you?',
          type: 'text',
        },
        {
          id: '4',
          from: 'nai',
          message: 'I am good, thank you!',
          type: 'text',
        },
      ]}
    />
  ),
};

export const WithAudio: Story = {
  render: () => (
    <Chat
      chatMessages={[
        {
          id: '1',
          from: 'user',
          message: 'Hello',
          type: 'text',
        },
        {
          id: '2',
          from: 'nai',
          file: 'https://example.com/audio.mp3',
          type: 'audio',
        },
        {
          id: '3',
          from: 'user',
          message: 'How are you?',
          type: 'text',
        },
        {
          id: '4',
          from: 'nai',
          message: 'I am good, thank you!',
          type: 'text',
        },
      ]}
    />
  ),
};

export const WithMinimize: Story = {
  render: () => <Chat onMinimizeChat={() => alert('Chat minimized!')} />,
};
