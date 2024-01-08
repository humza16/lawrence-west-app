// import { AbsoluteFill, useVideoConfig, Composition } from "remotion";

// export const MyComposition = () => {
//     const { fps, durationInFrames, width, height } = useVideoConfig();

//     return (
//         <AbsoluteFill
//             style={{
//                 justifyContent: "center",
//                 alignItems: "center",
//                 fontSize: 60,
//                 backgroundColor: "white",
//             }}
//         >
//             This {width}x{height}px video is {durationInFrames / fps} seconds long.
//         </AbsoluteFill>
//     );
// };


// export const EmotionRoot = () => {
//     return (
//         <Composition
//             id="MyComposition"
//             durationInFrames={150}
//             fps={30}
//             width={1920}
//             height={1080}
//             component={MyComposition}
//         />
//     )
// }

import React, { useState, useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import { Timeline } from '@xzdarcy/react-timeline-editor';
import image from 'assets/images/Carousel.png'
import photo from 'assets/images/Carousel2.png';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { VideoToFrames, VideoToFramesMethod } from './VideoFrames';


const mockData = [{
    id: "0",
    actions: [
        {
            id: "action1",
            start: 0,
            end: 10,
            effectId: "effect0",
            flexible: true,
            movable: true
        },
    ],

},

{
    id: "1",
    actions: [
        {
            id: "action10",
            start: 10,
            end: 20,
            effectId: "effect1",
            flexible: true,
            movable: true
        }
    ],
}
]

const mockEffect = {
    effect0: {
        id: "effect0",
        name: "效果0",
    },
    effect1: {
        id: "effect1",
        name: "效果1",
    },
};



const TestVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [frames, setFrames] = useState([]);
    const lastTime = useRef(0);
    const videoRef = useRef();
    const uploadFilesURL = useRef([])
    const [data, setData] = useState([]);
    const timelineState = useRef();
    // const canvasRef = useRef();


    const concatenateVideos = async (urlArray) => {
        // const [video1ArrayBuffer, video2ArrayBuffer] = await Promise.all([
        //     fetch(video1Path).then((response) => response.arrayBuffer()),
        //     fetch(video2Path).then((response) => response.arrayBuffer()),
        // ]);
        try {
            debugger;
            const videoBufferArray = await Promise.all(urlArray.map((url) => fetch(url).then((res) => res.arrayBuffer())));
            debugger;
            // const concatenatedBuffer = new Uint8Array(video1ArrayBuffer.length + video2ArrayBuffer.length);
            const concatenatedBuffer = new Uint8Array(videoBufferArray.reduce((acc, singleItem) => acc + singleItem.byteLength, 0));
            // let byteLength = 0;
            // videoBufferArray.forEach((singleItem, index) => {
            //     byteLength = byteLength + singleItem.byteLength;
            //     if (index === 0) {
            //         concatenatedBuffer.set(new Uint8Array(singleItem), 0);
            //     } else {
            //         concatenatedBuffer.set(new Uint8Array(singleItem), byteLength);
            //     }
            // })
            concatenatedBuffer.set(new Uint8Array(videoBufferArray[0]), 0);
            if (videoBufferArray.length > 1) {
                debugger;
                concatenatedBuffer.set(new Uint8Array(videoBufferArray[1]), videoBufferArray[0].byteLength);
            }

            const blob = new Blob([concatenatedBuffer], { type: 'video/mp4' });
            const concatenatedVideoUrl = URL.createObjectURL(blob);

            return concatenatedVideoUrl;
        } catch (e) {
            debugger;
            console.log(e)
        }
    };

    const handleVideo = async (e) => {
        const videoCurrent = videoRef.current;
        const videoUrl = URL.createObjectURL(e.target.files[0]);
        uploadFilesURL.current = [...uploadFilesURL.current, videoUrl];
        debugger;
        const result = await concatenateVideos(uploadFilesURL.current);
        // videoCurrent.src = videoUrl;
        videoCurrent.src = result;
        const frames = await VideoToFrames.getFrames(
            videoUrl,
            5,
            VideoToFramesMethod.totalFrames
        );
        // setFrames(frames);
        const newData = {
            id: data?.length + 1,
            className: 'timeline-video',
            actions: frames.map((item, index) => {
                const tempValue = lastTime.current;
                lastTime.current = (index === frames.length - 1) ? lastTime.current + (5 * (index + 1)) : lastTime.current;
                return {
                    id: `$action${index}`,
                    start: tempValue > 0 && index === 0 ? tempValue : (tempValue + (index * 5)),
                    end: (tempValue > 0 && index === 0) ? tempValue + 5 : tempValue + (5 * (index + 1)),
                    maxEnd: (tempValue > 0 && index === 0) ? tempValue + 5 : tempValue + (5 * (index + 1)),
                    minStart: tempValue > 0 && index === 0 ? tempValue : (tempValue + (index * 5)),
                    // effectId: `$effect${index}`,
                    src: item,
                    disable: true,
                    flexible: true,
                    movable: true,
                    // disableDrag: true,
                }
            }),
        }
        setData(p => [...p, newData]);
    }

    const handleTimelineChange = (updatedData) => {
        setData(updatedData);
    }

    const handleCursor = (test, value) => {

    }

    const handlePlay = () => {
        if (!isPlaying) {
            setIsPlaying(true);
            videoRef.current.play();
        } else {
            setIsPlaying(false);
            videoRef.current.pause();
        }
    }

    // React.useEffect(() => {
    //     if (isPlaying) {
    //         console.log(videoRef.current.currentTime);
    //         console.log(videoRef.current.paused);
    //     }
    // }, [isPlaying])


    // React.useEffect(() => {
    //     if (!timelineState.current) return;
    //     const engine = timelineState.current;
    //     engine.listener.on("play", () => setIsPlaying(true));
    //     engine.listener.on("paused", () => setIsPlaying(false));
    // }, [timelineState])

    // const extractAndDisplayFrames = (video, ctx) => {
    //     const frameInterval = 1000; // milliseconds between frames
    //     const totalDuration = video.duration * 1000;

    //     const captureFrame = (currentTime) => {
    //         debugger;
    //         video.currentTime = currentTime ? currentTime / 1000 : 0;
    //         ctx.drawImage(video, 0, 0, 50, 50);
    //         // Optionally, process the captured frame here

    //         const frameImage = canvasRef.current.toDataURL('image/png');
    //         setFrames((prevFrames) => [...prevFrames, frameImage]);

    //         // Schedule the next frame capture
    //         if (currentTime + frameInterval < totalDuration) {
    //             setTimeout(() => {
    //                 captureFrame(currentTime + frameInterval);
    //             }, 0); // Use setTimeout to ensure the next frame is captured after the current one
    //         }
    //     };

    //     // Start capturing frames
    //     captureFrame();
    // };

    React.useEffect(() => {
        const handleTimeUpdate = () => {
            if (!videoRef.current.paused) {
                const currentTime = videoRef.current.currentTime;
                timelineState?.current?.setTime(currentTime);
                // cursorPosition.current = currentTime;
            } else {
                debugger;
                setIsPlaying(false);
            }
        };

        videoRef.current.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [isPlaying]);

    return (
        <Box>
            <video ref={videoRef} width="100%" height="100%" controls={false} />
            <Box>
                {isPlaying ? <IconButton onClick={handlePlay}> <PauseIcon /> </IconButton> : <IconButton onClick={handlePlay}> <PlayArrowIcon /> </IconButton>}
            </Box>
            <Box>
                <Timeline
                    ref={timelineState}
                    editorData={data}
                    style={{ width: '100%', height: '250px', overflowY: 'scroll' }}
                    autoScroll
                    autoReRender
                    dragLine
                    onChange={handleTimelineChange}
                    onCursorDragEnd={handleCursor}
                    scale={10}
                    scaleSplitCount={5}
                    scaleWidth={50}
                    startLeft={10}
                    // getScaleRender={(action, row) => {
                    //     return <span>check it</span>
                    // }}
                    getActionRender={(action, row) => {
                        return <img src={action?.src} width="100%" height="100%" alt="" />
                    }}

                />
            </Box>
            {/* {frames.map((frame, index) => (
                <img key={index} src={frame} alt={`Frame ${index}`} width={50} height={50} />
            ))} */}
            {/* <canvas ref={canvasRef} /> */}
            <input type="file" onChange={handleVideo} />
        </Box>

    )
}

export default TestVideo