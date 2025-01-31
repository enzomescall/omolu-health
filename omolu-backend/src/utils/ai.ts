import { exec } from "child_process";

export function analyzeBloodwork(data: object): Promise<string> {
  return new Promise((resolve, reject) => {
    const prompt = `Analyze this bloodwork: ${JSON.stringify(data)}`;
    exec(`ollama run mistral "${prompt}"`, (error, stdout) => {
      if (error) reject(error);
      else resolve(stdout);
    });
  });
}
