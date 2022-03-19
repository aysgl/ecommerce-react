import React from 'react'
import { Input, InputGroup, InputGroupText } from 'reactstrap'

export default function Searchbar({ width }) {
    return (
        <InputGroup style={{ minWidth: width }}>
            <Input className='border-end-0' />
            <InputGroupText color='link border border-start-0'>
                <i className="bi bi-search"></i>
            </InputGroupText>
        </InputGroup>
    )
}
