import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import { Banner } from './components/Banner/';
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
      name: 'Programação',
      color: '#57C278',
      
    },
    {
      name: 'Front-End',
      color: '#82CFFA',
      
    },
    {
      name: 'Data Science',
      color: '#A6D157',
      
    },
    {
      name: 'Devops',
      color: '#E06B69',
      
    },
    {
      name: 'UX e Design',
      color: '#DB6EBF',
      
    },
    {
      name: 'Mobile',
      color: '#FFBA05',
      
    },
    {
      name: 'Inovação e Gestão',
      color: '#FF8A29',
      
    },
  ]);
  
  const initial = [
  {
    name: 'JULIANA AMOASEI',
    jobTitle: 'Desenvolvedora de software e instrutora',
    image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    team: teams[0].name
  },
  {
    name: 'DANIEL ARTINE',
    jobTitle: 'Engenheiro de Software na Stone Age',
    image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    team: teams[0].name
  },
  {
    name: 'GUILHERME LIMA',
    jobTitle: 'Desenvolvedor Python e JavaScript na Alura',
    image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    team: teams[0].name
  },
  {
    name: 'PAULO SILVEIRA',
    jobTitle: 'Hipster e CEO da Alura',
    image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    team: teams[0].name
  },
  {
    name: 'JULIANA AMOASEI',
    jobTitle: 'Desenvolvedora de software e instrutora',
    image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    team: teams[1].name
  },
  {
    name: 'DANIEL ARTINE',
    jobTitle: 'Engenheiro de Software na Stone Age',
    image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    team: teams[1].name
  },
  {
    name: 'GUILHERME LIMA',
    jobTitle: 'Desenvolvedor Python e JavaScript na Alura',
    image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    team: teams[1].name
  },
  {
    name: 'PAULO SILVEIRA',
    jobTitle: 'Hipster e CEO da Alura',
    image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    team: teams[1].name
  },
  {
    name: 'JULIANA AMOASEI',
    jobTitle: 'Desenvolvedora de software e instrutora',
    image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    team: teams[2].name
  },
  {
    name: 'DANIEL ARTINE',
    jobTitle: 'Engenheiro de Software na Stone Age',
    image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    team: teams[2].name
  },
  {
    name: 'GUILHERME LIMA',
    jobTitle: 'Desenvolvedor Python e JavaScript na Alura',
    image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    team: teams[2].name
  },
  {
    name: 'PAULO SILVEIRA',
    jobTitle: 'Hipster e CEO da Alura',
    image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    team: teams[2].name
  },
  {
    name: 'JULIANA AMOASEI',
    jobTitle: 'Desenvolvedora de software e instrutora',
    image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    team: teams[3].name
  },
  {
    name: 'DANIEL ARTINE',
    jobTitle: 'Engenheiro de Software na Stone Age',
    image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    team: teams[3].name
  },
  {
    name: 'GUILHERME LIMA',
    jobTitle: 'Desenvolvedor Python e JavaScript na Alura',
    image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    team: teams[3].name
  },
  {
    name: 'PAULO SILVEIRA',
    jobTitle: 'Hipster e CEO da Alura',
    image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    team: teams[3].name
  },
  {
    name: 'JULIANA AMOASEI',
    jobTitle: 'Desenvolvedora de software e instrutora',
    image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    team: teams[4].name
  },
  {
    name: 'DANIEL ARTINE',
    jobTitle: 'Engenheiro de Software na Stone Age',
    image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    team: teams[4].name
  },
  {
    name: 'GUILHERME LIMA',
    jobTitle: 'Desenvolvedor Python e JavaScript na Alura',
    image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    team: teams[4].name
  },
  {
    name: 'PAULO SILVEIRA',
    jobTitle: 'Hipster e CEO da Alura',
    image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    team: teams[4].name
  },
  {
    name: 'JULIANA AMOASEI',
    jobTitle: 'Desenvolvedora de software e instrutora',
    image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
    team: teams[5].name
  },
  {
    name: 'DANIEL ARTINE',
    jobTitle: 'Engenheiro de Software na Stone Age',
    image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
    team: teams[5].name
  },
  {
    name: 'GUILHERME LIMA',
    jobTitle: 'Desenvolvedor Python e JavaScript na Alura',
    image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
    team: teams[5].name
  },
  {
    name: 'PAULO SILVEIRA',
    jobTitle: 'Hipster e CEO da Alura',
    image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
    team: teams[5].name
  },
  ]

  const [collaborators, setCollaborator] = useState(initial);
  

  const newCollaboratorAdded = (collaborator) => {
    setCollaborator([...collaborators, collaborator]);
  }

  const deleteCollaborator = () => {
    console.log('deletar colaborador');
  }

  function changeColorTeam(color, name) {
    setTeams(teams.map(team => {
      if(team.name === name) {
        team.color = color;
      }
      return team
    }));
  }
  

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} whenRegistering={collaborator => newCollaboratorAdded(collaborator)} />
      <section className="teams">
        <h1>Minha organização</h1>
        {teams.map((team, index) =>
          <Team
            key={index}
            team={team}
            collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
            deleting={deleteCollaborator}
            changeColor={changeColorTeam}
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
