import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Authcontext from "./context/Authcontext"
import { useContext} from "react"

export default function Novasaida(){
    const [valor, setValor] = useState("")
    const [descricao, setDescricao] = useState("")
    const navigate = useNavigate()
    const { token, SetToken, imagem, SetImagem } = useContext(Authcontext)


    return (<div><Pagina>
        <Head>
            <Nome>Nova saida</Nome>
        </Head>
        <Corpo onSubmit={mandarDados}>
            <Dados><Input type="number" placeholder="Valor" value={valor} onChange={e => setValor(e.target.value)} required ></Input></Dados>
            <Dados><Input type="string" placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} required ></Input></Dados>
            <Dados><Entrar>
                <Texto>Salvar saida</Texto></Entrar></Dados>
        </Corpo>
    </Pagina>
    </div>)


    function mandarDados(e) {
        e.preventDefault()
        const dados = {
            valor,
            descricao
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
            
        }

        console.log(valor)
        console.log(descricao)
        console.log(dados)
        const url_post = `http://localhost:5002/nova-saida`
        const promise = axios.post(url_post, dados,config)

        promise.then(resposta => {
            console.log(resposta.data)
            navigate("/home")
        })

        promise.catch(err => {
            console.log(err)
            alert("Deu erro tente novamente")
        })
    }
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