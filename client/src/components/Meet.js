import React, { useState } from 'react'
import { VideoRoom } from '../components/VideoRoom';

export default function Meet() {
    const [joined, setJoined] = useState(false);

    return (
        <>
            <div className="container">
                <h1 className='text-center my-3'>Virtual Meet on Courseation</h1>

                {!joined && (
                    <div className="container d-flex flex-row justify-content-center align-items-center">
                        <button type="button" className="btn btn-success" onClick={() => setJoined(true)}>Join Meet</button>
                    </div>
                )}

                {joined && (
                    <>
                        <div className="container d-flex flex-column justify-content-center align-items-center">
                            <button type="button" className="btn btn-danger" onClick={() => setJoined(false)}>Leave</button>
                            <div id="control-btn d-flex flex-row justify-content-center align-items-center">
                                <button type="button" className="btn btn-primary mx-2 my-3" id="leave-btn">Leave Meet</button>
                                <button type="button" className="btn btn-primary mx-2 my-3" id="mic-btn">Toggle Mic</button>
                                <button type="button" className="btn btn-primary mx-2 my-3" id="video-btn">Toggle video</button>
                            </div>
                            <VideoRoom />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
