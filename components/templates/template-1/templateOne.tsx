import { AbsoluteFill, Img, Sequence, spring, useCurrentFrame, useVideoConfig, Audio } from "remotion";


const ImageComponent = ({ url }) => {
    const frame = useCurrentFrame()
    const { fps } = useVideoConfig()
    const opacity = Math.min(1, frame / 30);
    const f = frame / 4;
    const scale = spring({
        fps,
        frame: f,
    });
    return (
        <div style={{ opacity }}>
            <Img src={url} />
        </div>
    )
}

function TemplateOne({ template }) {

    const ImageUrls = template.imageUrls
    const audioUrl = template.audio

    return (
        <AbsoluteFill
            style={{
                justifyContent: "center",
                alignItems: "center",
                fontSize: 30,
                backgroundColor: "white",
            }}
        >
         <Audio src={audioUrl} startFrom={0}/>

            <Sequence durationInFrames={180}>
                <ImageComponent url={ImageUrls[0]} />
            </Sequence>
            <Sequence from={140}>
                <ImageComponent url={ImageUrls[1]} />

            </Sequence>
            <Sequence from={80}>
                <ImageComponent url={ImageUrls[2]} />
            </Sequence>
            <Sequence from={120}>
                <ImageComponent url={ImageUrls[3]} />
            </Sequence>
            <Sequence from={160}>
                <ImageComponent url={ImageUrls[4]} />
            </Sequence>
            <Sequence from={200}>
                <ImageComponent url={ImageUrls[5]} />
            </Sequence>
            <Sequence from={240}>
                <ImageComponent url={ImageUrls[6]} />
            </Sequence>
            <Sequence from={280}>
                <ImageComponent url={ImageUrls[7]} />
            </Sequence>
            <Sequence from={320}>
                <ImageComponent url={ImageUrls[8]} />
            </Sequence>
            <Sequence from={360}>
                <ImageComponent url={ImageUrls[1]} />
            </Sequence>
        </AbsoluteFill>
    );
}

export default TemplateOne