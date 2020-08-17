import React, {useState} from 'react';

// styling
import './App.css';

// components
import Menu from './menu/Menu';

const App = () => {
  const [active, setActive] = useState('')

  const setClass = name => {
    const classArr = [name, 'square', 'cfb']
    if (active === name) classArr.push('active')
    return classArr.join(' ')
  }

  return (
    <div className="App cfb">
      <Menu/>

      <div className="container cfb">
        <div className={setClass('projects')}>
          <p>Projects</p> 
          <button className=""
            onClick={()=> setActive(
              active === 'projects' ? 
                '' 
                  : 'projects'
              )}>
            +/-
          </button>
        </div>
 
        <div className={setClass('about')}>
          <p>About</p> 
          <button className=""
            onClick={()=> setActive(
              active === 'about' ? 
                '' 
                  : 'about'
              )}>            +/-
          </button>
        </div>

        <div className={setClass('contact')}>
          <p>Contact</p> 
          <button className=""
            onClick={()=> setActive(
              active === 'contact' ? 
                '' 
                  : 'contact'
              )}>            +/-
          </button>
        </div>

        <div className={setClass('blog')}>
          <p>Blog</p> 
          <button className=""
            onClick={()=> setActive(
              active === 'blog' ? 
                '' 
                  : 'blog'
              )}>            +/-
          </button>
        </div>

        
        


      </div>
  
    </div>
  );
}

export default App;
