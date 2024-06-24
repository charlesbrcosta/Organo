import { useState } from 'react';

import { TextField } from '../TextField';
import { DropdownList } from '../DropdownList';
import { Button } from '../Button';

import styles from './Form.module.css';

export const Form = ({ whenRegistering, teams }) => {
    const [name, setName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const whenSubmitting = (event) => {
        event.preventDefault();
        whenRegistering({
            name,
            jobTitle,
            image,
            team
        });
    }

    return (
        <section className={styles.form}>
            <form onSubmit={whenSubmitting}>
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    toChange={value => setName(value)}
                />

                <TextField
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={jobTitle}
                    toChange={value => setJobTitle(value)}
                />

                <TextField
                    required={true}
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    value={image}
                    toChange={value => setImage(value)}
                />

                <DropdownList
                    required={true}
                    label="Times"
                    items={teams}
                    value={team}
                    toChange={value => setTeam(value)}
                />

                <Button text='Criar Card' />
            </form>
        </section>
    );
}
