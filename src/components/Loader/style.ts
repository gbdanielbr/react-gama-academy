import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  background: linear-gradient(
    0deg,
    rgba(102, 8, 212, 0.696452623041404) 0%,
    rgba(140, 105, 212, 0.5672649479713761) 110%
  );

  .content{
    display: contents;
    text-align: center;
  }

  .text{
    padding: 1.2rem;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-size: 150%;
    font-weight: lighter;
    color: #ffccff;
    text-shadow: 2px 1px 0px rgba(96, 0, 128, 0.22);
  }
`