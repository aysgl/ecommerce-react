import React from 'react'
import { Badge } from 'reactstrap'

export default function Comment({ comments }) {
    return (
        <div className='border h-100 rounded d-flex align-items-center justify-content-center text-center p-3 bg-light overflow-hidden'>
            <div>
                <div className='mb-1'>
                    <Badge color='primary' pill style={{ height: "40px", width: "40px", fontSize: "30px", textAlign: "center", lineHeight: "40px", padding: "0px", zIndex: "1", position: "relative" }} className='display-1 ms-4'>{comments}</Badge>

                    <div style={{ marginTop: "-30px", zIndex: "0" }} className="icon-shadow">
                        <i className="bi bi-chat-quote display-1 text-secondary one"></i>
                    </div>
                </div>
                <div className='fs-3 icon-shadow'>
                    {comments == 0 ?
                        <div>no comment</div> : <div>so many people commented</div>
                    }
                </div>
            </div>
        </div>
    )
}
