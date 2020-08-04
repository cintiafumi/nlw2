import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/51727502?s=460&u=5aefd625781fa701d413e39727ce1b5519467b9d&v=4" alt="Cíntia Fumi"/>
        <div>
          <strong>Cíntia</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores de tecnologia de química avançada
        <br/><br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa exercitationem dolorem eaque nemo, voluptates omnis numquam facilis soluta, eveniet fuga quidem iusto! Possimus, odio quo qui nam doloribus quod consequatur?
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80.00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;