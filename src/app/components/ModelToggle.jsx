// In `ModelToggle.jsx`
import { useAITeacher } from "@/hooks/useAiTeacher";

export const ModelToggle = () => {
  const aiModel = useAITeacher((state) => state.aiModel);
  const setAiModel = useAITeacher((state) => state.setAiModel);

  //console.log("aiModel:", aiModel); // Check output to verify the current state
  //console.log("setAiModel:", typeof setAiModel); // Should be "function"

  const toggleModel = () => {
    // Ensure the function parameter is recognized
    setAiModel((prevModel) =>{
      const newModel =
      prevModel === "gpt-3.5-turbo" ? "gpt-4-turbo-preview" : "gpt-3.5-turbo"
      console.log(`Switching from ${prevModel} to ${newModel}`);
  });
  };

  return (
    <button onClick={toggleModel} className="bg-blue-500 text-white p-2 rounded">
      Switch to {aiModel === "gpt-3.5-turbo" ? "GPT-4 Turbo Preview" : "GPT-3.5 Turbo"}
    </button>
  );
};
