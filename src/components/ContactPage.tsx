import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
    contactId: string;
}

export const ContactPage: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { contactId } = match.params;

  return <h2>{contactId}</h2>;
};
