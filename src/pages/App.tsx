import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Form from '../components/Form';
import List from '../components/List';
import ITarefa from '../types/ITarefa';
import './style.scss';

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    const [, setTarefaSelecionada] = useState<ITarefa>();

    const selecionaTarefa = (tarefa: ITarefa) => {
        setTarefaSelecionada(tarefa);
    };

    return (
        <div className="AppStyle">
            <Form setTarefas={setTarefas} />
            <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
            <Cronometro />
        </div>
    );
}

export default App;
