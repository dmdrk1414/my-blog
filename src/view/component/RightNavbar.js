/* eslint-disable-next-line  */
import { ListGroup } from 'react-bootstrap';
/* eslint-disable-next-line  */
import { Link } from 'react-router-dom';

function RightNavbar() {
    return (
        // 무조건 div는 하나
        <div>
            <div className="right-navbar_container">
                <div className="right-navbar_container_item_1">
                    <img className="right-navbar_image"></img>
                    <Link to="/write">글쓰기</Link>
                </div>
                <div className="right-navbar_container_item_2">
                    <div className="right-navbar_description_container">
                        <div className="description_title">카테고리</div>
                        <div className="description_content">
                            <div>
                                <div className="category_title">영어</div>
                                <div className="category_contents">
                                    <li className="category_content">동아리</li>
                                    <li className="category_content">동아리</li>
                                    <li className="category_content">동아리</li>
                                </div>
                            </div>
                            <div>
                                <div className="category_title">영어</div>
                                <div className="category_contents">
                                    <li className="category_content">동아리</li>
                                    <li className="category_content">동아리</li>
                                    <li className="category_content">동아리</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* eslint-disable-next-line  */
export default RightNavbar;
