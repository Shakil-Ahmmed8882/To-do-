import TodoContainer from "../components/todo/TodoContainer";
import Container from "../components/ui/Container";


const Todo = () => {
  return (
    <>
    <Container>
      <article className="pt-14 pb-16">
      <h1 className="text-5xl pb-6  text-center font-bold text-white">My todos</h1>
      <p className="text-[#e1e0e0] text-2xl text-center"> Libero quasi pariatur, nisi repellat aperiam officia.</p>

      </article>
      <TodoContainer />
    </Container>
    </>
  );
};

export default Todo;
