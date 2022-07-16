function Header({ name }) {
  return (
    <h2>{name}</h2>
  );
}

function Content({ parts }) {
  return (
    <div>
      <ul>
        {parts.map((part) => <Part key={part.id} part={part} />)}
      </ul>
    </div>
  );
}

function Part({ part }) {
  return (
    <li>
      {part.name} {part.exercises}
    </li>
  );
}

function Total({ parts }) {
  const totalExercises = parts.reduce((sum, cur) => sum + cur.exercises, parts[0].exercises);
  return (
    <p><strong>Total of {totalExercises} exercises</strong></p>
  );
}

function Course({ course }) {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default Course;
