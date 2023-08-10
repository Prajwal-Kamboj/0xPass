import { Meta, StoryObj } from '@storybook/react';
import { SelectDropdown } from './select-dropdown';

const meta = {
  title: 'Components/SelectDropdown',
  component: SelectDropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectDropdown>;

// eslint-disable-next-line import/no-default-export
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Lychee', value: 'lychee' },
      { label: 'Strawberry', value: 'strawberry' },
    ],
    // eslint-disable-next-line no-console
    onSelectCallback: console.log,
  },
};

export const ValueSelected: Story = {
  args: {
    selectedValue: 'strawberry',
    options: [
      { label: 'Lychee', value: 'lychee' },
      { label: 'Strawberry', value: 'strawberry' },
    ],
    // eslint-disable-next-line no-console
    onSelectCallback: console.log,
  },
};
