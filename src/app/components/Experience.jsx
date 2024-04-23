"use client"
import { CameraControls, Environment, Gltf, Html,} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Teacher } from "./Teacher";
import { degToRad } from "three/src/math/MathUtils";
import { TypingBox } from "./TypingBox";
import { MessagesList } from "./MessagesList";
import { BoardSettings } from "./BoardSetting";

export const Experience = () => {
    return(
        <>
         <div className="z-10 md:justify-center fixed bottom-4 left-4 right-4 flex gap-3 flex-wrap justify-stretch">
        <TypingBox />
      </div>
        <Canvas camera={{
                position: [0, 0, 0.001],
            }}>
            <CameraManager/>
            <Environment preset="sunset"/>
            <ambientLight intensity={0.8} color="pink"/>
            <Html position={[0.21,0.192,-3]} transform distanceFactor={0.5}>
            <MessagesList />
            <BoardSettings/>
            </Html>
            <Teacher 
             teacher={"Nanami"} 
             position={[-1, -1.7, -3]}
             scale ={1.5}
             rotation-y={degToRad(20)}
            />
            <Gltf src="/models/classroom_default.glb" position={[0.2, -1.7, -2]}/>
        </Canvas>
        </>
    )
};

const CameraManager = () => {
    return (
        <CameraControls 
        minZoom={1}
        maxZoom={3}
        polarRotateSpeed={-0.3}
        azimuthRotateSpeed={-0.3}
        mouseButtons={{
            left: 1,
            wheel: 16,
        }}
        touches={{
            one: 32,
            two: 512,
        }}
        />
    );
}