import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import useHooks from '../../hooks';
import { UserPage } from './UserPage';

interface MatchParams {
    contactId: string;
}

export const ContactPage: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { contactId } = match.params;
  const { useAppSelector } = useHooks();

  const currentUser = useAppSelector((state) => state.contacts
    .find((user) => user.id === contactId));

  return <UserPage currentUser={currentUser} />;
};
