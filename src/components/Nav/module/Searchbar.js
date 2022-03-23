import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Input, InputGroup, InputGroupText, ListGroup, ListGroupItem, UncontrolledCollapse } from 'reactstrap'
import Link from "next/link"

export default function Searchbar({ width }) {
    const { product } = useSelector(state => state.products);
    const [filter, setFilter] = useState("")

    const filtered = product.filter((item) => {
        return Object.keys(item).some((key) =>
            key.toString().toLowerCase().includes(filter.toLocaleLowerCase())
        );
    });
    console.log("fil", filtered);

    return (
        <>
            <InputGroup style={{ minWidth: width }}>
                <Input
                    id="toggler"
                    name="search"
                    placeholder="search"
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)} />
                <InputGroupText color='link border border-start-0'>
                    <i className="bi bi-search"></i>
                </InputGroupText>
            </InputGroup>
            <UncontrolledCollapse toggler="#toggler" className='position-absolute' style={{ zIndex: 1 }}>
                <ListGroup style={{ minWidth: width }}>
                    {filter &&
                        filtered.map((list, i) =>
                            <ListGroupItem key={i} value={list.title} className='d-flex justify-content-between align-items-center p-1'>
                                <Link href={filter}>
                                    <a className='link-secondary text-decoration-none'>
                                        <img src={list.img} width="60" className="img-fluid rounded me-2" />
                                        {list.title.slice(0, 28)}...
                                    </a>
                                </Link>
                            </ListGroupItem>
                        )
                    }
                </ListGroup>
            </UncontrolledCollapse>

        </>
    )
}
