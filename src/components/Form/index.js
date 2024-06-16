import { TextField } from '../TextField';
import { DropdownList } from '../DropdownList';
import { Button } from '../Button';

import styles from './Form.module.css';

const teams = [
    '',
    'Programação',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
]
    
export const Form = () => {

    const whenSaving = (event) => {
        event.preventDefault();
        console.log('formulario foi submetido =>');
    }

    return (
        <section className={ styles.form }>
            <form onSubmit={ whenSaving }>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField require={ true } label="Nome" placeholder="Digite seu nome" />
                <TextField require={ true } label="Cargo" placeholder="Digite seu cargo" />
                <TextField require={ true } label="Image" placeholder="Informe o endereço da imagem" />
                <DropdownList 
                    require={ true }
                    label="Times"
                    items={ teams }
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}