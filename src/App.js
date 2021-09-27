import './App.css';
import {Dropdown, Stack} from 'react-bootstrap';
import {useState} from 'react';

function App() {
    const [text, setText] = useState('');
    
    return (
        <Stack gap={5} className='mt-5 mx-5'>
            <Dropdown>
                <Dropdown.Toggle variant='primary' id='dropdown-basic'>
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setText('Lorem impsum dolor sit amet.')}>Hoi Lena</Dropdown.Item>
                    <Dropdown.Item onClick={() => setText('Hello World, see ya!!')}>was lauft</Dropdown.Item>
                    <Dropdown.Item onClick={() => setText('Just another placeholder')}>und was sitzt?</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <h2>{text}</h2>
        </Stack>
    );
}

export default App;
