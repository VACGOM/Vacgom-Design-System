import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Page>;

export const LoggedOut: StoryObj<typeof Page> = {};

export const LoggedIn: StoryObj<typeof Page> = {
  play: async ({ canvasElement }) => {
    const canvas = canvasElement as HTMLElement; // 타입 캐스팅
    const loginButton = canvas.querySelector('[role="button"][name="Log in"]') as HTMLElement; // 셀렉터 사용
    if (loginButton) loginButton.click();

    // 동작 확인을 위해 setTimeout 등의 비동기 처리를 사용할 수 있음
    setTimeout(() => {
      const logoutButton = canvas.querySelector('[role="button"][name="Log out"]') as HTMLElement;
      if (logoutButton) {
        console.log('Logout button is present.');
      }
    }, 1000);
  },
};
