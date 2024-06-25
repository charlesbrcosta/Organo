import { useState } from 'react';

import { Field } from '../Field';
import { DropdownList } from '../DropdownList';
import { Button } from '../Button';

import styles from './Form.module.css';

export const Form = ({ whenRegistering, teams, registerTeam }) => {
    const [name, setName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('');

    const whenSubmitting = (event) => {
        event.preventDefault();
        whenRegistering({
            name,
            jobTitle,
            image,
            team
        });

        setName('');
        setJobTitle('');
        setImage('');
        setTeam('');
    }

    return (
        <section className={styles.form}>
            <form onSubmit={whenSubmitting}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Field
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    toChange={value => setName(value)}
                />
                <Field
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={jobTitle}
                    toChange={value => setJobTitle(value)}
                />
                <Field
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
            <form onSubmit={(event) => {
                event.preventDefault();
                registerTeam({name: teamName, color: teamColor});
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Field
                    required
                    label="Nome"
                    placeholder="Digite o nome do time"
                    value={teamName}
                    toChange={value => setTeamName(value)}
                />
                <Field
                    required
                    type='color'
                    label="Cor"
                    placeholder="Digite a cor do time"
                    value={teamColor}
                    toChange={value => setTeamColor(value)}
                />
                <Button text='Criar um novo time' />
            </form>
        </section>
    );
}
