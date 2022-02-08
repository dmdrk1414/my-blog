/* eslint-disable-next-line  */
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Container } from 'react-bootstrap';

function Manu() {
    return (
        // 무조건 div는 하나
        <div className="manu">
            <Navbar bg="light" expand="lg" className="navbar-container">
                <Navbar.Brand href="#home" className="navber_title">
                    dmdrk1414 블로그
                </Navbar.Brand>
                <Form inline className="search-container">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 search_items search_item_1" id="searchPost" formMethod="POST" />
                    <Button variant="outline-success" className="search_items search_item_2">
                        Search
                    </Button>
                </Form>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">메인 화면가기</Nav.Link>
                        <Nav.Link href="#posts">전체글 보기</Nav.Link>
                        <NavDropdown title="카테고리" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">카테고리_1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">카테고리_2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">카테고리_3</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">카테고리_4</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">카테고리_5</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container></Container>
        </div>
    );
}

/* eslint-disable-next-line  */
export default Manu;
