import type { SVGProps } from 'react'
import type { CardIconName } from '../content'

function BaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  )
}

export function CardIcon({ name }: { name: CardIconName }) {
  switch (name) {
    case 'guide':
      return (
        <BaseIcon>
          <path d="M12 20c4.8-2.2 7-5.5 7-10V6.6L12 4 5 6.6V10c0 4.5 2.2 7.8 7 10Z" />
          <path d="m9.4 11.8 1.7 1.7 3.5-3.8" />
        </BaseIcon>
      )
    case 'catalog':
      return (
        <BaseIcon>
          <path d="M5 9.5h14l-1 8.5H6L5 9.5Z" />
          <path d="M8 9.5V7h8v2.5" />
          <path d="M10 13h4" />
        </BaseIcon>
      )
    case 'telegram':
      return (
        <BaseIcon>
          <path d="M12 5.75c-3.73 0-6.75 2.83-6.75 6.31 0 1.87.87 3.55 2.25 4.7v2.48l2.44-1.35c.65.18 1.34.28 2.06.28 3.73 0 6.75-2.83 6.75-6.31S15.73 5.75 12 5.75Z" />
          <path d="M9.55 12.05h.01" />
          <path d="M12 12.05h.01" />
          <path d="M14.45 12.05h.01" />
        </BaseIcon>
      )
    case 'max':
      return (
        <BaseIcon>
          <path d="M12 5.75c-3.73 0-6.75 2.83-6.75 6.31 0 1.87.87 3.55 2.25 4.7v2.48l2.44-1.35c.65.18 1.34.28 2.06.28 3.73 0 6.75-2.83 6.75-6.31S15.73 5.75 12 5.75Z" />
          <path d="M9.15 14.5v-4.05l2.1 2.35 1.55-2.35 1.4 2.35 1.65-1.9v3.6" />
        </BaseIcon>
      )
  }
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m6 9 6 7 6-7"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  )
}
