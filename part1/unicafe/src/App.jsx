import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const Display = ({text, data}) => <div>{text} {data}</div>
const DisplayPercentage = ({text, data}) => <div>{text} {data} %</div>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () =>{
    setGood(good + 1)
    setTotal(total + 1)
  }
  const handleNeutralClick = () =>{
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  const handleBadClick = () =>{
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text={'good'}/>
      <Button handleClick={handleNeutralClick} text={'neutral'}/>
      <Button handleClick={handleBadClick} text={'bad'}/>
      <h1>statistics</h1>
      <Display text={'good:'} data={good} />
      <Display text={'neutral:'} data={neutral} />
      <Display text={'bad:'} data={bad} />
      <Display text={'total:'} data={total} />
      <Display text={'average:'} data={((good - bad) / total)} />
      <DisplayPercentage text={'positive:'} data={(good/total) * 100} />
    </div>
  )
}

export default App
