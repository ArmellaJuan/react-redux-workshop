import React from 'react';

import UserListItem from '../UserListItem';

const UserList = props => {
  return props.users.map(user => <UserListItem user={user} key={user.id} />);
};

export default UserList;
