import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Input from "./layout/components/Input";
import Tasks from "./layout/components/Tasks";

const App = () => {
  return (
    <main className="main">
      <section className="todo_section">
        <div className="todo__app">
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
