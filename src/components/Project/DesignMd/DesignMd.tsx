import type { ReactNode } from "react"
import "./DesignMd.css"

type DesignMdProps = {
  /** File name shown in the header, e.g. "mova/DESIGN.md" */
  file: string
  /** Raw markdown. Tip: import it with `import md from "./DESIGN.md?raw"` */
  content: string
  /** Small line under the file name */
  description?: string
  /**
   * "light": white text on a dark, translucent box (default – for dark backgrounds)
   * "dark":  black text on a white, translucent box (for light backgrounds)
   * Fine-tune per project with the CSS variables in DesignMd.css.
   */
  tone?: "light" | "dark"
  className?: string
}

const DEFAULT_DESCRIPTION =
  "A DESIGN.md is a Markdown file that tells AI agents how your product should look."

/** Renders **bold** parts of a line in the medium weight, keeping the markdown visible. */
function renderLine(line: string): ReactNode {
  if (line.trim() === "") return "​"
  if (/^#{1,6}\s/.test(line)) return <span className="DesignMd__strong">{line}</span>

  return line.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    /^\*\*[^*]+\*\*$/.test(part) ? (
      <span key={i} className="DesignMd__strong">{part}</span>
    ) : (
      part
    )
  )
}

type Block =
  | { kind: "line"; number: number; text: string }
  | { kind: "table"; start: number; rows: string[] }

const isTableRow = (line: string) => line.trimStart().startsWith("|")

/** Groups consecutive table rows, so they can scroll sideways together. */
function toBlocks(lines: string[]): Block[] {
  const blocks: Block[] = []
  lines.forEach((text, i) => {
    const last = blocks[blocks.length - 1]
    if (isTableRow(text)) {
      if (last?.kind === "table") last.rows.push(text)
      else blocks.push({ kind: "table", start: i + 1, rows: [text] })
    } else {
      blocks.push({ kind: "line", number: i + 1, text })
    }
  })
  return blocks
}

function DesignMd({ file, content, description = DEFAULT_DESCRIPTION, tone = "light", className = "" }: DesignMdProps) {
  const lines = content.replace(/\r\n/g, "\n").replace(/\n+$/, "").split("\n")
  const blocks = toBlocks(lines)

  return (
    <figure className={`DesignMd DesignMd--${tone} ${className}`.trim()}>
      <figcaption className="DesignMd__bar">
        <svg className="DesignMd__icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M10 12.5 8 15l2 2.5" />
          <path d="m14 12.5 2 2.5-2 2.5" />
        </svg>
        <span className="DesignMd__meta">
          <span className="DesignMd__file">{file}</span>
          <span className="DesignMd__description">{description}</span>
        </span>
      </figcaption>

      <div className="DesignMd__code">
        {blocks.map((block) =>
          block.kind === "line" ? (
            <div className="DesignMd__line" key={block.number}>
              <span className="DesignMd__number" aria-hidden="true">{block.number}</span>
              <code className="DesignMd__text">{renderLine(block.text)}</code>
            </div>
          ) : (
            /* tables never wrap: their rows scroll sideways together */
            <div className="DesignMd__line DesignMd__table" key={block.start}>
              <span className="DesignMd__number" aria-hidden="true">
                {block.rows.map((_, r) => (
                  <span key={r}>{block.start + r}</span>
                ))}
              </span>
              <code className="DesignMd__text" tabIndex={0}>
                {block.rows.map((row, r) => (
                  <span className="DesignMd__row" key={r}>{renderLine(row)}</span>
                ))}
              </code>
            </div>
          )
        )}
      </div>
    </figure>
  )
}

export default DesignMd
