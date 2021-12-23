import styled from "styled-components";

export const Text = styled.p`
    font-family: ${({ theme, size = 'm_m_regular' }) => theme.typography[size].family};
    color: ${({ theme, color }) => theme.color[color]};
    text-align: ${({ centered }) => (centered ? 'center' : 'left')};
    font-size: ${({ theme, size = 'm_m_regular' }) => theme.typography[size].size};
    text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : '')};
    text-decoration: ${({ underline }) => (underline ? 'underline' : '')};

    @media (min-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    font-family: ${({ theme, size = 'd_m_regular', desktopSize }) => theme.typography[desktopSize || size].family};
    font-size: ${({ theme, size = 'd_m_regular', desktopSize }) => theme.typography[desktopSize || size].size};
  }
    `;