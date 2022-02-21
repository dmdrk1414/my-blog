/* eslint-disable-next-line  */
import { Button, Container, Dropdown, Form } from 'react-bootstrap';
/* eslint-disable-next-line  */
import { useState } from 'react';
/* eslint-disable-next-line  */
import axios from 'axios';

function Catagory() {
    /* eslint-disable-next-line  */
    const [state, setState] = useState(['카테고리', '영어', '프로그램']);

    axios.get('http://localhost:5000/write').then((res) => {
        console.log(res.data);
    });

    return (
        <Form.Select aria-label="Default select example" className="catagory-container">
            <option>{state[0]}</option>
            <option value={state[1]}>{state[1]}</option>
            <option value={state[2]}>{state[2]}</option>
        </Form.Select>
    );
}

// submit 핸들러
function WriteContant() {
    const [state, setState] = useState({ catagory: '', title: '', content: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setState({
            catagory: e.target[0].value,
            title: e.target[1].value,
            content: e.target[2].value,
        });

        // eslint-disable-next-line no-console
        const postArray = [{ catagory: state.catagory, title: state.title, content: state.content }];
        console.log(postArray);

        if (state.catagory !== '카테고리' && state.title !== '' && state.content !== '') {
            // express 와 리액트 연결
            fetch('http://localhost:5000/write', {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(postArray),
            });
        }
    };

    /* eslint-disable-next-line  */
    const handleTextChange = (event) => {
        /* eslint-disable-next-line  */
        const contentValue = event.target.value;
    };

    return (
        // 무조건 div는 하나
        <div>
            <Container>
                <div className="write-container">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <div className="title-dropdown-container">
                                <Form.Label>제목</Form.Label>
                                <Catagory />
                            </div>
                            <Form.Control as="textarea" rows={1} placeholder="제목" className="title-form" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>내용</Form.Label>
                            <Form.Control onChange={handleTextChange} as="textarea" rows={25} className="text-form" />
                        </Form.Group>
                        <Button variant="dark" type="submit" className="write-button">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
        </div>
    );
}

/* eslint-disable-next-line  */
export default WriteContant;
