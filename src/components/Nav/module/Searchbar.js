import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Input, InputGroup, InputGroupText, ListGroup, ListGroupItem, UncontrolledCollapse } from 'reactstrap'
import Link from "next/link"
import { fetchProducts } from '../../../redux/product';

export default function Searchbar({ width }) {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.items);
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);

    const [filter, setFilter] = useState("")
    const [isOpen, setIsOpen] = useState(false);

    const onChangeHandle = (e) => {
        setFilter(e.target.value)
        setIsOpen(true)
    }
    const onLeaveHandle = () => {
        setIsOpen(false)
    }
    const filtered = product && product.filter((item) => {
        return Object.keys(item).some(() =>
            item.title.toString().toLowerCase().includes(filter.toLocaleLowerCase())
        );
    });

    return (
        <>
            <InputGroup style={{ minWidth: width }}>
                <Input
                    name="search"
                    placeholder="search"
                    type="text"
                    value={filter}
                    onClick={onChangeHandle}
                    onMouseLeave={onLeaveHandle}
                    onChange={onChangeHandle} />
                <InputGroupText id="toggler" color='link border border-start-0'>
                    <i className="bi bi-search"></i>
                </InputGroupText>
            </InputGroup>
            <UncontrolledCollapse
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                toggler="#toggler"
                isOpen={isOpen}
                className='position-absolute' style={{ zIndex: 1 }}>
                {filter &&
                    <ListGroup style={{ minWidth: width }}>
                        {filtered.length > 0 ?
                            filtered.map((list, i) =>
                                <ListGroupItem key={i} value={list.title} className='d-flex justify-content-between align-items-center p-1'>
                                    <Link href={list.slug}>
                                        <a className='link-secondary text-decoration-none'>
                                            <img src={list.img} width="60" className="img-fluid rounded me-2" />
                                            {list.title.slice(0, 28)}...
                                        </a>
                                    </Link>
                                </ListGroupItem>
                            ) :
                            <ListGroupItem className='d-flex justify-content-center align-items-center p-1'>
                                <div className='text-dark text-center p-4'>
                                    <i className="bi bi-emoji-dizzy display-1"></i>
                                    <p className='fs-4 fw-bold mb-0'>sorry</p>
                                    <p>we could not find this "<strong>{filter.slice(0, 12)}...</strong>"</p>
                                </div>
                            </ListGroupItem>
                        }
                    </ListGroup>
                }
            </UncontrolledCollapse>
        </>
    )
}
