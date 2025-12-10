
export const fetchSamples = async (folder: string): Promise<string[]> => {
  try {
    const response = await fetch(`http://localhost:3000/files/${folder}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch files: ${response.statusText}`);
    }

    const data = await response.json();
    return data.files || [];
  } catch (error) {
    console.error("Error fetching samples:", error);
    return [];
  }
};
