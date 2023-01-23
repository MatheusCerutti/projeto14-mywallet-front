import styled from "styled-components";
import logo from './images/Logo.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import axios from 'axios'


export default function Cadastro() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [senhaConfirmada, setFoto] = useState("")
    const navigate = useNavigate()
    const [cor, SetCor] = useState("#FFFFFF")
    const [disabled, setDisabled] = useState("")
    const [opacity, setOpacity] = useState("100%")
    const [carregar, setCarregar] = useState(false)

    return (<div>
        <Pagina>
            <Logo><img src={logo}></img></Logo>
            <Corpo onSubmit={mandarDados}>
                <Dados><Input background={cor} type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required disabled={disabled}></Input></Dados>
                <Dados><Input background={cor} type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required disabled={disabled}></Input></Dados>
                <Dados><Input background={cor} type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} required disabled={disabled}></Input></Dados>
                <Dados><Input background={cor} type="password" placeholder="Confirme a senha" value={senhaConfirmada} onChange={e => setFoto(e.target.value)} required disabled={disabled}></Input></Dados>

                <Dados><Entrar opacity={opacity} disabled={disabled} >
                    <ThreeDots
                        height="30"
                        width="30"
                        radius="9"
                        color="#FFFFFF"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={carregar}
                    />
                    <Texto carregar={carregar} >Cadastrar</Texto></Entrar></Dados>
            </Corpo>
            <Link to="/">
                <Cadastrar>Já tem uma conta? Entre agora!</Cadastrar>
            </Link>
        </Pagina>

    </div>

    );

    function mandarDados(e) {
        e.preventDefault()
        const dados = {
            nome,
            email,
            senha,
            senhaConfirmada
        }

        SetCor("#F2F2F2");
        setDisabled("disabled");
        setOpacity("70%");
        setCarregar(true);

        const url_post = `http://localhost:5002/cadastro`
        const promise = axios.post(url_post, dados)

        promise.then(resposta => {
            console.log(resposta.data)
            navigate("/")
        })

        promise.catch(err => {
            console.log(err)
            alert("Deu erro tente novamente")
            SetCor("#FFFFFF");
            setDisabled("");
            setOpacity("100%");
            setCarregar(false);
        })
    }
}

const Pagina = styled.div`
min-height:1000px;
background-color:#8C11BE;`

const Texto = styled.div`
display:${props => props.carregar ? "none" : "flex"}`

const Logo = styled.div`
      display:flex;
      width:100%;
      justify-content:center;
      padding-top: 68px;
      margin-bottom: 33px;
      
      img{
        width:147px;
        height: 50px;
      
      };
      `
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

const Cadastrar = styled.p`
      margin-top: 25px;
      text-align: center;
      font-family: 'Lexend Deca', sans-serif;;
      color:#FFFFFF;
      text-decoration: underline;
      font-size: 13.98px;
      line-height: 17px;`