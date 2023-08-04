import { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

// eslint-disable-next-line import/no-default-export
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <>
      <div
        id="rateInfoIconDefault"
        style={{ display: 'inline-block' }}
      >
        Tooltip
      </div>

      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Tooltip {...args}>{args.children}</Tooltip>
    </>
  ),
  args: {
    id: 'rateInfoIconDefault',
    children: 'Lorem ipsum dolor sit amet guas consectetur adipisicing elit hala',
    place: 'right',
    maxWidth: '15rem',
  },
};

export const ControlledOpenState: Story = {
  render: (args) => (
    <>
      <div
        id="rateInfoIconControlled"
        style={{ display: 'inline-block' }}
      >
        Tooltip
      </div>

      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Tooltip {...args}>{args.children}</Tooltip>
    </>
  ),
  args: {
    id: 'rateInfoIconControlled',
    children: 'Lorem ipsum dolor sit amet guas consectetur adipisicing elit hala',
    place: 'right',
    isOpen: true,
  },
};
