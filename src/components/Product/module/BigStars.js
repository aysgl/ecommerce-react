import { Badge } from "reactstrap";

export default function BigStars({ stars }) {
    return (
        <div className="text-secondary text-center mb-1">
            {stars == 0 &&
                <div>
                    <div className="icon-shadow">
                        <i className="bi bi-emoji-dizzy display-1"></i>
                    </div>

                    <p className="mb-0">no reviews yet</p>
                </div>
            }
            {stars >= 1 && stars < 2 &&
                <div>
                    <div className="icon-shadow">
                        <i className="bi bi-emoji-frown display-1"></i>
                    </div>

                    <div className="display-6">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star text-warning" />
                        <i className="bi bi-star text-warning" />
                        <i className="bi bi-star text-warning" />
                        <i className="bi bi-star text-warning" />
                    </div>
                    <Badge pill>disappointed</Badge>
                </div>
            }
            {stars >= 2 && stars < 3 &&
                <div>
                    <div className="icon-shadow">
                        <i className="bi bi-emoji-smile-upside-down display-1"></i>
                    </div>

                    <div className="display-6">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star text-warning" />
                        <i className="bi bi-star text-warning" />
                        <i className="bi bi-star text-warning" />
                    </div>
                    <Badge pill>not a fan</Badge>
                </div>
            }
            {stars >= 3 && stars < 4 &&
                <div>
                    <div className="icon-shadow">
                        <i className="bi bi-emoji-smile display-1"></i>
                    </div>

                    <div className="display-6">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star text-warning" />
                        <i className="bi bi-star text-warning" />
                    </div>
                    <Badge pill>it's ok</Badge>
                </div>
            }
            {stars >= 4 && stars < 4.5 &&
                <div>
                    <div className="icon-shadow">
                        <i className="bi bi-emoji-laughing display-1"></i>
                    </div>
                    <div className="display-6">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star text-warning" />
                    </div>
                    <Badge pill>like it</Badge>
                </div>
            }
            {stars >= 4.5 &&
                <div>
                    <div className="icon-shadow">
                        <i className="bi bi-emoji-heart-eyes display-1"></i>
                    </div>

                    <div className="display-6">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                    </div>
                    <Badge pill>love it</Badge>
                </div>
            }
        </div>
    )
}
