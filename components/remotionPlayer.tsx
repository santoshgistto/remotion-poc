
import { Player } from "@remotion/player";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MyComposition } from "./compositions/sampleComposition";

export default function RemotionPlayer() {
    return (
        <Player
        component={MyComposition}
        durationInFrames={500}
        compositionWidth={350}
        compositionHeight={500}
        fps={30}
        controls
      />
    )
}

const MyVideo = ()=>{
    return <div>
        <Avatar style={{position:"absolute"}}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
        <img style={{opacity:"0.4"}} src="https://images.unsplash.com/photo-1680771447988-94c040d9868b?w=687&q=80"/>
    </div>
}