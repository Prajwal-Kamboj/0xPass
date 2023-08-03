import styled from 'styled-components';
import Popup from 'reactjs-popup';

export const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    left: 0;
    /* opacity: .5!important; */
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1040;
  }
  // use your custom style for ".popup-content"
  &-content {
    background-color: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 0.76875rem 2.4875rem rgba(52, 58, 64, 0.3), 0 1.3375rem 1.70625rem rgba(52, 58, 64, 0.3), 0 0.55rem 0.53125rem rgba(0, 0, 0, 0.05),
      0 0.225rem 0.4375rem rgba(52, 58, 64, 0.3);
    overflow: hidden;
    position: fixed;
    text-align: center;
    z-index: 99999;
    max-width: 28rem;
  }
`;

export const ModalWrapper = styled.div`
  background-color: white;
  padding: 1.5rem;
  opacity: 1 !important;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const ModalCancelButton = styled.button`
  cursor: pointer;
  color: #1461db;
  border: none;
  background: none;
`;
