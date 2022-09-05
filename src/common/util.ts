import { useRouter } from 'next/router'

export const matchPath = (path: string): boolean => {
  const { pathname } = useRouter()
  return pathname === path
}
