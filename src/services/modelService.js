import tf from "@tensorflow/tfjs-node";

async function loadModel() {
    const modelPath = 'https://storage.googleapis.com/submission-adel/model.json';
    console.log(`Trying to load model from ${modelPath}`);

    try {
        return await tf.loadGraphModel(modelPath);
    } catch (error) {
        console.error("Error loading model:", error);
        throw error;
    }
}

export default loadModel;