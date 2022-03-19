import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import Link from "next/link";
import { prodata } from "../../data/prodata"

export default function ProductCard({ title, id, img, price, discount, desc, slug }) {
    const total = (price * discount) / 100
    const amount = price - total;
    // let params = useParams();
    return (
        <div className="slick-carousel">
            <Card className="text-center h-100 position-relative">
                <Link href={`/products/${id}`}>
                    <a className="text-decoration-none link-dark mb-0 rounded">
                        <CardBody>
                            <CardTitle style={{ height: "56px" }} className="mb-1 fw-bold">{title}</CardTitle>
                            <CardImg className="img-fluid rounded" src={img} />

                            <div className="mt-3" style={{ height: "56px" }}>
                                <CardText className="mb-0 fw-bold fs-5 lh-1">{price}</CardText>
                                {discount != 0 &&
                                    <CardText className="text-decoration-line-through mb-0">{amount.toFixed(2)}
                                    </CardText>
                                }
                            </div>
                        </CardBody>
                    </a>
                </Link>
                <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 mb-3">
                    <button
                        className="snipcart-add-item btn btn-dark"
                        data-item-id={id}
                        data-item-image={img}
                        data-item-name={title}
                        data-item-description={desc}
                        data-item-url={`/products/${id}`}
                        data-item-price={price}>Add basket</button>
                </div>
            </Card >
        </div>
    )
}