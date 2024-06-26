import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import {v4 as uuidv4 } from 'uuid';

import { Banner } from './components/Banner';
import { Form } from './components/Form';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

const icons = [
  {
    name: 'facebook',
    component: <FaFacebook />,
    link: 'https://www.facebook.com'
  },
  {
    name: 'twitter',
    component: <FaTwitter />,
    link: 'https://www.twitter.com'
  },
  {
    name: 'instagram',
    component: <FaInstagram />,
    link: 'https://www.instagram.com'
  }
]

export function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57C278',
      
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA',
      
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157',
      
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E06B69',
      
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#DB6EBF',
      
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05',
      
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29',      
    },
  ]);
  
  const initial = 
  [
    {
      id: uuidv4(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      jobTitle: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DANIEL ARTINE',
      jobTitle: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUILHERME LIMA',
      jobTitle: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      jobTitle: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      jobTitle: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DANIEL ARTINE',
      jobTitle: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUILHERME LIMA',
      jobTitle: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      jobTitle: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      jobTitle: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DANIEL ARTINE',
      jobTitle: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUILHERME LIMA',
      jobTitle: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      jobTitle: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      jobTitle: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DANIEL ARTINE',
      jobTitle: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUILHERME LIMA',
      jobTitle: 'Desenvolvedor Python e JavaScript na Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      jobTitle: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      jobTitle: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DANIEL ARTINE',
      jobTitle: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUILHERME LIMA',
      jobTitle: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      jobTitle: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'JULIANA AMOASEI',
      jobTitle: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DANIEL ARTINE',
      jobTitle: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'GUILHERME LIMA',
      jobTitle: 'Desenvolvedor Python e JavaScript na Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'PAULO SILVEIRA',
      jobTitle: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[5].name
    },
  ]

  const [collaborators, setCollaborators] = useState(initial);  

  const newCollaboratorAdded = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  }

  function deleteCollaborator(id) {
    setCollaborators(collaborators.filter(collaborator => collaborator.id !== id));
  }

  function changeColorTeam(color, id) {
    setTeams(teams.map(team => {
      if(team.id === id) {
        team.color = color;
      }
      return team
    }));
  }

  function registerTeam(newTeam) {
    setTeams([...teams, {...newTeam, id: uuidv4()}]);
  }

  function solveFavorite(id) {
    setCollaborators(collaborators.map(collaborator => {
      if(collaborator.id === id) {
        collaborator.favorite = !collaborator.favorite;
      }
      return collaborator;
    }))
  }
  
  return (
    <div className="App">
      <Banner />
      <Form 
        teams={teams.map(team => team.name)} 
        whenRegistering={collaborator => newCollaboratorAdded(collaborator)} 
        registerTeam={registerTeam}
      />
      <section className="teams">
        <h1>Minha organização</h1>
        {teams.map((team, index) =>
          <Team
            key={index}
            team={team}
            collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
            deleting={deleteCollaborator}
            changeColor={changeColorTeam}
            whenFavorite={solveFavorite}
          />
        )}
      </section>
      <Footer
        backgroundImage='./assets/fundo.png'
        socialIcons={icons}
        logo='./assets/logo.png'
        alt='logo do organo'
        creditText='Desenvolvido por Alura'
      />
    </div>
  );
}
