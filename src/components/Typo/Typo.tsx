import './Typo.css'

type TypoProps = {
  font?: string
  name?: string
  className?: string
}

const upper = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'
const lower = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
const numbers = '1 2 3 4 5 6 7 8 9 0'

const styles = [
  {
    variant: 'h1',
    label: 'Headline [h1]',
    size: '50px',
    weight: 'Medium',
    extra: 'uppercase',
    text: 'Lorem ipsum',
  },
  {
    variant: 'h2',
    label: 'Title [h2]',
    size: '32px',
    weight: 'Semi-Bold',
    text: 'Lorem ipsum dolor sit amet',
  },
  {
    variant: 'h3',
    label: 'Subtitle [h3]',
    size: '24px',
    weight: 'Bold',
    text: 'Lorem ipsum dolor sit amet',
  },
  {
    variant: 'body',
    label: 'Body',
    size: '20px',
    weight: 'Light',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
]

function Typo({ font, name, className = '' }: TypoProps) {
  const fontName = name ?? (font ? font.split(',')[0].replace(/['"]/g, '').trim() : 'Inter')

  return (
    <section
      className={`Typo ${className}`.trim()}
      style={font ? { fontFamily: font } : undefined}
    >
      <div className='Typo__family'>
        <p className='Typo__family-name'>{fontName}</p>

        <div className='Typo__glyphs'>
          <p>{upper}</p>
        </div>
        <div className='Typo__glyphs'>
          <p>{lower}</p>
        </div>
        <div className='Typo__glyphs'>
          <p>{numbers}</p>
        </div>
      </div>

      <div className='Typo__styles'>
        {styles.map((s) => (
          <div className='Typo__style' key={s.variant}>
            <div className='Typo__meta'>
              <p className='Typo__label'>{s.label}</p>
              <p className='Typo__specs'>
                <b>Font-Size:</b> {s.size} - <b>Font-Weight:</b> {s.weight}
                {s.extra && <> - <b>{s.extra}</b></>}
              </p>
            </div>
            <p className={`Typo__sample Typo__sample--${s.variant}`}>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Typo
