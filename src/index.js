import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part.name} = {props.part.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.course.parts[0]}/>
      <Part part={props.course.parts[1]}/>
      <Part part={props.course.parts[2]}/>
    </>
  )
}

const Total = (props) => {
  const objeto = {
    parte1: props.course.parts[0].exercises,
    parte2: props.course.parts[1].exercises,
    parte3: props.course.parts[2].exercises
  }
  const  {parte1, parte2, parte3} = objeto;
  const suma = parte1 +parte2 +parte3;

  return (
    <>
      <p>Number of exercises = {suma} </p>    
    </>
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
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
