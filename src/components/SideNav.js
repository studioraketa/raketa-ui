import styled from 'styled-components';
import reset from '../reset';
import resetButton from '../resetButton';
import em from '../em';

export const SideNav = styled.div`
  ${reset()}
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: ${em(4)};
  background-color: ${props => props.theme.sideNavColor};
  border-right: 1px solid ${props => props.theme.sideNavBorderColor};
  z-index: 10;
`;

export const NavItem = styled.div`
  ${props => props.bottom ? `
    position: absolute;
    bottom: 0;
    border-top: 1px solid #444;
  `: ''}
  z-index: 10;

  &:hover > * {
    display: block;
  }
`;

export const NavButton = styled.button`
  ${reset()}
  ${resetButton()}
  font-size: ${em(1.2)};
  color: ${props => props.theme.whiteColor};
  background-color: ${props => props.active ? props.theme.sideNavBorderColor : (props.success ? props.theme.successColor : 'transparent')};
  width: ${em(4)};
  height: ${em(4)};
  border-bottom: 1px solid ${props => props.theme.sideNavBorderColor};
  z-index: 12;

  &:hover {
    background-color: ${props => props.success ? props.theme.successColor : props.theme.sideNavBorderColor};
  }

  &:active {
    opacity: .9;
    & > * {
      transform: scale(.75);
    }
  }
`;

export const NavPanel = styled.div`
  ${reset()}
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${em(4)};
  width: ${em(20)};
  padding: ${em(2)};
  background-color: rgba(0,0,0,.8);
  color: ${props => props.theme.whiteColor};
  backdrop-filter: blur(${em(.5)});
  box-shadow: 1px 0px 20px rgba(0,0,0,.4);
  overflow-y: auto;
  z-index: 11;
`;

export const NavSectionTitle = styled.h2`
  ${reset()}
  margin-bottom: ${em(1.5)};
  font-size: ${props => props.secondary ? em(1.333) : em(1.777)};
  font-weight: 300;
  color: ${props => props.theme.whiteColor};
`;

export const NavSectionMenu = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavSectionMenuItem = styled.button`
  ${reset()}
  ${resetButton()}
  display: block;
  width: 100%;
  padding-bottom: ${em(.5)};
  margin-bottom: ${em(.5)};
  font-size: ${em(1.333)};
  font-weight: 300;
  text-align: left;
  color: ${props => props.theme.whiteColor};
  border-bottom: 1px solid ${props => props.theme.sideNavBorderColor};
  transition: all .2s ease-in-out;

  &:hover {
    padding-left: ${em(.5)};
  }
`;

export const SideNavSpacer = styled.div`
  ${reset()}
  height: ${props => em(4 * props.size)};
  border-bottom: 1px solid ${props => props.theme.sideNavBorderColor};
`;

export const SideNavSearchWrapper = styled.div `
  position: relative;
  height: ${em(3.125)};
  margin-bottom: ${em(1)};

  input:not([type]) {
    position: absolute;
    top: 0;
    right: ${em(-2)};
    left: ${em(-2)};
    bottom: 0;
    width: 125%;
    padding-left: ${em(4)};
    padding-right: ${em(2)};
    font-size: ${em(1.2)};
    border: 0 !important;
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 0;
    color: ${props => props.theme.whiteColor};
  }
`;