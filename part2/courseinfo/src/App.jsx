const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div> 
  )
}

const Course = (props) => {
  return(
    <div>
      <Header course={props.course} />
      <Content parts={props.course} />
      <Total parts={props.course} />
    </div>
  )
}

const Content = (props) => {
  const partMap = props.parts.parts.map(part =>
     <Part key={part.id} part={part.name} exercises={part.exercises} />
     )
  console.log(partMap);
  return(
    partMap
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  const totalAmount = props.parts.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <div>
      <p>Number of exercises {totalAmount}</p>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }


  return(
    <div>
      <Course course={course}/>
    </div>
  )
}

export default App