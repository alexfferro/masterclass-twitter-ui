import { useState, type FormEvent, type KeyboardEvent } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import './Status.css'
import { PaperPlaneRight } from 'phosphor-react'

export function Status(){
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
  ])

  function createNewAnswer(event: FormEvent){
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }
  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className='status'>
    <Header title='Tweet'/>
    
    <Tweet content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate earum iusto quaerat vitae sapiente dicta tenetur et mollitia ratione, quisquam placeat excepturi, voluptatum voluptas dolor, repellat veritatis qui molestiae!'/>
    <Separator/>
    <form className='answer-tweet-form' onSubmit={createNewAnswer}>
      <label htmlFor="tweet">
        <img src="https://github.com/alexfferro.png" alt="Alex Ferro" />
        <textarea 
        value={newAnswer} 
        id='tweet' 
        placeholder="Tweet your answer" 
        onChange={(event) => {
          setNewAnswer(event.target.value)
        }}
        onKeyDown={handleHotKeySubmit}
        />
      </label>
      <button type='submit'>
        <PaperPlaneRight/>
        <span>Answer</span>
        </button>
    </form>

    {
      answers.map(answer => {
        return <Tweet key={answer} content={answer}/>
      })
    }
  </main>
  )
}