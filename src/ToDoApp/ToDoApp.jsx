import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import "./ToDoApp.css"

export default function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
      </section>

      <Footer />
    </>
  );
}