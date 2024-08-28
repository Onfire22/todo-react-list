import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Input from "./components/Input";
import Tasks from "./components/Tasks";
import { getAllTasks } from "./store/tasksSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  return (
    <main className="main">
      <section className="tasks_section">
        <div className="tasks__app">
          <Header />
          <Input />
          <Tasks />
          <Footer />
        </div>
      </section>
    </main>
  );
};

export default App;
