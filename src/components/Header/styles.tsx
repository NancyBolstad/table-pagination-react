import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import createFontStyles from '../../util/createFontStyles';
import Button from '../Button';

export const HeaderWrapper = styled.header`
  width: 100%;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.onSecondary};
  position: fixed;
  z-index: 999;
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.s}rem;

  @media (min-width: ${props => props.theme.mediaQueries.large}px) {
    padding: 0 ${props => props.theme.spacing.l}rem;
    height: 68px;
  }
`;

export const SiteLogo = styled(Link)`
  color: ${props => props.theme.colors.onSecondary};
  text-decoration: none;
  ${props => createFontStyles(props.theme.fonts.h2)};
  &:hover {
    opacity: 0.8;
  }
`;

export const HeaderMenuLeft = styled.div`
  display: flex;
`;

export const HeaderMenuRight = styled.div`
  list-style-type: none;
  display: flex;
`;

export const ModeSwitchButton = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 0;
  background-color: black;
  border-radius: 20px;
  position: relative;
  width: 5rem;
  height: 2.1rem;
  min-width: none;
  font-size: 1.5rem;
  padding: 0 0.5rem;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background-color: black;
  }
`;

export const TogglerSlider = styled.span<{ mode: string }>`
  width: 2rem;
  height: 2.1rem;
  position: absolute;
  top: 0;
  background-color: #f7f8f6;
  box-shadow: 1px 2px 4px black;
  border-radius: 20px;
  transition: transform 0.1s ease-in-out;

  ${props =>
    props.mode === 'default' &&
    css`
      right: 0;
    `}

  ${props =>
    props.mode === 'dark' &&
    css`
      left: 0;
    `}
`;

export const MobileMenuIcon = styled(Button)`
  padding: 0;
  svg {
    margin: 0;
  }
`;

export const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.125rem;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
  z-index: 999;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
  ${props => createFontStyles(props.theme.fonts.h1)};

  a {
    margin-top: ${props => props.theme.spacing.xl}rem;
    color: ${props => props.theme.colors.onBackground};
  }
`;
