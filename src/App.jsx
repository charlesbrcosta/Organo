import { useState, useEffect } from 'react';
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
  
  const [collaborators, setCollaborators] = useState([]);  

  useEffect(() => {
    let isMounted = true;

    async function showCollaborators() {
      try {
        const response = await fetch('http://localhost:3000/card');
        const data = await response.json();
        if(isMounted) {
          setCollaborators(data);
        }
      } catch(error) {
        if(isMounted){
          console.error('Error fetching data: ', error);
        }
      }
    }
    showCollaborators();

    return () => {
      isMounted = false; //Limpeza pra evitar atualização de estado em componente desmontado
    }

  }, []); //Depêndencias vazias indicam que só deve rodar uma vez.
 
  const newCollaboratorAdded = async (collaborator) => {
    const newCollaborator = {...collaborator, id: uuidv4(), favorite: false};

    const response = await fetch('http://localhost:3000/card', {
      method : "POST",
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newCollaborator)
    });
    if(response.ok) {
      setCollaborators([...collaborators, newCollaborator]);
    }

  }

  async function deleteCollaborator(id) {

    const response = await fetch(`http://localhost:3000/card/${id}`, {
      method: 'DELETE',
    });

    if(response.ok) {
      setCollaborators(collaborators.filter(collaborator => collaborator.id !== id));
    }
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

  async function solveFavorite(id) {
    const collaboratorToUpdate = collaborators.find(collaborator => collaborator.id === id);

    if(collaboratorToUpdate) {
      const updateCollaborator = { ...collaboratorToUpdate, favorite: !collaboratorToUpdate.favorite};
     
      const response = await fetch(`http://localhost:3000/card/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ favorite: updateCollaborator.favorite })
      });
    
      if(response.ok) {
        setCollaborators(collaborators.map(collaborator => {
          if(collaborator.id === id) {
            return updateCollaborator;
          }
          return collaborator;
        }));
      }
    }
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
