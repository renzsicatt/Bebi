import { useState } from 'react'
import { ArrowRight, Eye, EyeOff, Heart } from 'lucide-react'

export default function LoginScreen({ onUnlock }) {
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  function submit(event) {
    event.preventDefault()
    if (password.toLowerCase() === 'babe') onUnlock()
    else {
      setError(true)
      setPassword('')
    }
  }

  return (
    <main className="login-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="login-card animate-in">
        <div className="seal"><Heart size={25} fill="currentColor" /></div>
        <p className="eyebrow">Private little corner</p>
        <h1>For My<br /><em>Bebiiiiii</em></h1>
        <p className="login-copy">A tiny place on the internet made only for you.</p>
        <form onSubmit={submit}>
          <label htmlFor="password">What do I call you?</label>
          <div className={`password-field ${error ? 'has-error' : ''}`}>
            <input id="password" type={show ? 'text' : 'password'} value={password} onChange={(e) => { setPassword(e.target.value); setError(false) }} placeholder="Enter our secret word" autoFocus />
            <button type="button" className="icon-button" onClick={() => setShow(!show)} aria-label={show ? 'Hide password' : 'Show password'}>{show ? <EyeOff /> : <Eye />}</button>
          </div>
          <div className="login-message" aria-live="polite">{error ? "Hmm hindi ikaw 'to ah 😤" : 'Hint: endearment natin ♡'}</div>
          <button className="primary-button login-button" type="submit">Let me in <ArrowRight size={18} /></button>
        </form>
      </div>
      <p className="login-footer">Made with way too much love & a little bit of code.</p>
    </main>
  )
}
