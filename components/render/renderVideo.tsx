import {
    getFunctions,
    renderMediaOnLambda,
    getRenderProgress,
} from "@remotion/lambda";
import { useState } from "react";

async function listFunctions() {
    const functions = await getFunctions({
        region: "us-east-1",
        compatibleOnly: true,
    });

    const functionName = functions[0].functionName;
}

function RenderVideo() {
    const [isLoading, setLoading] = useState(false)

    const listFunctions = async () => {
        setLoading(true)
        const functions = await getFunctions({
            region: "us-east-1",
            compatibleOnly: true,
        });

        const functionName = functions[0].functionName;
        setLoading(false)
        console.log("functons===>", functions)
    }
    if (isLoading) {
        <div><p>Loading...!</p></div>
    }
    return (
        <div>
            <button onClick={listFunctions}>Render Video</button>
        </div>
    )
}

export default RenderVideo