import { useEffect, useState } from 'react'
import { Badge, Button } from 'reactstrap'

export default function Basket({ title }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (window.Snipcart) {
            setCount(Snipcart.store.getState().cart.items.count);
        }
    }, []);

    return (
        <Button
            color="secondary"
            outline
            className='snipcart-checkout snipcart-summary'
        >
            <i className="bi bi-cart-fill me-1"></i>
            <Badge style={{ marginLeft: "-17px", marginTop: "17px", position: "absolute" }} pill color='primary'>
                <span className="snipcart-items-count"></span>
            </Badge>
            <span className='ps-2'> {title}</span>
        </Button>
    )
}
