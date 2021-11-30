import styled from 'styled-components';

export const Container = styled.div`
  background: transparent;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';

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