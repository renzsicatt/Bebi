import { useState } from 'react'
import { ArrowDown, Check, ChevronRight, Code2, Heart, RefreshCw, Sparkles } from 'lucide-react'
import LoginScreen from './components/LoginScreen'
import Modal from './components/Modal'
import { dashboardCards, futurePlans, galleryItems, lambingMessages, openWhenLetters, timelineEvents } from './data'

const secretLetter = {
  emoji: '💌',
  title: 'My favorite person,',
  message: 'Thank you for being my safe place, my pahinga, and my favorite person. I may not always be perfect, but I will always choose you and try to be better for you.',
}

function scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

export default function App() {
  const [unlocked, setUnlocked] = useState(false)
  const [lambingIndex, setLambingIndex] = useState(0)
  const [letter, setLetter] = useState(null)

  function generateLambing() {
    let next = Math.floor(Math.random() * lambingMessages.length)
    if (next === lambingIndex) next = (next + 1) % lambingMessages.length
    setLambingIndex(next)
  }

  if (!unlocked) return <LoginScreen onUnlock={() => setUnlocked(true)} />

  return (
    <div className="site-shell">
      <nav className="nav-wrap">
        <button className="brand" onClick={() => scrollTo('home')}><span>♡</span> For My Bebiiiiii</button>
        <div className="nav-links">
          <button onClick={() => scrollTo('timeline')}>Our story</button>
          <button onClick={() => scrollTo('gallery')}>Memories</button>
          <button onClick={() => scrollTo('open-when')}>Letters</button>
        </div>
        <button className="nav-heart" onClick={() => setLetter(secretLetter)} aria-label="Open secret surprise"><Heart size={17} fill="currentColor" /></button>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="hero-content animate-in">
            <span className="mini-pill"><Sparkles size={14} /> Made especially for you</span>
            <h1>Hi, <em>Bebiiiiii.</em></h1>
            <p>I made this little website just for you—because you deserve your own tiny corner of the internet.</p>
            <button className="primary-button" onClick={() => scrollTo('dashboard')}>Come look around <ArrowDown size={17} /></button>
          </div>
          <div className="floating-note note-one">you + me <span>∞</span></div>
          <div className="floating-note note-two">my favorite<br />human ♡</div>
        </section>

        <section className="section dashboard-section" id="dashboard">
          <div className="section-heading">
            <div><p className="eyebrow">Our little universe</p><h2>Everything I love, <em>in one place.</em></h2></div>
            <p>A collection of us—our story, tiny moments, and all the chapters waiting to happen.</p>
          </div>
          <div className="dashboard-grid">
            {dashboardCards.map(({ title, note, icon: Icon, target }, i) => (
              <button className="dash-card reveal-card" style={{ '--delay': `${i * 60}ms` }} key={title} onClick={() => scrollTo(target)}>
                <span className="dash-icon"><Icon size={22} /></span><span><strong>{title}</strong><small>{note}</small></span><ChevronRight size={18} className="card-arrow" />
              </button>
            ))}
          </div>
        </section>

        <section className="section timeline-section" id="timeline">
          <div className="section-heading centered"><div><p className="eyebrow"><Code2 size={14} /> Our commit history</p><h2>Building <em>us</em>, one memory at a time.</h2></div></div>
          <div className="timeline-list">
            {timelineEvents.map((event, i) => (
              <article className="commit" key={event.title}>
                <div className="commit-rail"><span>{i === timelineEvents.length - 1 ? <Heart size={14} fill="currentColor" /> : <Code2 size={14} />}</span></div>
                <div className="commit-card"><div className="commit-meta"><span>{event.date}</span><code>{event.tag}</code></div><h3><span>commit:</span> {event.title}</h3><p>{event.text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="lambing-section" id="lambing">
          <div className="lambing-inner">
            <div className="lambing-copy"><p className="eyebrow">Emergency sweetness dispenser</p><h2>Need a little <em>lambing?</em></h2><p>One click. Unlimited sweetness. No subscription required.</p><button className="primary-button" onClick={generateLambing}><RefreshCw size={17} /> Generate Lambing</button></div>
            <div className="message-card" key={lambingIndex}><span className="quote-mark">“</span><p>{lambingMessages[lambingIndex]}</p><div className="message-signoff">— Your favorite kulit ♡</div></div>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="section-heading"><div><p className="eyebrow">Our camera roll</p><h2>Little moments, <em>big memories.</em></h2></div><p>The blurry, candid, perfectly ordinary moments I never want to forget.</p></div>
          <div className="gallery-grid">
            {galleryItems.map((item, i) => <figure className={`photo-card photo-${i + 1}`} key={item.month}><div className="photo-frame"><img src={item.image} alt={`${item.month} memory together`} loading="lazy" /></div><figcaption><span>{item.month}</span><p>{item.caption}</p></figcaption></figure>)}
          </div>
        </section>

        <section className="section letters-section" id="open-when">
          <div className="section-heading centered"><div><p className="eyebrow">For whenever you need me</p><h2>Open when...</h2></div></div>
          <div className="letters-grid">
            {openWhenLetters.map((item) => <button className="letter-card" key={item.id} onClick={() => setLetter(item)}><span className="letter-emoji">{item.emoji}</span><span><strong>{item.title}</strong><small>{item.preview}</small></span><span className="open-label">Open letter <ChevronRight size={14} /></span></button>)}
          </div>
        </section>

        <section className="section plans-section" id="plans">
          <div className="plans-card">
            <div className="plans-copy"><p className="eyebrow">The roadmap</p><h2>Still so much life to do <em>with you.</em></h2><p>No pressure, no perfect timeline. Just a collection of dreams I’d love to slowly turn into memories—with my favorite teammate.</p><div className="tiny-code">status: happily_in_progress ♡</div></div>
            <div className="checklist">{futurePlans.map((plan, i) => <div className="check-item" key={plan}><span><Check size={16} /></span><p>{plan}</p><small>{String(i + 1).padStart(2, '0')}</small></div>)}</div>
          </div>
        </section>
      </main>

      <footer><button className="footer-heart" onClick={() => setLetter(secretLetter)} aria-label="One more secret"><Heart size={15} fill="currentColor" /></button><p>Made with love, patience, and probably too many pink pixels.</p><span>For my Bebiiiiii, always. ♡</span></footer>
      {letter && <Modal content={letter} onClose={() => setLetter(null)} />}
    </div>
  )
}
