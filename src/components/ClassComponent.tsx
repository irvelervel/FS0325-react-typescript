// creiamo un componente a classe in un file .tsx

// ogni volta che invocate un componente React con una prop, dovete
// informare il componente che riceverà quella prop!
// il valore di default delle props di un qualsiasi componente React è { }

interface ClassComponentProps {
  subtitle: string
  btnLabel?: string
  // sto "tipizzando" l'oggetto delle props di questo componente ClassComponent
}

interface ClassComponentState {
  count: number
}

import { Component } from 'react'

class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  state = {
    count: 0,
  }

  render() {
    return (
      <div>
        <h2>Componente a CLASSE</h2>
        <h3>{this.props.subtitle.toUpperCase()}</h3>
        <div>
          <p>Il valore di count è {this.state.count}</p>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              })
            }}
          >
            {this.props.btnLabel || 'CLICK'}
          </button>
          <ul>
            <li>Uno</li>
            <li>Due</li>
            <li>Tre</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ClassComponent
