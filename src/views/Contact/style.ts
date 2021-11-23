import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: green;
  color: #fff;

  .form-wrapper{
    display: grid;
    text-align: center;

    .card{
      background-color: #fff;
      padding: 1.2rem;
      border-radius: 1rem;
      color: darkgreen;
      form{
        display: grid;
        input{
          margin: .7rem 0;
        }
      }
    }
  }
`