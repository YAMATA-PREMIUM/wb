import type { MouseEvent } from 'react'
import './App.css'
import { ACTION_CARDS, PAGE_CONTENT } from './content'
import { ConstellationBackground } from './components/ConstellationBackground'
import { CardIcon, ChevronDownIcon } from './components/Icons'

const isPlaceholderLink = (href: string) => href.endsWith('_URL')

const preventPlaceholderNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault()
}

function App() {
  return (
    <main className="landing">
      <div className="landing__glow" aria-hidden="true" />
      <ConstellationBackground />

      <div className="landing__shell">
        <div className="landing__inner">
          <header className="hero">
            <p className="hero__brand">{PAGE_CONTENT.brand}</p>
            <p className="hero__subtitle">{PAGE_CONTENT.subtitle}</p>
          </header>

          <section className="action-list" aria-label="Основные ссылки YAMATA">
            {ACTION_CARDS.map((card) => {
              const placeholder = isPlaceholderLink(card.href)

              return (
                <a
                  key={card.id}
                  className={`action-card${card.id === 'guide' ? ' action-card--primary' : ''}`}
                  href={placeholder ? '#' : card.href}
                  target={placeholder ? undefined : '_blank'}
                  rel={placeholder ? undefined : 'noreferrer'}
                  onClick={
                    placeholder ? preventPlaceholderNavigation : undefined
                  }
                  aria-label={`${card.title}: ${card.subtitle}`}
                  data-link-placeholder={card.href}
                >
                  <span className="action-card__icon" aria-hidden="true">
                    <CardIcon name={card.icon} />
                  </span>

                  <span className="action-card__copy">
                    <span className="action-card__title">{card.title}</span>
                    <span className="action-card__subtitle">
                      {card.subtitle}
                    </span>
                  </span>
                </a>
              )
            })}
          </section>

          <a
            className="scroll-anchor"
            href="#about"
            aria-label="Прокрутить к информационному блоку"
          >
            <ChevronDownIcon />
          </a>

          <section className="info-card" id="about" aria-label="О бренде">
            <p className="info-card__text">{PAGE_CONTENT.about}</p>
            <p className="info-card__highlight">{PAGE_CONTENT.highlight}</p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
