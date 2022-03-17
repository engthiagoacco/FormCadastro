import React, {useState} from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@mui/material';
import '@fontsource/roboto';

function FormularioCadastro({aoEnviar}) {
    const [nome, setNome ] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}})
return(
    <form
        onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
        }}
    >

        <TextField 
        value = {nome}
        onChange={(event)=>{
            setNome(event.target.value);
        }}
            id="Nome" 
            label="Nome" 
            variant="outlined"
            margin="normal"
            fullWidth
        />  

        <TextField 
        value = {sobrenome}
        onChange={(event)=>{
                setSobrenome(event.target.value);
        }}
            id="Sobrenome" 
            label="Sobrenome" 
            variant="outlined" 
            margin="normal"  
            fullWidth
        />

        <TextField
        value = {cpf}
        onChange={(event)=>{
                setCpf(event.target.value);
        }}
        onBlur={(event)=>{
            setErros({cpf:{valido:false, texto:"CPF deve ter 11 numeros"}})
        }}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            id="CPF" 
            label="Cpf" props
            variant="outlined" 
            margin="normal"  
            fullWidth
        />

        <FormControlLabel 
            label="Promoções" 
            control={ 
                <Switch 
                    checked={promocoes}
                    onChange={(event)=> {
                        setPromocoes(event.target.checked)
                    }}
                    name="Promoções" 
                    color="primary"
                /> 
            } 
        />
        
        <FormControlLabel 
            label="Novidades" 
            control={ 
                <Switch 
                    checked={novidades}
                    onChange={(event)=> {
                        setNovidades(event.target.checked)
                    }}
                    name="Novidades" 
                    color="primary"
                /> 
            } 
        />


        <Button 
            type="submit"
            variant="contained" 
            color="primary"
        >
            Cadastrar 
        </Button>
        
    </form> 
);
}
export default FormularioCadastro;