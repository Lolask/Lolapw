import styles from './Pessoa.module.css'

function Pessoa({nome, idade, profissão, telefone, CPF, Cabelo, Olho, Estilo, Esporte, Curso, foto}) {
  

  return (
 
      <div className={styles.pessoaContainer}>
          <h2 className={styles.pessoaContent}>Perfil da Pessoa:</h2>
          <img src={foto} alt={nome}/>
          <h3>Nome: {nome}</h3>
          <p>Idade: {idade}</p>
          <p>Profissão: {profissão}</p>
          <p>telefone: {telefone}</p>
          <p>CPF: {CPF}</p>
          <p>Cabelo: {Cabelo}</p>
          <p>Olho: {Olho}</p>
          <p>Estilo: {Estilo}</p>
          <p>Esporte: {Esporte}</p>
          <p>Curso: {Curso}</p>
        </div>
  
  )
}

export default Pessoa