import { useState, type FormEvent, type KeyboardEvent } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import './Timeline.css'


export function Timeline(){
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro Tweet',
    'Teste',
    'Deu certo Tweetar!'
  ])

  function createNewTweet(event: FormEvent){
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }
  function handleHotKeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }
  return (
    <main className='timeline'>
      <Header title='Home'/>
      
      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/alexfferro.png" alt="Alex Ferro" />
          <textarea  
          value={newTweet} 
          id='tweet'
          placeholder='Whats happening' 
          onChange={(event) => {
            setNewTweet(event.target.value)
          }}
          onKeyDown={handleHotKeySubmit}    
          />
        </label>
        <button type='submit'> Tweet</button>
      </form>
      <Separator/>
      {
        tweets.map(tweet => {
          return <Tweet key={tweet} content={tweet}/>
        })
      }
    </main>
  )
}