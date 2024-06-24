import { useState } from 'react'; 
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import { Banner } from './components/Banner/';
import { Form } from './components/Form';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

const teams = [
  {
    name: 'Programação',
    primaryColor: '#57C278',
    secondColor: '#D9F7E9',
  },
  {
    name: 'Front-End',
    primaryColor: '#82CFFA',
    secondColor: '#E8F8FF',
  },
  {
    name: 'Data Science',
    primaryColor: '#A6D157',
    secondColor: '#F0F8E2',
  },
  {
    name: 'Devops',
    primaryColor: '#E06B69',
    secondColor: '#FDE7E8',
  },
  {
    name: 'UX e Design',
    primaryColor: '#DB6EBF',
    secondColor: '#FAE9F5',
  },
  {
    name: 'Mobile',
    primaryColor: '#FFBA05',
    secondColor: '#FFF5D9',
  },
  {
    name: 'Inovação e Gestão',
    primaryColor: '#FF8A29',
    secondColor: '#FFEEDF',
  },
];

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

export function App() {
  const [collaborators, setCollaborator] = useState(initial);

  const newCollaboratorAdded = (collaborator) => {
    setCollaborator([...collaborators, collaborator]);
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={ teams.map(team => team.name) } whenRegistering={ collaborator => newCollaboratorAdded(collaborator) }/>
      <section className="teams">
        <h1>Minha organização</h1>
        {teams.map((team, index) => 
          <Team 
            key={index} 
            team={team} 
            collaborators={collaborators.filter(collaborator => collaborator.team === team.name)} 
          />
        )}
      </section>
      <Footer 
        backgroundImage='./assets/fundo.png'
        socialIcons={ icons }
        logo='./assets/logo.png'
        alt='logo do organo'
        creditText='Desenvolvido por Alura'
      />
    </div>
  );
}
