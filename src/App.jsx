import './App.css'
import MeuNome from './componentes/MeuNome'
import Pessoa from './componentes/Pessoa'

function App() {
 
  

  return (
 
      <div className= "App">
          <h2> Fznd propriedades nos componetes :</h2>
           <Pessoa
              nome="lola"
              idade="18"
              profissão="Eita"
              telefone="01234567890"
              CPF="01234567890"
              Cabelo="Loirimda"
              Olho="Mel "
              Estilo="Limda"
              Esporte="Volei rs"
              Curso="3ds"
              foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQyNsGBRUvoAK2JudBRxDv_rjHyiipWk6gA&s"
              />
              <Pessoa
              nome="andre"
              idade="10"
              profissão="Vagabundo"
              telefone="01234567890"
              CPF="01234567890"
              Cabelo="Castanho"
              Olho="Castanho escuro"
              Estilo="Nerdolaa"
              Esporte="Jogado caro"
              Curso="3ds"
              foto="https://i.pinimg.com/474x/1e/44/fc/1e44fcf00c123c6990ab1dbc5fe97f68.jpg"
              />
        </div>
  
  )
}

export default App
