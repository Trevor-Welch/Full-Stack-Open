const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  const parts = props.course.parts.map((part, i) => {
    return <Part part={part} key={i}/>
  })
  return (
    <div>
      {parts}
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Total = (props) => {
  const total = props.course.parts.reduce( (acc, part) => {
    return acc + part.exercises;
  }, 0 )

  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App