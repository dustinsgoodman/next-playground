import React from 'react';
import Avatar from 'components/atoms/avatar';

import {
  UserResultContainer,
  AvatarContainer,
  DetailsContainer,
  StatsContainer,
  Row,
  NameDisplay,
  UsernameDisplay,
} from './user-result.styles';

const UserResult = ({
  avatarUrl,
  email,
  followersCount,
  followingCount,
  location,
  login,
  name,
  starredRepositoriesCount,
  url,
}) => (
  <UserResultContainer href={url} target="_blank">
    <AvatarContainer>
      <Avatar atl={login} src={avatarUrl} />
    </AvatarContainer>
    <DetailsContainer>
      <Row>
        <NameDisplay>{name}</NameDisplay>
        <UsernameDisplay>{login}</UsernameDisplay>
      </Row>
      <Row>
        <StatsContainer>Followers: {followersCount}</StatsContainer>
        <StatsContainer>Following: {followingCount}</StatsContainer>
        <StatsContainer>Starred: {starredRepositoriesCount}</StatsContainer>
      </Row>
      <Row>
        <StatsContainer>{location || 'Location Unavailable'}</StatsContainer>
        <StatsContainer>{email || 'Email Unavailable'}</StatsContainer>
      </Row>
    </DetailsContainer>
  </UserResultContainer>
);

export default UserResult;
