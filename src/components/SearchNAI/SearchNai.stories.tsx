import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SearchNAI } from '.';
import React from 'react';

const meta: Meta<typeof SearchNAI> = {
  title: 'Components/SearchNAI',
  component: SearchNAI,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchNAI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SearchNAI
      isNaiTyping={false}
      isFileLoaded={false}
      onUploadFile={fn()}
      onSendMessage={fn()}
      onAudioRecorded={fn()}
      onClickAddNewChat={fn()}
      onClickChatHistory={fn()}
      historyData={[
        {
          id: '1',
          title: 'Title',
          date: new Date(),
        },
      ]}
      onInputChange={fn()}
      renderMenuPosition="top"
      shouldShowButtons={true}
    />
  ),
};

export const Typing: Story = {
  render: () => (
    <SearchNAI
      isNaiTyping={true}
      isFileLoaded={false}
      onUploadFile={fn()}
      onSendMessage={fn()}
      onAudioRecorded={fn()}
      onClickAddNewChat={fn()}
      onClickChatHistory={fn()}
      historyData={[
        {
          id: '1',
          title: 'Title',
          date: new Date(),
        },
      ]}
      onInputChange={fn()}
      renderMenuPosition="top"
      shouldShowButtons={true}
    />
  ),
};

export const FileLoaded: Story = {
  render: () => (
    <SearchNAI
      isNaiTyping={false}
      isFileLoaded={true}
      onUploadFile={fn()}
      onSendMessage={fn()}
      onAudioRecorded={fn()}
      onClickAddNewChat={fn()}
      onClickChatHistory={fn()}
      historyData={[
        {
          id: '1',
          title: 'Title',
          date: new Date(),
        },
      ]}
      onInputChange={fn()}
      renderMenuPosition="top"
      shouldShowButtons={true}
    />
  ),
};

export const NoButtons: Story = {
  render: () => (
    <SearchNAI
      isNaiTyping={false}
      isFileLoaded={false}
      onUploadFile={fn()}
      onSendMessage={fn()}
      onAudioRecorded={fn()}
      onClickAddNewChat={fn()}
      onClickChatHistory={fn()}
      historyData={[
        {
          id: '1',
          title: 'Title',
          date: new Date(),
        },
      ]}
      onInputChange={fn()}
      renderMenuPosition="top"
      shouldShowButtons={false}
    />
  ),
};

export const NoHistory: Story = {
  render: () => (
    <SearchNAI
      isNaiTyping={false}
      isFileLoaded={false}
      onUploadFile={fn()}
      onSendMessage={fn()}
      onAudioRecorded={fn()}
      onClickAddNewChat={fn()}
      onClickChatHistory={fn()}
      onInputChange={fn()}
      renderMenuPosition="top"
      shouldShowButtons={true}
    />
  ),
};
