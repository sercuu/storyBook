import React from 'react';
import Avatar from '../components/Avatar'
import { withKnobs, select, boolean,text } from '@storybook/addon-knobs';

// …
export default {
  title: 'Avatar',
  component: Avatar,
};

export const knobs = () => (
  <Avatar
    size={select('Size', ['tiny', 'small', 'medium', 'large'])}
    username={text('Title')}
    src={text('link','https://avatars2.githubusercontent.com/u/263385')}
  />
);

knobs.story = {
  decorators: [withKnobs],
};