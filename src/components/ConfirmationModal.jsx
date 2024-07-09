import styled, { keyframes } from 'styled-components';

function ConfirmationModal({ show, message, onClose }) {
    if (!show) return null;

    return (
        <ModalOverlay>
            <ModalContent>
                <Message>{message}</Message>
                <CloseButton onClick={onClose}>x</CloseButton>
            </ModalContent>
        </ModalOverlay>
    );
}

export default ConfirmationModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
`;

// Définir l'animation de haut en bas
const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  animation: ${slideDown} 0.5s ease-out; // Appliquer l'animation ici
`;

const Message = styled.span`
  flex-grow: 1;
  margin-right: 10px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;
`;
