import { TextField } from '../TextField';

import styles from './Form.module.css';

export const Form = () => {
    return (
        <section className={ styles.form }>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Image" placeholder="Informe o endereço da imagem" />
            </form>
        </section>
    )
}