// ProjectCode.tsx
import React from 'react'
import '../DesignMd/DesignMd.css'
import './ProjectCode.css'

interface CodeLine {
  content: React.ReactNode
  indent?: number
  /** indentation level (each level = 2 spaces) */
  gap?: number
}

interface ProjectCodeProps {
  lines: CodeLine[]
  /** Title in the header bar. Defaults to "Code" (e.g. "src/components/CafeCard.tsx") */
  file?: string
  description?: string
  /**
   * Same as DesignMd: "light" = white text on a dark translucent box (default),
   * "dark" = black text on a white translucent box (for light pages like MyMixx).
   */
  tone?: 'light' | 'dark'
}

/**
 * Code box in the same style as DesignMd.
 * Plain code is muted; everything wrapped in a `code-*` span
 * (code-red, code-blue, code-purple, code-rosa) is highlighted at 100%.
 */
export default function ProjectCode({ lines, file, description, tone = 'light' }: ProjectCodeProps) {
  return (
    <figure className={`DesignMd DesignMd--${tone} ProjectCode`}>
      <figcaption className="DesignMd__bar">
        <svg className="DesignMd__icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M10 12.5 8 15l2 2.5" />
          <path d="m14 12.5 2 2.5-2 2.5" />
        </svg>
        <span className="DesignMd__meta">
          <span className="DesignMd__file">{file ?? 'Code'}</span>
          {description && <span className="DesignMd__description">{description}</span>}
        </span>
      </figcaption>

      <div className="DesignMd__code">
        {lines.map((line, index) => (
          <div className="DesignMd__line" key={index}>
            <span className="DesignMd__number" aria-hidden="true">{index + 1}</span>
            <code
              className="DesignMd__text ProjectCode__text"
              style={{ '--indent': line.gap ?? line.indent ?? 0 } as React.CSSProperties}
            >
              {line.content ?? '​'}
            </code>
          </div>
        ))}
      </div>
    </figure>
  )
}
