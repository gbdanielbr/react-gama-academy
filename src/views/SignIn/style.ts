import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #8c52e5;

  .card{
    background: #f9f9f9;
    max-width: 18.75rem;
    border-radius: 1rem;
    padding: 1.2rem;
    h5{
      font-family: 'Roboto', sans-serif;
      text-align: center;
      font-size: 1.3rem;
      color: #8c52e9;
      text-shadow: 2px 1px 0px rgba(117,117,117,0.22);
    }
      form{
        text-align: center;
        input{
          width: 100%;
          height: 2rem;
          text-align: center;
          border-radius: .4rem;
          border: .125rem solid #e2e2e2;
          margin: .5rem 0 0 0;
        }
        input[type="submit"]{
          font-weight: bold;
          text-shadow: 2px 1px 0px rgba(117,117,117,0.22);
          cursor: pointer;
          border: none;
          background: #68de5a;
          padding: .4rem;
          border-radius: .8rem;
          max-width: 5rem;
          transition: .5s;
          &:hover{
            color: #fff;
            background: #8c52e5;
          }
        }
      }
  }
`