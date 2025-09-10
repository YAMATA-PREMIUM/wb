import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚙️ Укажи base согласно твоему типу репозитория
// - user.github.io → base: '/'
// - любой другой repo → base: '/REPO_NAME/'
const isUserSite = false // ← поставь true, если репозиторий <username>.github.io
const base = isUserSite ? '/' : '/wb-visitka/'

export default defineConfig({
  plugins: [react()],
  base,
})
