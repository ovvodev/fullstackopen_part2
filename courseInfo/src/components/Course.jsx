
const Header = (props) => {
    const { header } = props;
    return(
        <h1>{header}</h1>
    );

};
 const Content = (props) => {
    const {parts} = props;
    return(
        <div>{parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}</div>
        
    );

 };

 const Total = (props) => {
    const { numbers  } = props;
    const numberArray = Object.values(numbers);
    
    const total = numberArray.reduce((acc, cur) => acc + cur.exercises, 0);
    return(
        <div><h3>total of {total} exercises</h3></div>
    );
 };

const Course = (props) => {
    
    const { course } = props;


    return (
        
        <div>
        <Header  header={course.name}/>
        <Content parts = {course.parts} />
        <Total numbers = {course.parts}  />
      </div>
    );
  };



export default Course
  