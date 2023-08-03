import React, { useContext } from 'react';
import LaddaButton, { EXPAND_RIGHT } from 'react-ladda';
import { UserContext } from 'Context/UserContext';
import { StyledPopup, ModalButtonWrapper, ModalCancelButton, ModalWrapper } from './Modal.styles';

type ModalProps = {
  open: boolean;
  children: React.ReactNode;
  confirmButtonText?: string;
  isCancelButton?: boolean;
  cancelButtonText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
};

function Modal({ open, children, confirmButtonText, isCancelButton, cancelButtonText, onConfirm, onCancel, onClose }: ModalProps) {
  const context = useContext(UserContext);
  const { theme } = context || { theme: { themeButtonClass: '' } };

  return (
    <StyledPopup
      modal
      open={open}
      lockScroll
      closeOnDocumentClick
      closeOnEscape
      onClose={onClose}
    >
      <ModalWrapper>
        {children}

        <ModalButtonWrapper>
          {isCancelButton && <ModalCancelButton onClick={onCancel}>{cancelButtonText}</ModalCancelButton>}

          <LaddaButton
            // @typescript-eslint/restrict-template-expressions
            className={`btn ${theme.themeButtonClass}`}
            onClick={onConfirm}
            data-style={EXPAND_RIGHT}
          >
            {confirmButtonText}
          </LaddaButton>
        </ModalButtonWrapper>
      </ModalWrapper>
    </StyledPopup>
  );
}

Modal.defaultProps = {
  confirmButtonText: 'Ok',
  isCancelButton: true,
  cancelButtonText: 'Cancel',
  onConfirm: undefined,
  onCancel: undefined,
  onClose: undefined,
};

export { Modal };
