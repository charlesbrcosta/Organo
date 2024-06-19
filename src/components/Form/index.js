import { useState } from 'react';

import { TextField } from '../TextField';
import { DropdownList } from '../DropdownList';
import { Button } from '../Button';

import styles from './Form.module.css';

const teams = [
    '',
    'Programação',
    'Frond-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
]
    
export const Form = (props) => {
    const [name, setName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const whenSaving = (event) => {
        event.preventDefault();
        props.registerCollaborator({
            name,
            jobTitle,
            image,
            team
        });        
    }

    return (
        <section className={ styles.form }>
            <form onSubmit={ whenSaving }>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    require={ true } 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valueInput={ name }
                    toChange={ value => setName(value) }
                />
                
                <TextField 
                    require={ true } 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valueInput={ jobTitle }
                    toChange={ value => setJobTitle(value) }
                
                />
                <TextField require={ true } 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valueInput={ image }
                    toChange={ value => setImage(value) }
                />

                <DropdownList 
                    require={ true }
                    label="Times"
                    items={ teams }
                    valueInput={ team }
                    toChange={ value => setTeam(value) }
                />

                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}