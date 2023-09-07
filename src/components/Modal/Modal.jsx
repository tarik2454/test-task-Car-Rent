import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/Global/globalSlice';
import { showSelect } from 'redux/TransactionCategories/categoriesSlice';
import { styled } from 'styled-components';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEscape = event => {
      if (event.code === 'Escape') {
        dispatch(closeModal());
        dispatch(showSelect(false));
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [dispatch]);

  return createPortal(
    <StyledBackdrop
      onClick={event => {
        if (event.target === event.currentTarget) {
          // dispatch(showSelect(false));
          dispatch(closeModal());
        }
      }}
    >
      {children}
    </StyledBackdrop>,
    modalRoot
  );
};

export default Modal;

export const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
`;
