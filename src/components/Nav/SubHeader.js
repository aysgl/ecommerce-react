import { useDispatch, useSelector } from 'react-redux';
import Link from "next/link";
import { Card, CardImg, CardImgOverlay, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, Row, UncontrolledDropdown, Button } from 'reactstrap';
import { useEffect, useState } from 'react';
import { fetchCategory } from '../../redux/category';
import { fetchSubCategory } from '../../redux/subcategory';

export default function SubHeader() {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category.items);
    const subcategory = useSelector(state => state.subcategory.items);
    useEffect(() => {
        dispatch(fetchCategory())
        dispatch(fetchSubCategory())
    }, [dispatch]);

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        document.body.style.overflow = 'hidden';
        setIsOpen(true)  
    }

    const handleClose = () => {
        document.body.style.overflow = 'unset';
        setIsOpen(false)  
    }

    return (
        <Container>
            <Nav className='megamenu py-1 d-flex nav-justified'>
                {category && category.map((cat, k) =>
                    <UncontrolledDropdown
                        key={k}
                        inNavbar
                        className='rounded text-center nav-item'
                        onMouseEnter={handleOpen}
                        onMouseLeave={handleClose}
                    >
                        <DropdownToggle
                            caret
                            nav
                            className='text-secondary'
                            key={k}
                            isOpen={isOpen}
                        >
                            {cat.name}
                        </DropdownToggle>
                        <DropdownMenu
                            className='border-0 px-0'
                        >
                            <Container>
                                <Row className={`row-cols-md-${cat.subcategory.length > 5 ? "4" : "3"} row-cols-2 g-1`}>
                                    {subcategory && subcategory.filter(x => x.catname == cat.name).map((sub, k) =>
                                        <Col key={k}>
                                            <DropdownItem className='m-0 p-0'>
                                                <Link href={`/subcategory/${sub.slug}`}>
                                                    <a>
                                                        <Card>
                                                            {sub.img != null ?
                                                                <CardImg
                                                                    alt="Card image cap"
                                                                    src={sub.img}
                                                                    width="100%"
                                                                /> : null
                                                            }
                                                            <CardImgOverlay className='text-white d-flex align-items-center justify-content-center'>
                                                                <strong>{sub.name}</strong>
                                                            </CardImgOverlay>
                                                        </Card>
                                                    </a>
                                                </Link>
                                            </DropdownItem>
                                        </Col>
                                    )}
                                </Row>
                            </Container>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                )}
            </Nav >
        </Container>
    )
}
