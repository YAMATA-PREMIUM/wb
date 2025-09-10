import React from 'react'

// import React from 'react'  // ← удалить эту строку

const STORE = {
  name: 'Название магазина',
  tagline: 'Тот самый магазин на Wildberries',
  wbLink: 'https://www.wildberries.ru/seller/0000000',
  promo: 'Скидка -15% на первый заказ по промокоду WBHELLO',
  categories: ['Одежда', 'Аксессуары', 'Дом и кухня', 'Красота', 'Электроника'],
  phone: '+7 (999) 000-00-00',
  email: 'hello@yourstore.ru',
  tg: 'https://t.me/yourstore',
  vk: 'https://vk.com/yourstore',
}


export default function App() {
  return (
    <div className="wrap">
      <header className="hero">
        <div className="logo">WB</div>
        <div>
          <h1>{STORE.name}</h1>
          <p className="tagline">{STORE.tagline}</p>
        </div>
      </header>

      <section className="card">
        <h2>Wildberries</h2>
        <p>Официальная витрина магазина и все товары на WB.</p>
        <a className="cta" href={STORE.wbLink} target="_blank" rel="noreferrer">
          Перейти в магазин
        </a>
        <p className="promo">{STORE.promo}</p>
      </section>

      <section className="grid">
        {STORE.categories.map((c) => (
          <div className="tile" key={c}>
            <h3>{c}</h3>
            <p>Подборки, новинки и бестселлеры категории «{c}».</p>
            <a className="link" href={STORE.wbLink} target="_blank" rel="noreferrer">
              Смотреть на WB →
            </a>
          </div>
        ))}
      </section>

      <section className="card">
        <h2>Контакты</h2>
        <ul className="contacts">
          <li>Телефон: <a href={`tel:${STORE.phone}`}>{STORE.phone}</a></li>
          <li>E-mail: <a href={`mailto:${STORE.email}`}>{STORE.email}</a></li>
          <li>Telegram: <a href={STORE.tg} target="_blank" rel="noreferrer">@yourstore</a></li>
          <li>VK: <a href={STORE.vk} target="_blank" rel="noreferrer">vk.com/yourstore</a></li>
        </ul>
      </section>

      <footer className="foot">
        © {new Date().getFullYear()} {STORE.name}. Не является сайтом Wildberries.
      </footer>
    </div>
  )
}
