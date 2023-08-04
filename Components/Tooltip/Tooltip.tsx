import React from 'react';
import { PlacesType } from 'react-tooltip';
import { ReactTooltip } from './Tooltip.styles';

type TooltipProps = {
  id: string;
  children: React.ReactNode;
  place?: PlacesType;
  maxWidth?: string;
  isOpen?: boolean;
};

function Tooltip({ id, children, place, maxWidth, isOpen }: TooltipProps) {
  return (
    <ReactTooltip
      anchorSelect={`#${id}`}
      place={place}
      maxWidth={maxWidth}
      isOpen={isOpen}
    >
      {children}
    </ReactTooltip>
  );
}

Tooltip.defaultProps = {
  place: 'top' as PlacesType,
  maxWidth: undefined,
  isOpen: undefined,
};

export { Tooltip };
