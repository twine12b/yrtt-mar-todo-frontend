import AddTask from './components/AddTask/AddTask';
import Task from './components/Task/Task';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="mui--text-center">To Do!</h1>
        <AddTask />
        <p className="mui--text-center">You have 3 tasks left to complete</p>
      </header>
      <main className="mui-row">

        <section className="mui-col-xs-12 mui-col-md-6">
          <h2>Tasks todo</h2>
          <ul className="mui-list--unstyled">
            <Task complete={false} />
            <Task complete={false} />
            <Task complete={false} />
          </ul>
        </section>
        <section className="mui-col-xs-12 mui-col-md-6">
          <h2>Complete tasks</h2>
          <ul className="mui-list--unstyled">
            <Task complete={true} />
            <Task complete={true} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
