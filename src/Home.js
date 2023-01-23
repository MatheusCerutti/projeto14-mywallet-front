import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useContext, useEffect, useState } from "react"
import Authcontext from "./context/Authcontext"

export default function Home() {
    const [todoslancamentos, setTodos] = useState([])
    const { token, SetToken, imagem, SetImagem } = useContext(Authcontext)

    useEffect(() => {

        const body = {}

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        console.log(config)
        const url_get = `http://localhost:5002/home`
        const promise = axios.get(url_get, config)

        promise.then(resposta => {
            console.log(resposta.data)
            setTodos(resposta.data)
        })

        promise.catch(err => {
            console.log(err.response.data)
            alert("Deu erro tente novamente")
        })
    }, []
    )

    return <div><Pagina>
        <Head>
            <Nome>Olá,Fulano</Nome>
            <Icon>Icon</Icon>
        </Head>
        <Body>
            <Lancamentos>
            {todoslancamentos.map(movimentacao => (
                    <Linha>
                        <Data></Data>
                        <Descricao>{movimentacao.descricao}</Descricao>
                        <Valor>{movimentacao.valor}</Valor>
                   </Linha>))}
                        
            </Lancamentos>
            <Saldo></Saldo>
            <Nenhum>Não há registros de entradas ou saídas</Nenhum>
        </Body>
        <Footer>
        <Link to="/nova-entrada">
            <Caixa>
                <Icon>Icon</Icon>
                <Texto>Nova</Texto>
                <Texto>entrada</Texto>
            </Caixa>
            </Link>
            <Link to="/nova-saida">
            <Caixa>
                <Icon>Icon</Icon>
                <Texto>Nova</Texto>
                <Texto>saida</Texto>
            </Caixa>
            </Link>
        </Footer>
    </Pagina>
    </div>
}

const Linha = styled.div`
display:flex;
margin-bottom:30px;
margin-top:23px;`
const Data = styled.div`
width:48px;`
const Descricao = styled.div`
width:200px;`
const Lancamentos = styled.div``
const Nenhum = styled.div``
const Saldo = styled.div``
const Valor = styled.div`
width:70px;`

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
display:flex;
justify-content:space-between;
margin-bottom:26px;`

const Nome = styled.div`

font-family: 'Lexend Deca', sans-serif;;
color:#FFFFFF;
font-size: 26px;
line-height: 30.52px;`

const Icon = styled.div`

display:flex;`

const Body = styled.div`
height:446px;
width:326px;
background-color:#FFFFFF;
border-radius:5px;
margin-bottom:13px;`

const Footer = styled.div`
width:326px;
display:flex;
justify-content:space-between;`

const Caixa = styled.div`
width:155px;
height:114px;
background-color:#A328D6;
border-radius:5px;`

const Texto = styled.div``