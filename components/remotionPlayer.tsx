
import { ErrorFallback, Player, PlayerRef, RenderPoster } from "@remotion/player";
import { AbsoluteFill, Img } from "remotion";
import { useCallback, useEffect, useRef, useState } from "react";
import VideoTemplate from "./compositions/templates";

function RemotionPlayer({ template }) {
  const composition = template.template;

  const errorFallback: ErrorFallback = useCallback(({ error }) => {
    return (
      <AbsoluteFill
        style={{
          backgroundColor: "yellow",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Sorry about this! An error occurred: {error.message}
      </AbsoluteFill>
    );
  }, []);
  const renderPoster: RenderPoster = useCallback(({ height, width }) => {
    return (
      <AbsoluteFill style={{ backgroundColor: "white", justifyContent: 'center' }}>
        <Img src={template.source} />
      </AbsoluteFill>
    );
  }, [template]);

  const playerRef = useRef<PlayerRef>(null);

  useEffect(() => {
    if (playerRef.current) {
      console.log(playerRef.current.getCurrentFrame());
      console.log(playerRef);

    }
  }, []);
  return (
    <div>
      <Player
        numberOfSharedAudioTags={5}
        ref={playerRef}
        autoPlay={true}
        component={composition}
        durationInFrames={template.durationInFrames}
        compositionWidth={350}
        compositionHeight={500}
        fps={30}
        renderPoster={renderPoster}
        showPosterWhenUnplayed
        controls
        inputProps={
          {
            template: template
          }
        }
        errorFallback={errorFallback}
      />
    </div>
  )
}




export default function MyVideoPlayer() {

  const [isLoading, setLoading] = useState(false);
  const [template, setTemplate] = useState()


  const selectTemplate = (temp) => {
    setTemplate(temp);

  }

  if (isLoading) {
    return <h1>Loading....</h1>
  }




  return (
    <section className="container grid gap-6 pt-6 pb-8 md:py-10">
      <div className="flex flex-row items-center gap-2 border-solid border-2  p-4 ">
        <div className="flex flex-row basis-full border-solid border-2  p-2">
          <div className="basis-2/4 border-solid items-center border-2 border-gray-600 p-2 m-1">
            {
              (template === null || template === undefined) ? <h1>Please select template....</h1> : <RemotionPlayer template={template} />

            }
          </div>

          <div className="basis-1/4 border-solid border-2 border-gray-600 p-2 m-1"><VideoTemplate selectTemplate={selectTemplate} /></div>
        </div>
      </div>

    </section>
  )
}