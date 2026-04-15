export const LINKS = {
  videoGuide: 'https://t.me/YAMATA_SUPPORTBOT',
  wildberries: 'https://www.wildberries.ru/seller/250004094',
  telegram: 'https://t.me/YAMATAAA',
  max: 'MAX_URL',
} as const

export const PAGE_CONTENT = {
  brand: 'YAMATA',
  subtitle: 'УМНАЯ ТЕХНИКА ДЛЯ УХОДА И КОМФОРТА',
  about:
    'Помогаем заботиться о себе с удовольствием: продуманные устройства, понятная поддержка и честный сервис.',
  highlight: 'YAMATA. Технологии ухода для каждого дня.',
} as const

export type CardIconName = 'guide' | 'catalog' | 'telegram' | 'max'

export type ActionCard = {
  id: string
  title: string
  subtitle: string
  href: string
  icon: CardIconName
}

export const ACTION_CARDS: ActionCard[] = [
  {
    id: 'guide',
    title: 'ПОДРОБНЫЙ ВИДЕОГАЙД',
    subtitle:
      'Направьте в чат скрин покупки (сделать его нужно на главной странице в разделе «Покупки»), и мы вышлем вам подробную видеоинструкцию по использованию массажера.',
    href: LINKS.videoGuide,
    icon: 'guide',
  },
  {
    id: 'catalog',
    title: 'КАТАЛОГ ТОВАРОВ',
    subtitle: 'на Wildberries',
    href: LINKS.wildberries,
    icon: 'catalog',
  },
  {
    id: 'telegram',
    title: 'ПОДДЕРЖКА',
    subtitle: 'Telegram-чат',
    href: LINKS.telegram,
    icon: 'telegram',
  },
]
