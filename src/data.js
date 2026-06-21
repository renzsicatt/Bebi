import { CalendarHeart, Heart, Images, MailOpen, MapPinned, Sparkles } from 'lucide-react'
import mayPhoto from '../assets/MAY.jpg'
import junePhoto from '../assets/JUNE.jpg'
import julyPhoto from '../assets/JULY.jpg'
import augustPhoto from '../assets/AUGUST.jpg'
import septemberPhoto from '../assets/SEPTEMBER.jpg'
import octoberPhoto from '../assets/OCT.jpg'
import novemberPhoto from '../assets/NOVEMBER.jpg'

export const dashboardCards = [
  { title: 'Days together', note: 'Every day is my favorite', icon: CalendarHeart, target: 'timeline' },
  { title: 'Reasons I love you', note: 'Too many to count', icon: Heart, target: 'lambing' },
  { title: 'Our memories', note: 'The little moments', icon: Images, target: 'gallery' },
  { title: "Open when you're sad", note: 'A hug, but digital', icon: MailOpen, target: 'open-when' },
  { title: 'Open when you miss me', note: "I'm right here, always", icon: Sparkles, target: 'open-when' },
  { title: 'Future plans', note: 'Our next chapters', icon: MapPinned, target: 'plans' },
]

export const timelineEvents = [
  { date: 'The beginning', title: 'first meeting initialized', text: 'The day my favorite plot twist quietly began.', tag: 'feat' },
  { date: 'Chapter 01', title: 'first date unlocked', text: 'Two people, one date, and a lot of kilig pretending to be chill.', tag: 'merge' },
  { date: 'Soon after', title: 'first laugh shipped', text: 'That was when I knew: I want to keep hearing that laugh.', tag: 'joy' },
  { date: 'Stronger us', title: 'first tampuhan fixed', text: 'We talked, we listened, and chose each other again.', tag: 'fix' },
  { date: 'In progress', title: 'more memories loading', text: 'No deadline—just a lifetime of tiny, beautiful updates.', tag: 'wip' },
]

export const lambingMessages = [
  'Reminder lang: ang ganda mo today. At kahapon. At bukas din, advance na ako. 🤍',
  'Bebiiiiii, pahinga ka rin ha? Hindi ka machine—ikaw ang favorite person ko.',
  'Kung pagod ka, dito ka lang. May unlimited lambing at zero judgment tayo.',
  'Miss na kita. Medyo dramatic, pero accurate naman. Halika nga rito. 🫶',
  'Proud ako sayo even on the days na ang achievement mo lang ay bumangon.',
  'Ikaw pa rin ang favorite notification ko, kahit “ano ulam?” lang ang message mo.',
  'I love doing nothing with you. Somehow, it still feels like everything.',
]

export const galleryItems = [
  { month: 'May', image: mayPhoto, caption: 'One of my favorite memories with you.' },
  { month: 'June', image: junePhoto, caption: 'Our first little adventure together.' },
  { month: 'July', image: julyPhoto, caption: 'Good food, better company.' },
  { month: 'August', image: augustPhoto, caption: 'A day worth keeping forever.' },
  { month: 'September', image: septemberPhoto, caption: 'Thank you for always showing up.' },
  { month: 'October', image: octoberPhoto, caption: 'Ordinary day, core memory.' },
  { month: 'November', image: novemberPhoto, caption: 'Still my favorite person.' },
]

export const openWhenLetters = [
  { id: 'sad', emoji: '🌧️', title: "Open when you're sad", preview: 'For the heavy days', message: "Bebiiiiii, okay lang hindi maging okay today. Hindi mo kailangang ayusin lahat agad. Breathe, drink some water, and remember: hindi ka nag-iisa. I’m here—ready makinig, mangulit, or just sit quietly with you. I love you on your bright days and especially on the cloudy ones." },
  { id: 'miss', emoji: '🌙', title: 'Open when you miss me', preview: 'A tiny pocket-sized hug', message: "I miss you too—probably more than I’m admitting. Close your eyes and imagine my tightest hug, ‘yung ayaw pa kitang bitawan. Distance is just a little pause; ikaw pa rin ang favorite place ko to come home to." },
  { id: 'motivation', emoji: '✨', title: 'Open when you need motivation', preview: 'You can do hard things', message: "Look how far you’ve come, love. You don’t have to finish everything today—one small step is enough. I believe in you even when your own confidence is on low battery. Kaya mo yan, and I’ll be cheering embarrassingly loud the whole way." },
]

export const futurePlans = [
  'More dates (kahit saan, basta ikaw)',
  'Travel together',
  'Build our dream life',
  'More random food trips',
  'Forever teammate',
]
