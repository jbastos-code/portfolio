import { createContext, useContext } from "react"

export type Lang = "de" | "en"

type LangContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
}

export const LangContext = createContext<LangContextType>({
  lang: "de",
  setLang: () => {}
})

export const useLang = () => useContext(LangContext)
