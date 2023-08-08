import Cards from './cards';
export default function SkillCards() {
    return (
      <>
      <div className="bg-[url(cardsbackground.jpg)]">
        <h1 className="text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-black 
           after:inline-block after:relative after:align-middle after:w-1/4 
           before:bg-black before:inline-block before:relative before:align-middle 
           before:w-1/4 before:right-2 after:left-2 text-xl p-4 font-extrabold">My Tech Stack
        </h1>
        <h1 className="pt-10 pb-2 text-center font-extrabold">Backend</h1>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <Cards link="https://www.python.org/" Name="Python" Img="https://www.vectorlogo.zone/logos/python/python-icon.svg"/>
            <Cards link="https://go.dev/" Name="Golang" Img="https://www.vectorlogo.zone/logos/golang/golang-icon.svg" />
            <Cards link="https://www.rust-lang.org/" Name="Rust" Img="https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg" />
            <Cards link="https://webassembly.org/" Name="WASM" Img="https://www.vectorlogo.zone/logos/webassembly/webassembly-icon.svg" />
            <Cards link="https://expressjs.com/" Name="Express.js" Img="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"/>
            <Cards link="https://www.djangoproject.com/" Name="Django" Img="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg" />
            <Cards link="https://palletsprojects.com/" Name="Flask" Img="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" />
            <Cards link="https://jinja.palletsprojects.com/en/3.1.x/" Name="Jinja" Img="https://www.vectorlogo.zone/logos/pocoo_jinja/pocoo_jinja-icon.svg" />
            <Cards link="https://socket.io/" Name="Socket.io" Img="https://www.vectorlogo.zone/logos/socketio/socketio-icon.svg"/>
            <Cards link="https://www.tensorflow.org/" Name="Tensorflow" Img="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"/>
            <Cards link="https://www.typescriptlang.org/" Name="TypeScript" Img="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" />
          </div>
        </div>
  
  
  
        <h1 className="pt-10 pb-2 text-center font-extrabold">Frontend</h1>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <Cards link="https://react.dev/" Name="React" Img="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" />
            <Cards link="https://tailwindcss.com/" Name="Tailwindcss" Img="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" />
            <Cards link="https://getbootstrap.com/" Name="Bootstrap" Img="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg" />
          </div>
        </div>


        <h1 className="pt-10 pb-2 text-center font-extrabold">Databases & Database Tools</h1>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <Cards link="https://www.mongodb.com/" Name="MongoDB" Img="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" />
            <Cards link="https://www.postgresql.org/" Name="PostgreSQL" Img="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"/>
            <Cards link="https://www.sqlite.org/index.html" Name="Sqlite" Img="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" />
            <Cards link="https://diesel.rs/" Name="Diesel" Img="https://www.vectorlogo.zone/logos/dieselrs/dieselrs-icon.svg" />

          </div>
        </div>


  
        <h1 className="pt-10 pb-2 text-center font-extrabold">Version Control & Package Managers</h1>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <Cards link="https://git-scm.com/" Name="Git" Img="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" />
            <Cards link="https://github.com/" Name="Github" Img="https://www.vectorlogo.zone/logos/github/github-tile.svg" />
            <Cards link="https://www.docker.com/" Name="Docker" Img="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" />
          </div>
        </div>
        </div>
      </>
    )
  }
  