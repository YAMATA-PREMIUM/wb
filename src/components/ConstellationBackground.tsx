const CONSTELLATIONS = [
  {
    id: 'left-top',
    points: [
      { x: 0.7, y: 20 },
      { x: 10.2, y: 23.5 },
      { x: 16.2, y: 30.4 },
    ],
    links: [
      [0, 1],
      [1, 2],
    ],
  },
  {
    id: 'left-spine',
    points: [
      { x: 19.7, y: 7.8 },
      { x: 19.1, y: 23.1 },
      { x: 24.6, y: 35.4 },
      { x: 22.4, y: 54.8 },
      { x: 22.8, y: 79.2 },
      { x: 24.3, y: 86.4 },
      { x: 21.9, y: 115.1 },
      { x: 25.9, y: 116.3 },
      { x: 23.8, y: 132.7 },
    ],
    links: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 8],
      [5, 8],
      [6, 8],
    ],
  },
  {
    id: 'top-center',
    points: [
      { x: 38.4, y: 24.2 },
      { x: 43.4, y: 17.6 },
      { x: 49.4, y: 18.5 },
      { x: 53.9, y: 22.1 },
      { x: 57.4, y: 13.4 },
      { x: 48.4, y: 35.8 },
    ],
    links: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
      [2, 5],
      [5, 3],
    ],
  },
  {
    id: 'card-spark',
    points: [
      { x: 33.4, y: 68.2 },
      { x: 33.9, y: 67.9 },
    ],
    links: [[0, 1]],
  },
  {
    id: 'center-ray',
    points: [
      { x: 37.5, y: 115.6 },
      { x: 46.5, y: 95.4 },
      { x: 53.4, y: 74.9 },
    ],
    links: [
      [0, 1],
      [1, 2],
    ],
  },
  {
    id: 'top-right',
    points: [
      { x: 61.9, y: 3.8 },
      { x: 67.8, y: 12.8 },
      { x: 79.2, y: 17.6 },
      { x: 84.3, y: 10.2 },
      { x: 87.8, y: 12.4 },
      { x: 81.5, y: 17.4 },
    ],
    links: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 2],
    ],
  },
  {
    id: 'right-top-line',
    points: [
      { x: 93.6, y: 35.2 },
      { x: 100.2, y: 44.1 },
    ],
    links: [[0, 1]],
  },
  {
    id: 'right-column',
    points: [
      { x: 81.2, y: 97.1 },
      { x: 80.5, y: 122.5 },
      { x: 81.3, y: 150.5 },
    ],
    links: [
      [0, 1],
      [1, 2],
    ],
  },
  {
    id: 'lower-right',
    points: [
      { x: 87.9, y: 151.7 },
      { x: 91.2, y: 146.9 },
      { x: 93.4, y: 149.8 },
    ],
    links: [
      [0, 1],
      [1, 2],
    ],
  },
  {
    id: 'bottom-center',
    points: [
      { x: 56.1, y: 126.2 },
      { x: 61.4, y: 118.7 },
      { x: 63.2, y: 122.5 },
      { x: 64.5, y: 129.5 },
      { x: 56.4, y: 136.6 },
      { x: 58.7, y: 145.2 },
      { x: 51.3, y: 133.2 },
    ],
    links: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
      [0, 4],
      [1, 4],
      [2, 4],
      [3, 6],
      [6, 0],
    ],
  },
  {
    id: 'bottom-left',
    points: [
      { x: 10.8, y: 129.6 },
      { x: 6.2, y: 144.7 },
      { x: 0.6, y: 154.1 },
      { x: 5.9, y: 154.5 },
      { x: 12.5, y: 155.2 },
    ],
    links: [
      [0, 1],
      [1, 2],
      [2, 4],
    ],
  },
  {
    id: 'single-stars',
    points: [
      { x: 90.1, y: 105.6 },
      { x: 96.8, y: 69.9 },
      { x: 18.9, y: 159.3 },
      { x: 48.1, y: 152.1 },
      { x: 1.2, y: 55.5 },
      { x: 54.8, y: 5.1 },
    ],
    links: [],
  },
] as const

export function ConstellationBackground() {
  return (
    <svg
      className="landing__constellations"
      viewBox="0 0 100 160"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {CONSTELLATIONS.map((constellation, constellationIndex) => (
        <g key={constellation.id}>
          {constellation.links.map(([start, end], linkIndex) => {
            const from = constellation.points[start]
            const to = constellation.points[end]

            if (!from || !to) {
              return null
            }

            return (
              <line
                key={`${constellation.id}-line-${linkIndex}`}
                className="constellation-line"
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                style={{
                  animationDelay: `${(constellationIndex + linkIndex) * 0.45}s`,
                }}
              />
            )
          })}

          {constellation.points.map((point, pointIndex) => (
            <circle
              key={`${constellation.id}-point-${pointIndex}`}
              className="constellation-point"
              cx={point.x}
              cy={point.y}
              r={pointIndex % 3 === 0 ? 0.2 : 0.16}
              style={{
                animationDelay: `${(constellationIndex + pointIndex) * 0.32}s`,
              }}
            />
          ))}
        </g>
      ))}
    </svg>
  )
}
