import React from 'react'
import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';

export default function Custom404() {
    // const { colors } = useSelector(state => state.common);
    // document.body.style.backgroundColor = "#000";

    return (
        <Container className='text-center'>
            {/* <div className='outer'>
                <div className='text-white animate' style={{ textShadow: `5px 10px ${colors[Math.floor(Math.random() * 2) + 1]}` }}>4</div>
                <div className='text-white animate' style={{ textShadow: `5px 10px ${colors[Math.floor(Math.random() * 2) + 1]}` }}>0</div>
                <div className='text-white animate' style={{ textShadow: `5px 10px ${colors[Math.floor(Math.random() * 2) + 1]}` }}>4</div>
            </div> */}
            <div className='display-1 text-white'>NotFound</div>
        </Container>
    )
}
