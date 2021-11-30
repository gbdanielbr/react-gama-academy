import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgb(140, 105, 212);
  background: linear-gradient(
    0deg,
    rgba(140, 105, 212, 0.8672649479713761) 0%,
    rgba(102, 8, 212, 0.836452623041404) 100%
  );

  .card {
    display: grid;
    background: #f9f9f9;
    max-width: 18.75rem;
    border-radius: 1rem;
    padding: 1.2rem;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.22);

    h5 {
      font-family: 'Roboto', sans-serif;
      text-align: center;
      font-size: 1.3rem;
      color: #6608d4;
      text-shadow: 2px 1px 0px rgba(117, 117, 117, 0.12);
    }

    a {
      text-decoration: none;
      text-align: center;
      color: #8c52e5;
      font-family: 'Roboto', sans-serif;
      margin-top: 2rem;
      font-size: 80%;
    }

    form {
      margin-top: 1rem;
      text-align: center;

      input {
        width: 100%;
        height: 2rem;
        text-align: center;
        border-radius: 0.4rem;
        border: 0.125rem solid #e2e2e2;
        margin: 0.5rem 0 0 0;
      }
      input[type='submit'] {
        color: #fff;
        background: #8c52e5;
        font-size: 70%;
        font-weight: bold;
        cursor: pointer;
        border: none;
        padding: 0.4rem;
        border-radius: 0.8rem;
        max-width: 5rem;
        transition: 0.5s;
        margin-top: 2rem;

        &:hover {
          font-weight: bold;
          background: rgba(140, 105, 212, 0.8672649479713761);
        }
      }
    }
  }
`
