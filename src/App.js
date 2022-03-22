import './App.css';
import { DefaultLayout } from './components/Layout/DefaultLayout';
import { Skills } from './components/skills/Skills';
import { Project } from './components/project/Project';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';



const App=()=> {
  return (
    <div className='wrapper'>
    <DefaultLayout>
     <Skills />
     <Project />
     <About />
     <Contact />
    </DefaultLayout>
    </div>
  );
}

export default App;
