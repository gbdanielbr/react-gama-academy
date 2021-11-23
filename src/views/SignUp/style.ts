import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #8c52e5;

  .card{
    display: grid;
    background: #f9f9f9;
    max-width: 18.75rem;
    border-radius: 1rem;
    padding: 1.2rem;
    h5{
      font-family: 'Roboto', sans-serif;
      text-align: center;
      font-size: 1.3rem;
      color: #8c52e9;
    }
      form{
        input{
          width: 100%;
          height: 2rem;
          text-align: center;
          border-radius: .4rem;
          border: .125rem solid #e2e2e2;
          margin: .5rem 0 0 0;
        }
        input[type="submit"]{
          cursor: pointer;
          border: none;
          background: #68de5a;
          padding: .4rem;
          border-radius: .8rem;
          transition: .5s;
          &:hover{
            background: #8c52e5;
          }
        }
      }
  }
`