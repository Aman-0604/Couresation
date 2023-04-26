import React, {
    useEffect,
    useLayoutEffect,
    useRef,
} from 'react';
import "../styles/meet.css"

export const VideoPlayer = ({ user }) => {
    const ref = useRef();

    useEffect(() => {
        user.videoTrack.play(ref.current);
    }, []);

    return (
        <div>
            {/* Uid: {user.uid} */}
            <div ref={ref} className='video-container mx-1 mb-1'>

            </div>
        </div>
    );
};
