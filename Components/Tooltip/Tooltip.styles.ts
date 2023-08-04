import styled from 'styled-components';
import { Tooltip } from 'react-tooltip';

type ReactTooltipProps = {
  maxWidth?: string;
};

export const ReactTooltip = styled(Tooltip)<ReactTooltipProps>`
  max-width: ${({ theme, maxWidth }) => maxWidth || theme.size.s15};
  font-size: ${({ theme }) => theme.size.s0d75};
  line-height: ${({ theme }) => theme.size.s1};
  background: ${({ theme }) => theme.borderColor.secondary};
  z-index: 99;
`;
