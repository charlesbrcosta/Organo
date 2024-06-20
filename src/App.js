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

export function App() {
  const [collaborators, setCollaborator] = useState([]);

  const newCollaboratorAdded = (collaborator) => {
    setCollaborator([...collaborators, collaborator]);
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={ teams.map(team => team.name) } registerCollaborator={ collaborator => newCollaboratorAdded(collaborator) }/>

      { teams.map(team => <Team 
            key={ team.name } 
            name={ team.name }
            primaryColor={ team.primaryColor }
            secondColor={ team.secondColor }
            collaborators={ collaborators.filter(collaborator => collaborator.team === team.name) }
          />
      )}
      
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
