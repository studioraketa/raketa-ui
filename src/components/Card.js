import styled from 'styled-components';
import reset from '../reset';
import em from '../em';

export const Card = styled.div`
  ${reset()}
  width: ${props => props.size ? props.size : '400px'}
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
  box-shadow: 0px 2px 2px rgba(0,0,0,.1);
`;

export const CardImage = styled.img`
  width: 100%;
  max-width: 100%;
  border-top-left-radius: ${props => props.theme.innerBorderRadius};
  border-top-right-radius: ${props => props.theme.innerBorderRadius};
`;

export const CardTitle = styled.div`
  ${reset()}
  padding: ${em(1)};
  font-weight: 300;
  color: ${props => props.invert ? props.theme.textColor : props.theme.textColor}
  background-color: ${props => props.invert ? props.theme.lightColor : props.theme.whiteColor}
  ${props => props.invert ? `border-bottom: 1px solid ${props.theme.borderColor};` : ''}
  font-size: ${props => props.sm ? em(1.333) : em(1.777)};
  border-top-left-radius: ${props => props.theme.innerBorderRadius};
  border-top-right-radius: ${props => props.theme.innerBorderRadius};
`;

export const CardContent = styled.div`
  ${reset()}
  padding: ${em(1)};
  padding-top: ${props => props.extra ? em(1) : em(.5)};
  ${props => props.extra ? `border-top: 1px solid ${props.theme.lightColor}` : ''}
`;
