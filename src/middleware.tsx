import createIntlMiddleware from 'next-intl/middleware'
import { LOCALES } from '@/constants/locales'

export default createIntlMiddleware({
  // A list of all locales that are supported
  locales: Object.values(LOCALES),
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'pt-br',
})

export const config = {
  // Skip all paths that aren't pages that you'd like to internationalize
  matcher: ['/((?!_next|favicon.ico).*)'],
}
