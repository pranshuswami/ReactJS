import card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      
      {card({ user: 'pranshu', age: 23 })}
      {card({ user: 'john', age: 20 })}
    </div>
  )
}

export default App
