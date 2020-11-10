import React, {useState} from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
    const [questions] = useState(data);


    return (
        <main>
            <section className='container'>
                <h3>Questions and Answers About Login</h3>
                <section className='info'>
                    {questions.map((question) => {
                        return (
                            <SingleQuestion key={question.id} {...question}/>
                        )
                    })
                    }
                </section>
            </section>
        </main>
    );
}

export default App;