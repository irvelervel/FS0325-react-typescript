import { useState } from 'react'

interface FuncComponentProps {
  subtitle: string
  btnLabel?: string
}

const FuncComponent = ({ subtitle, btnLabel }: FuncComponentProps) => {
  const [count, setCount] = useState(0)
  const [movie, setMovie] = useState<null | { Title: string }>(null)
  // movie dovrebbe essere di tipo null | { Title: string }
  // lo fornisco manualmente a "movie" andando ad aggiungere un generic a useState

  return (
    <div>
      <h2>Io invece sono un componente a funzione</h2>
      <h3>{subtitle}</h3>
      <p>
        Valore di count: {count} e il titolo del film è {movie?.Title}
      </p>
      {/* il ? si chiama "OPTIONAL CHAINING" e serve a "fermare" la valutazione
      della proprietà "Title" qualora movie sia null */}
      <button
        onClick={() => {
          setCount(count + 1)
          setMovie({
            Title: 'Interstellar',
          })
        }}
      >
        {btnLabel || 'CLICK'}
      </button>
    </div>
  )
}

export default FuncComponent
