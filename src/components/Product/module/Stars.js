
export default function Stars({ stars }) {
    return (
        <div className="text-secondary mb-1">
            {stars >= 1 && stars <= 1.4 &&
                <small>
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-light" />
                    <i className="bi bi-star-fill text-light" />
                    <i className="bi bi-star-fill text-light" />
                    <i className="bi bi-star-fill text-light pe-2" />
                    <span className="h6">{stars}</span>
                </small>
            }
            {stars >= 1.5 && stars < 2 &&
                <small>
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-half text-warning" />
                    <i className="bi bi-star-fill text-light" />
                    <i className="bi bi-star-fill text-light" />
                    <i className="bi bi-star-fill text-light pe-2" />
                    <span className="h6">{stars}</span>
                </small>
            }
            {stars >= 2 && stars <= 2.4 &&
                <small>

                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-light" />
                    <i className="bi bi-star-fill text-light" />
                    <i className="bi bi-star-fill text-light pe-2" />
                    <span className="h6">{stars}</span>
                </small>
            }
            {stars >= 2.5 && stars < 3 &&
                <small>

                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-half text-warning" />
                    <i className="bi bi-star-fill text-light" />
                    <i className="bi bi-star-fill text-light pe-2" />
                    <span className="h6">{stars}</span>
                </small>
            }
            {stars >= 3 && stars <= 3.4 &&
                <small>
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-light" />
                    <i className="bi bi-star-fill text-light pe-2" />
                    <span className="h6">{stars}</span>
                </small>
            }
            {stars >= 3.5 && stars < 4 &&
                <small>
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-half text-warning" />
                    <i className="bi bi-star-fill text-light pe-2" />
                    <span className="h6">{stars}</span>
                </small>
            }
            {stars >= 4 && stars <= 4.4 &&
                <small>
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-light pe-2" />
                    <span className="h6">{stars}</span>
                </small>
            }
            {stars >= 4.5 && stars < 5 &&
                <small>
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-half text-warning pe-2" />
                    <span className="h6">{stars}</span>
                </small>
            }
            {stars == 5 &&
                <small>
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning pe-2" />
                    <span className="h6">{stars}</span>
                </small>
            }
        </div>
    )
}
