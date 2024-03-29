import styled from 'styled-components';

export const NavContainer = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 7rem;
    height: 100vh;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    border-right-width: 0.5rem;
    border-right-style: solid;
    border-image: linear-gradient(
            to bottom,
            ${({ theme }) => theme.colors.gradientMainPrimary},
            ${({ theme }) => theme.colors.gradientMainSecondary}
        )
        1 100%;
    box-shadow: 5px 0 7px 2px #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    z-index: 100;

    &::before {
        content: '';
        position: fixed;
        width: 3rem;
        height: 3rem;
        top: 0;
        left: 7rem;
        background-image: url('./assets/nav-bf.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    &::after {
        content: '';
        position: fixed;
        width: 3rem;
        height: 3rem;
        bottom: 0;
        left: 7rem;
        background-image: url('./assets/nav-af.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media ${({ theme }) => theme.media.smallMobile} {
        gap: 4rem;
    }

    @media ${({ theme }) => theme.media.tablet},
        ${({ theme }) => theme.media.mobile} {
        gap: 3rem;
    }

    @media ${({ theme }) => theme.media.tablet},
        ${({ theme }) => theme.media.mobile},
        ${({ theme }) => theme.media.smallMobile} {
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 7rem;
        flex-direction: row;
        border-image: none;
        border-right-width: 0;

        &::before,
        &::after {
            display: none;
        }
    }
`;
