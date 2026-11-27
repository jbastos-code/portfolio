import { useEffect, useState } from "react"
import { LangContext, type Lang } from "./useLang"

function readStoredLang(): Lang {
  try {
    const stored = localStorage.getItem("lang")
    return stored === "en" ? "en" : "de"
  } catch {
    return "de"
  }
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(readStoredLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const handleSetLang = (newLang: Lang) => {
    try {
      localStorage.setItem("lang", newLang)
    } catch {
      // storage unavailable (e.g. private mode) – keep the choice in memory only
    }
    setLang(newLang)
  }

  return (
    <LangContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LangContext.Provider>
  )
}
