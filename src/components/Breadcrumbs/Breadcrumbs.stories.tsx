import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs } from '.';
import React from 'react';

const meta: Meta<typeof Breadcrumbs> = {
  // Update the type of meta
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <Breadcrumbs
        breadcrumbItems={[
          {
            name: 'Home',
            link: '/',
          },
        ]}
      />
      <Breadcrumbs
        breadcrumbItems={[
          {
            name: 'Home',
            link: '/',
          },
          {
            name: 'About',
            link: '/about',
          },
        ]}
      />
      <Breadcrumbs
        breadcrumbItems={[
          {
            name: 'Home',
            link: '/',
          },
          {
            name: 'About',
            link: '/about',
          },
          {
            name: 'Contact',
            link: '/contact',
          },
        ]}
      />

      <Breadcrumbs
        breadcrumbItems={[
          {
            name: 'Home',
            link: '/',
          },
          {
            name: 'About',
            link: '/about',
          },
          {
            name: 'Contact',
            link: '/contact',
          },
          {
            name: 'Blog',
            link: '/blog',
          },
        ]}
      />
    </>
  ),
};
