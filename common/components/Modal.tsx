import React, { useState, useEffect, type PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
}

export const Modal = ({ isOpen, children }: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  useEffect(
    function lockBodyScroll() {
      if (isModalOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
      return () => {
        document.body.style.overflow = "unset";
      };
    },
    [isModalOpen]
  );

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {!isSSR &&
        isOpen &&
        createPortal(
          <ModalContainer>
            <ModalBackground onClick={handleModalClose} />
            <BaseContainer>
              {children}
              <CloseButton onClick={handleModalClose} />
            </BaseContainer>
          </ModalContainer>,
          document.body
        )}
    </>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const BaseContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 600px;
  padding: 24px;
  border-radius: 24px;
  background-color: #caced7;

  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 24px;
  height: 24px;
  background-color: #593f3f;
  display: flex;
`;
