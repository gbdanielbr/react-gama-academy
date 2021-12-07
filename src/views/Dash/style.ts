import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80vh;
  background: linear-gradient(
    0deg,
    rgba(102, 8, 212, 0.696452623041404) 0%,
    rgba(140, 105, 212, 0.5672649479713761) 110%
  );

  h1 {
    text-shadow: 3px 1px 1.5px rgba(0, 0, 0, 0.3);
    font-size: 1.4rem;
    text-align: center;
    font-family: sans-serif;
    color: cyan;
  }

  h5 {
    text-shadow: 3px 1px 1.5px rgba(0, 0, 0, 0.3);
    font-size: 1.2rem;
    text-align: center;
    font-family: sans-serif;
    color: rgb(230, 225, 292);
    padding-bottom: 5rem;
  }

  .lottie {
    max-width: 100vw;
    zoom: 50%;
    position: absolute;
    justify-self: center;
    margin-bottom: 10rem;
  }
`
