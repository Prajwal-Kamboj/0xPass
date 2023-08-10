import styled, { css } from 'styled-components';

type SDWrapperProps = {
  $active: boolean;
};

type ImageWrapperProps = {
  $active: boolean;
};

export const SDWrapper = styled.div<SDWrapperProps>`
  background-color: #f5f5f5;
  border: 1px solid #d4d4d4;
  border-radius: 6px;
  cursor: pointer;

  ${({ theme, $active }) =>
    $active &&
    css`
      border: 1px solid ${theme.accentColor.primary};
    `}
`;

export const SDLabel = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0.6em 0.8em;
  color: #616161;
  user-select: none;
`;

export const ImageWrapper = styled.div<ImageWrapperProps>`
  width: 12px;
  transition: 0.3s;
  transform: ${({ $active }) => (!$active ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const SDListWrapper = styled.div`
  position: relative;
`;

export const SDList = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  top: 0.5rem;
  background: #ffffff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  max-height: 13rem;
  font-weight: 500;
  color: #616161;
  z-index: 9;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

type SDListItemProps = {
  $active?: boolean;
};

export const SDListItem = styled.li<SDListItemProps>`
  transition: 0.3s;
  padding: 0.6em 0.8em;

  &:not(:last-child) {
    border-bottom: 0.5px solid #d4d4d4;
  }

  &:hover {
    background: #f5f5f5;
  }

  ${({ theme, $active }) =>
    $active &&
    css`
      color: ${theme.accentColor.primary};
      font-weight: 800;
    `}
`;
