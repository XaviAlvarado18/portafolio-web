import { images } from "../../img/images";

const projectsData = [
  {
    id: 1 , 
    title: 'Medical Website' , 
    src: images.medicos, 
    technologies: ['ReactJS', 'Vite', 'Flask'],
    url: 'https://cerulean-arithmetic-d803d4.netlify.app/',
    code: 'https://github.com/Dahernandezsilve/MedicosBDW'
  },
  {
    id: 2 , 
    title: 'Granja El Ceibillal', 
    technologies: ['React Native', 'Flask'],
    src: images.elceibillal, 
    url: 'https://drive.google.com/file/d/1INBjLyNbjpwxjDpivcC3mVARGhrC-gam/view?usp=sharing',
    code: 'https://github.com/Dahernandezsilve/proyectomgafrontend.git'
  
  },
  {
    id: 3 , 
    title: 'Memory Game', 
    technologies: ['ReactJs', 'Webpack'],
    src: images.memory, 
    url: 'https://lab8react-d482c.web.app/',
    code: 'https://github.com/XaviAlvarado18/ReactMemory.git'
  },
  {
    id: 4 , 
    title: 'Calculator', 
    technologies: ['ReactJS', 'Webpack', 'Eslint'],
    src: images.calculator, 
    url: 'https://react-calculator-cb712.web.app/',
    code: 'https://github.com/XaviAlvarado18/R-Calculator.git'
  },
    {
      id: 5 , 
      title: 'Amazon Clone', 
      technologies: ['ReactJS', 'Webpack', 'Bootstrap'],
      src: images.amazon, 
      url: 'https://react-32c5d.web.app/',
      code: 'https://github.com/XaviAlvarado18/RAmazon.git'
    }

]
export default projectsData