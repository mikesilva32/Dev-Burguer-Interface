import { useNavigate } from "react-router-dom";
import  VoltarImg from '../../assets/voltar.png'
import { ButaoVoltar,Icone } from "./styles";

export function ButtonReturn(){
  const navigate = useNavigate()
 
   return(
      <ButaoVoltar onClick={() => navigate('/')}>
       <Icone src={VoltarImg} alt=""/> Voltar
       
      </ButaoVoltar>
   )

}

