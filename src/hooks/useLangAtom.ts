import { atom, useAtom } from 'jotai'
import { ilanguages } from '../types/ilanguages'

const INICIAL_STATE = "US"
const LangAtom = atom<ilanguages>(INICIAL_STATE)
LangAtom.debugLabel = 'LangAtom'

export const useLangAtom = () => {
  const [lang, setLang] = useAtom(LangAtom)

  return { lang, setLang }
}
