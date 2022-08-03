import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Form from '../components/Form';
import List from '../components/List';
import ITarefa from '../types/ITarefa';
import './style.scss';

function App() {
    const [tasks, setTasks] = useState<ITarefa[]>([]);

    return (
        <div className="AppStyle">
            <Form setTarefas={setTasks} />
            <List tarefas={tasks} />
            <Cronometro />
        </div>
    );
}

export default App;
