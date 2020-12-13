import React from 'react';
import Avatar from 'components/atoms/avatar';

import {
  OrganizationResultContainer,
  AvatarContainer,
  DetailsContainer,
  StatsContainer,
  Row,
  NameDisplay,
  UsernameDisplay,
} from './organization-result.styles';

const OrganizationResult = ({
  avatarUrl,
  description,
  email,
  location,
  login,
  name,
  url,
}) => (
  <OrganizationResultContainer href={url} target="_blank">
    <AvatarContainer>
      <Avatar atl={login} src={avatarUrl} />
    </AvatarContainer>
    <DetailsContainer>
      <Row>
        <NameDisplay>Organization: {name}</NameDisplay>
        <UsernameDisplay>{login}</UsernameDisplay>
      </Row>
      <Row>
        <StatsContainer>{description}</StatsContainer>
      </Row>
      <Row>
        <StatsContainer>{location || 'Location Unavailable'}</StatsContainer>
        <StatsContainer>{email || 'Email Unavailable'}</StatsContainer>
      </Row>
    </DetailsContainer>
  </OrganizationResultContainer>
);

export default OrganizationResult;
