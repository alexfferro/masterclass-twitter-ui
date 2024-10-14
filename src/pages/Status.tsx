import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import './Status.css'

const answers = [
  'Concordo...',
  'Olha, faz sentido!',
  'Parabéns pelo progresso.'
]

export function Status(){
  return (
    <main className='status'>
    <Header title='Tweet'/>
    
    <form className='answer-tweet-form'>
      <label htmlFor="tweet">
        <img src="https://github.com/alexfferro.png" alt="Alex Ferro" />
        <textarea id='tweet' placeholder="Tweet your answer"/>
      </label>
      <button type='submit'> Answer </button>
    </form>
    <Separator/>
    {
      answers.map(answer => {
        return <Tweet key={answer} content={answer}/>
      })
    }
  </main>
  )
}