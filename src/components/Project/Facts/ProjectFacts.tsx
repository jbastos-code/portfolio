import { useLang } from '../../../hooks/useLang'
import './ProjectFacts.css'

type Fact = {
  label: string
  labelEn?: string
  value: string
  valueEn?: string
}

/** Short row of project facts below the header (e.g. type, role, tools). */
function ProjectFacts({ facts }: { facts: Fact[] }) {
  const { lang } = useLang()

  return (
    <dl className="ProjectFacts text-block">
      {facts.map((fact) => (
        <div className="fact" key={fact.label}>
          <dt>{lang === 'en' ? fact.labelEn ?? fact.label : fact.label}</dt>
          <dd>{lang === 'en' ? fact.valueEn ?? fact.value : fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}

export default ProjectFacts
