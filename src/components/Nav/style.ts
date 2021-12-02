import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 10vh;
  background: rgb(160, 125, 232);
  box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.27);

  img {
    width: 5rem;
    height: auto;
  }

  .nav-links{
    display: flex;

    a{
      font-size: .9rem;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      text-decoration: none;
      padding: .5rem;
      text-shadow: 0.2px 0.2px 1px rgba(102, 8, 212, .9);
      color: rgb(220, 185, 282);
      transition: .3s;

      &:hover{
        font-weight: lighter;
        color: rgba(102, 8, 212, 0.836452623041404);
      }
    }
  }
`