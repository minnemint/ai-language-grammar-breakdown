import { useGLTF } from "@react-three/drei";

export const teacher = ["Nanami", "Naoki"];

export const Teacher =({ teacher, ...props}) => {
    const { scene } = useGLTF(`/models/Teacher_${teacher}.glb`);
    return <group {...props}>
        <primitive object={scene} />
    </group>;
};

teacher.forEach((teacher) => {
    useGLTF.preload(`/models/Teacher_${teacher}.glb`);
});