import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import '../src/index.css';

import UserListItem from '../src/components/UserListItem';
import UserList from '../src/components/UserList';
import UserForm from '../src/components/UserForm';

const sampleUser1 = {id: 1, username: 'test', email: 'test@test.com'};
const sampleUser2 = {id: 2, username: 'test2', email: 'test2@test.com'};

storiesOf('UserListItem').add('default', () => <UserListItem user={sampleUser1} />);

storiesOf('UserList').add('default', () => <UserList users={[sampleUser1, sampleUser2]} />);

storiesOf('UserForm').add('default', () => <UserForm onSubmit={action('clicked')} />);
