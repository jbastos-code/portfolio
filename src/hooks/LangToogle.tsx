import { useState, useEffect, useRef } from "react"
import { useLang } from "./useLang"

import './LangToogle.css'

export function LangToggle() {
   const { lang, setLang } = useLang()
  const [faded, setFaded] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  const fadeLater = () => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setFaded(true), 4000)
  }

  useEffect(() => {
    fadeLater()
    return () => clearTimeout(timer.current)
  }, [])

  const handleSelect = (selected: "de" | "en") => {
    setLang(selected)
    setFaded(false)
    fadeLater()
  }

  return (
    <div className="lang-toogle-container">
      <div
        className={`lang-toggle ${faded ? "faded" : ""}`}
      >
        <button
          aria-pressed={lang === "de"}
          className={`lang-option ${lang === "de" ? "active" : ""}`}
          onClick={() => handleSelect("de")}
        >
          Deutsch
        </button>
        <button
          aria-pressed={lang === "en"}
          className={`lang-option ${lang === "en" ? "active" : ""}`}
          onClick={() => handleSelect("en")}
        >
          English
        </button>
      </div>

    </div>
  )
}