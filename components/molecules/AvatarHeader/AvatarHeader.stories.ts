import type { Meta, StoryObj } from "@storybook/react";

import { AvatarHeader } from "./AvatarHeader";

const meta: Meta<typeof AvatarHeader> = {
  title: "Molecules/AvatarHeader",
  component: AvatarHeader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AvatarHeader>;

export const Primary: Story = {
  args: {
    firstName: "John",
    lastName: "Doe",
  },
};
