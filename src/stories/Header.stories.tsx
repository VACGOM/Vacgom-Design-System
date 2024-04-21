import { Meta, StoryFn } from '@storybook/react';
import { Header, HeaderProps } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: () => console.log('Logged in!'),
    onLogout: () => console.log('Logged out!'),
    onCreateAccount: () => console.log('Account created!'),
  },
} as Meta<HeaderProps>;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
