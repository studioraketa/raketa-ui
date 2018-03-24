import React from 'react';
import styled from 'styled-components';

import reset from '../reset';
import resetButton from '../resetButton';
import em from '../em';

import Button from './Button';

export const Modal = styled.div`
  display: ${props => props.open ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9997;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .6);
  backdrop-filter: blur(${em(.35)});
  z-index: 9998;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  align-items: flex-start;
  width: ${props => props.width};
  box-shadow: 0 0 ${em(3)} rgba(0,0,0,.4);
  z-index: 9999;

  &.dialog-large {
    position: relative;
    height: 90vh;
    width: calc(100% - ${em(10)});
    background-color: ${props => props.theme.whiteColor};
  }
`;

export const ModalTitleBar = styled.div`
  ${reset()}
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${em(1)} ${em(1)};
  background-color: ${props => props.theme.whiteColor};
  border-top-left-radius: ${props => props.theme.borderRadius * 2};
  border-top-right-radius: ${props => props.theme.borderRadius * 2};
`;

export const ModalTitle = styled.h2`
  ${reset()}
  line-height: 1;
  font-size: ${em(1.777)};
  font-weight: 300;
`;

export const ModalContent = styled.div`
  ${reset()};
  width: 100%;
  overflow-y: auto;
  padding: 0 ${em(1)} ${em(1)};
  background-color: ${props => props.theme.whiteColor};
`;

export const ModalFooter = styled.div`
  ${reset()}
  align-self: flex-end;
  width: 100%;
  margin-top: auto;
  padding: ${em(1)};
  border-top: 1px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.whiteColor};
  border-bottom-left-radius: ${props => props.theme.borderRadius * 2};
  border-bottom-right-radius: ${props => props.theme.borderRadius * 2};
`;

export const CloseButton = styled.button`
  ${reset()}
  ${resetButton()}
  position: relative;
  top: -5px;
  line-height: 1;
  font-size: ${em(2)};
  font-weight: 300;
`;

export const ModalHeader = ({ title, showClose, onClose }) => (
  <ModalTitleBar>
    <ModalTitle secondary>{title}</ModalTitle>
    <CloseButton type="button" onClick={onClose}>&times;</CloseButton>
  </ModalTitleBar>
);

export default ({ open, title, children, primaryLabel = 'OK', secondaryLabel, onClose, onPrimary, onSecondary, width = em(40), dialogSize }) => (
  <Modal open={open} onClose={onClose}>
    <Overlay onClick={onClose} />
    <ModalWrapper width={width} className={`${dialogSize === 'large' ? 'dialog-large' : ''}`}>
      <ModalHeader title={title} showClose={true} onClose={onClose} />
      <ModalContent style={dialogSize === 'large' ? {} : { maxHeight: `${em(30)}` }}>{children}</ModalContent>
      {(primaryLabel && secondaryLabel) &&
        <ModalFooter>
          {primaryLabel &&
            <Button type="button" primary onClick={onPrimary}>{primaryLabel}</Button>}
          {secondaryLabel &&
            <Button type="button" onClick={onSecondary}>{secondaryLabel}</Button>}
        </ModalFooter>
      }
    </ModalWrapper>
  </Modal>
);
