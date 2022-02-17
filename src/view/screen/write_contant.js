/* eslint-disable-next-line  */
import { Button, Container, Form } from 'react-bootstrap';
/* eslint-disable-next-line  */
import axios from 'axios';

function WriteContant() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const postArray = [];
        postArray.push({
            title: e.target[0].value,
            content: e.target[1].value,
        });
    };

    /* eslint-disable-next-line  */
    const handleTextChange = (event) => {
        /* eslint-disable-next-line  */
        const contentValue = event.target.value;
        // eslint-disable-next-line no-console
        // console.log(contentValue);
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
