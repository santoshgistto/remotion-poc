import { Lottie } from "@remotion/lottie";
import { useCurrentFrame, AbsoluteFill, useVideoConfig, Sequence, Audio, spring, Img } from 'remotion'
import anim from  "./anim.json"
import confetti from './confetti.json'
import corner from './christmas-corners.json'
import roundConer from './rounded-corners.json'
const ImageUrls1 = [
    "https://images.unsplash.com/photo-1680771447988-94c040d9868b?w=687&q=80",
    "https://images.unsplash.com/photo-1680951103843-a370c042fb03?w=687&q=80",
    "https://images.unsplash.com/photo-1680527639693-6bc8f2ef2222?w=687&q=80",
    "https://plus.unsplash.com/premium_photo-1677458719435-0ed8962ac400?w=687&q=80",
    "https://images.unsplash.com/photo-1681015162686-79e9cd18a0e6?w=687&q=80",
    "https://images.unsplash.com/photo-1680948676063-bdc079cb11a9?w=687&q=80",
    "https://images.unsplash.com/photo-1680776192906-3d3d8fcccbdd?w=687&q=80",
    "https://plus.unsplash.com/premium_photo-1677456380311-91061b7694e2?w=687&q=80",
    "https://images.unsplash.com/photo-1679343316332-6b854e892a44?w=687&q=80",
]

export const MyAnimation: React.FC = () => {
    return <Lottie animationData={confetti} />;
  };
  export const CornerAnimation: React.FC = () => {
    return <Lottie style={{height:"100px", position:'absolute'}} animationData={roundConer} loop/>;
  };

const ImageComponent = ({url})=>{
    const frame = useCurrentFrame()
    const {fps} = useVideoConfig()
    const opacity = Math.min(1, frame / 30);
    const f = frame/4;
    const scale = spring({
        fps,
        frame:f,
      });
    return (
        <div style={{ transform: `scale(${scale})`, opacity }}>
        <Img  src={url} />

    </div>
    )
}

export const MyComposition = ({template}) => {
    const { fps, durationInFrames, width, height, } = useVideoConfig();
    const frame = useCurrentFrame()
    const opacity = Math.min(1, frame / 60);
    const ImageUrls = template.imageUrls

    return (
        <AbsoluteFill
            style={{
                justifyContent: "center",
                alignItems: "center",
                fontSize: 30,
                backgroundColor: "white",
            }}
        >
            <Sequence durationInFrames={180}>
            <ImageComponent url={ImageUrls[0]}/>
            </Sequence>
            <Sequence from={140}>
            <ImageComponent url={ImageUrls[1]}/>

            </Sequence>
            <Sequence from={80}>
            <ImageComponent url={ImageUrls[2]}/>
            </Sequence>
            <Sequence from={120}>
            <ImageComponent url={ImageUrls[3]}/>
            </Sequence>
            <Sequence from={160}>
            <ImageComponent url={ImageUrls[4]}/>
            </Sequence>
            <Sequence from={200}>
            <ImageComponent url={ImageUrls[5]}/>
            </Sequence>
            <Sequence from={240}>
            <ImageComponent url={ImageUrls[6]}/>
            </Sequence>
            <Sequence from={280}>
            <ImageComponent url={ImageUrls[7]}/>
            </Sequence>
            <Sequence from={320}>
            <ImageComponent url={ImageUrls[8]}/>
            </Sequence>
            <Sequence from={360}>
            <ImageComponent url={ImageUrls[1]}/>
            </Sequence>
            <Audio src='https://pub-4bf634469b5c482e9546855c0abd7a17.r2.dev/ES_Love%20Me%20Back.mp3' />
        </AbsoluteFill>
    );
};