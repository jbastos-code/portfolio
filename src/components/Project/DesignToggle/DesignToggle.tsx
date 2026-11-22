import { useState, type ReactNode } from "react";
import "./DesignToggle.css";

type DesignToggleProps = {
  /** Content shown in the "Design" view (images, Typo, etc.) */
  visual: ReactNode;
  /** Content shown in the "DESIGN.md" view */
  md: ReactNode;
  /** Optional: change the button labels */
  visualLabel?: string;
  mdLabel?: string;
};

type View = "visual" | "md";

function DesignToggle({
  visual,
  md,
  visualLabel = "Design",
  mdLabel = "DESIGN.md",
}: DesignToggleProps) {
  const [view, setView] = useState<View>("visual");

  return (
    <div className="design">
      <div className="design-toggle" role="group" aria-label="Design view">
        <button
          type="button"
          aria-pressed={view === "visual"}
          onClick={() => setView("visual")}
        >
          {visualLabel}
        </button>
        <button
          type="button"
          aria-pressed={view === "md"}
          onClick={() => setView("md")}
        >
          {mdLabel}
        </button>
      </div>

      <div className="visual" style={{ display: view === "visual" ? "flex" : "none" }}>
        {visual}
      </div>

      <div className="md" style={{ display: view === "md" ? "flex" : "none" }}>
        {md}
      </div>
    </div>
  );
}

export default DesignToggle;
