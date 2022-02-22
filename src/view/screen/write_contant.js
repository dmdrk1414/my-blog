/* eslint-disable-next-line  */
import { Button, Container, Dropdown, Form } from 'react-bootstrap';
/* eslint-disable-next-line  */
import { useEffect, useState } from 'react';
/* eslint-disable-next-line  */
import axios from 'axios';

function Catagory() {
    /* eslint-disable-next-line  */
    const [state, setState] = useState({ title: [] });
    /* eslint-disable-next-line  */
    const [categoryState, categorySteState] = useState([]);

    let categoryData = [];
    useEffect(async () => {
        // AXIOS 로이용해 express의 데이터를 리액터로 잡기
        await axios.get('http://localhost:5000/write').then((res) => {
            const data = res.data;
            categoryData = data.map((_data) => ({
                content: _data.content,
            }));

            setState({
                title: [...categoryData],
            });
        });
    }, [state]);

    const stateitemArray = state.title.map((item) => item.content);
    const categoryOption = stateitemArray.map((category) => <option value={category}>{category}</option>);
    return (
        <Form.Select aria-label="Default select example" className="catagory-container">
            <option>카테고리</option>
            {categoryOption}
        </Form.Select>
    );
}

// submit 핸들러
function WriteContant() {
    const [state, setState] = useState({ category: '', title: '', content: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setState({
            category: e.target[0].value,
            title: e.target[1].value,
            content: e.target[2].value,
        });

        // eslint-disable-next-line no-console
        const postArray = [{ category: state.category, title: state.title, content: state.content }];
        console.log(postArray);

        if (state.category !== '카테고리' && state.title !== '' && state.content !== '') {
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
