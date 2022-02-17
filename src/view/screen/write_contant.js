/* eslint-disable-next-line  */
import { Button, Container, Form } from 'react-bootstrap';
/* eslint-disable-next-line  */
import { useState } from 'react';

function WriteContant() {
    const [state, setState] = useState({ title: '', content: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setState({
            title: e.target[0].value,
            content: e.target[1].value,
        });

        // eslint-disable-next-line no-console
        const postArray = [{ title: state.title, content: state.content }];

        if (state.title !== '' && state.content !== '') {
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
                            <Form.Label>제목</Form.Label>
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
