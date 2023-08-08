import Cards from './cards';
export default function SkillCards() {
    return (
      <>
        <h1 className="text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-black 
           after:inline-block after:relative after:align-middle after:w-1/4 
           before:bg-black before:inline-block before:relative before:align-middle 
           before:w-1/4 before:right-2 after:left-2 text-xl p-4 font-extrabold">My Tech Stack
        </h1>
        <h1 className="pt-10 pb-2 text-center">Backend Languages & Tools</h1>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <Cards Name="Python" Img="https://www.vectorlogo.zone/logos/python/python-icon.svg"/>
            <Cards Name="Golang" Img="https://www.vectorlogo.zone/logos/golang/golang-icon.svg" />
            <Cards Name="Rust" Img="https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg" />
            <Cards Name="WASM" Img="https://www.vectorlogo.zone/logos/webassembly/webassembly-icon.svg" />
            <Cards Name="Express.js" Img="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"/>
            <Cards Name="Django" Img="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg" />
            <Cards Name="Flask" Img="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" />
            <Cards Name="Jinja" Img="https://www.vectorlogo.zone/logos/pocoo_jinja/pocoo_jinja-icon.svg" />
          </div>
        </div>
  
  
  
        <h1 className="pt-10 pb-2 text-center">Frontend</h1>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <Cards Name="React" Img="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" />
            <Cards Name="Tailwindcss" Img="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" />
            <Cards Name="Bootstrap" Img="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg" />
          </div>
        </div>
  
  
        <h1 className="pt-10 pb-2 text-center">Version Control & Package Managers</h1>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <Cards Name="Git" Img="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" />
            <Cards Name="Github" Img="https://www.vectorlogo.zone/logos/github/github-tile.svg" />
            <Cards Name="Docker" Img="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" />
          </div>
        </div>
  
      </>
    )
  }
  