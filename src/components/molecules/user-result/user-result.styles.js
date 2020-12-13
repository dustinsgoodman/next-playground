import styled from 'styled-components';

export const UserResultContainer = styled.a`
  border: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  width: 100%;

  &:hover {
    background-color: #eee;
  }
`;

export const AvatarContainer = styled.div`
  margin-right: 0.25rem;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatsContainer = styled.span`
  margin-right: 1rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NameDisplay = styled.span`
  color: blue;
  margin-right: 0.25rem;
`;

export const UsernameDisplay = styled.span`
  color: gray;
  font-weight: 900;
`;
