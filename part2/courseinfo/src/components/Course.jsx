const Header = ({courseName}) => {
    return (
      <div>
        <h2>{courseName}</h2>
      </div> 
    )
  }
  
const Course = ({courses}) => {
    const courseMap = courses.map(course => {
        return(
        <div key={course.id}>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )})
    console.log(courseMap)

    return(
        <div>
        {courseMap}
        </div>
    )
}

const Content = (props) => {
    const partMap = props.parts.map(part =>
        <Part key={part.id} part={part.name} exercises={part.exercises} />
        )

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
    const totalAmount = props.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <div>
        <b>Number of exercises {totalAmount}</b>
        </div>
    )
}

export default Course