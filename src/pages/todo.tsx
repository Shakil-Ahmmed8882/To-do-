import TodoContainer from "../components/todo/TodoContainer";
import Container from "../components/ui/Container";


const Todo = () => {
  return (
    <>
    <Container>
      <h1 className="text-3xl py-10 text-center font-bold">My todos</h1>
      <TodoContainer />
    </Container>
    </>
  );
};

export default Todo;
