import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Novasaida(){
    return (<div><Pagina>
    <Head>
        <Nome>Nova saída</Nome>
    </Head>
    <Corpo>
                <Dados><Input  type="number" placeholder="Valor"   required ></Input></Dados>
                <Dados><Input  type="string" placeholder="Descrição"  required ></Input></Dados>
                <Dados><Entrar   >
                    <Texto>Salvar saída</Texto></Entrar></Dados>
            </Corpo>
</Pagina>
</div>)
}

const Pagina = styled.div`
min-height:1000px;
background-color:#8C11BE;
padding-left:25px;
display:flex;
flex-direction:column;
align-items:center;`

const Head = styled.div`
width:326px;
padding-top: 25px;
margin-bottom:40px;`

const Nome = styled.div`

font-family: 'Lexend Deca', sans-serif;;
color:#FFFFFF;
font-size: 26px;
line-height: 30.52px;`

const Texto = styled.div`
display:${props => props.carregar ? "none" : "flex"}`

const Corpo = styled.form`
      display:flex;
      flex-direction:column;
      align-items:center;`
const Dados = styled.div`
      margin-bottom:6px;
      `
const Input = styled.input`
      width:303px;
      height:45px;
      box-sizing: border-box;
      border-radius: 5px;
      border: 1px solid #D4D4D4;
      padding-left: 11px;
      background-color: ${props => props.background};
      ::placeholder{
      font-family: 'Lexend Deca', sans-serif;;
      color:#000000;
      font-size: 20px;
      line-height: 23.48px;
      }
      `
const Entrar = styled.button`
      display:flex;
      align-items: center;
      justify-content: center;
      width:303px;
      height:45px;
      border:none;
      border-radius: 4.64px;
      text-align: center;
      background-color: #A328D6;
      font-family: 'Lexend Deca', sans-serif;;
      color:#FFFFFF;
      font-size: 20.98px;
      line-height: 26px;
      opacity: ${props => props.opacity};
      `