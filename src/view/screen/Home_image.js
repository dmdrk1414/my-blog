/* eslint-disable-next-line  */
import { Container } from 'react-bootstrap';

function MainImage() {
    return (
        // 무조건 div는 하나
        <div>
            <Container className="main-container">
                <div className="main-image_container">
                    <div className="mainImage_container">
                        <img className="mainImage_image"></img>
                        <div className="mainImage_filter"></div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

/* eslint-disable-next-line  */
export default MainImage;
