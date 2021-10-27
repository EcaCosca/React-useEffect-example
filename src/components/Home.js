import { useState, useEffect } from 'react';
import ToDoItem from './ToDoItem';

const Home = () => {
    const [todos, setTodos] = useState([
        { title: 'do laundry', content: 'lorem ipsum', author:'eca', id: 1},
        { title: 'take out the trash', content: 'lorem ipsum', author:'eca', id: 2},
        { title: 'Commit a crime', content: 'lorem ipsum', author:'eca', id: 3},
        { title: 'No witnesses', content: 'lorem ipsum', author:'eca', id: 4},
        { title: 'do the dishes', content: 'lorem ipsum', author:'eca', id: 5},
    ])

    const [crime, setCrime] = useState('Steal wallet');

    const [size, setSize] = useState()

    const handleDelete = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        // console.log(newTodos)
    }

    useEffect(() => {
        console.log('USE EFFECT HAD RUN')
        console.log(crime);
    }, [crime])

    useEffect(() => {
        const handleResize = () => {
            setSize(window.screen.width)
        }

        window.addEventListener("resize", handleResize);


        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    })



    return ( 
        <div className="home">
            <h3>{window.screen.width}</h3>
            <h3>{size}</h3>
            <ToDoItem todos={todos} title="All Todos" handleDelete={handleDelete} />
            <button onClick={() => setCrime('Steal car')}>COMMIT CRIME</button>
            <h1>Next crime: {crime}</h1>
        </div>
     );
}

export default Home;