import { useSelector } from 'react-redux';
import Link from "next/link";
import { Card, CardImg, CardImgOverlay, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, Row, UncontrolledDropdown, Button } from 'reactstrap';
import { useState } from 'react';

export default function SubHeader() {
    const { category } = useSelector(state => state.categories);
    const { subcategory } = useSelector(state => state.subcategories);

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    return (
        <Container>
            <Nav className='megamenu py-1 d-flex nav-justified'>
                {category.map((cat, k) =>
                    <UncontrolledDropdown
                        key={k}
                        inNavbar
                        className='rounded text-center nav-item'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onToggle={() => setIsClicked(!isClicked)}
                    >
                        <DropdownToggle
                            caret
                            nav
                            className='text-secondary'

                        >
                            {cat.name}
                        </DropdownToggle>
                        <DropdownMenu
                            className='border-0 px-0'
                        >
                            <Container className=''>
                                <Row className={`row-cols-md-${cat.subcategory.length > 5 ? "4" : "3"} row-cols-2 g-1 rounded shadow p-1`}>
                                    {subcategory.filter(x => x.catname == cat.name).map((sub, k) =>
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
