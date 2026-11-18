import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api'
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { useUser } from "../../hooks/UserContext"

import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link } from './styles'
import {Logo} from "../../components/Logo"
import { Button } from '../../components/Button'




export function Login() {
    const navigate = useNavigate();
    const {putUserData} = useUser();

    const schema = yup
        .object({
            email: yup.string('Dígite um email válido').email().required('Email é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Dígite uma senha'),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    //console.log(errors)
    const onSubmit = async (data) => {
        try {
             const {data: userData} = await toast.promise(
            api.post('/sessions', {
                email: data.email,
                password: data.password,
            }),

            {
                pending: 'Verificando seus dados...',
                success: {
                    render() {
                      setTimeout(()=>{
                        if(userData?.admin){
                          navigate('/admin/pedidos')  
                        }else{
                            navigate('/');
                        }
                      },2000);
                      
                        return 'Seja bem-vindo!(a) 🎉'
                    },
                    icon: "🟢",
                },

                error: {
                    render({data: err}){
                        //Se o backend respomdeu (400 , 401 etc..) = credenciais erradas
                     if(err.response && err.response.status === 400){
                        return "Email ou senha incorretos ❌";
                     }else{
                        return "Erro ao conectar com servidor 🔌";
                     }
                    }
                }
            });
            putUserData(userData)
    
        } catch (error) {
            console.error('Erro ao realizar login:', error)
           
        }
    }

    return (
        <Container>
            <LeftContainer>
             <Logo/> 
            </LeftContainer>
            <RightContainer>
                <Title>Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu  <span>Login e senha.</span></Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email:</label>
                        <input type="email" placeholder='Digite seu email'{...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Senha:</label>
                        <input type="password" placeholder='Digite sua senha' {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <Button type="submit" >Entrar</Button>
                </Form>

                <p>Não possui conta?<Link to="/cadastro">Click aqui</Link></p>
            </RightContainer>
        </Container>
    )
}