// Import the OpenAI package
const { Configuration, OpenAIApi } = require("openai");

// Set up the configuration with your OpenAI API key
const configuration = new Configuration({
  apiKey: "USE YOUR KEY HERE", 
});

// Initialize the OpenAIApi client
const openai = new OpenAIApi(configuration);

// Function to generate text using the OpenAI API
async function generateText(prompt) {
  try {
    // Call the API to create a completion
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 150,
    });

    // Log the generated text
    console.log(response.data.choices[0].text);
  } catch (error) {
    // Handle and log any errors
    console.error("Error generating text:", error);
  }
}

// Call the function with a prompt
generateText("Write a short story about a dragon.");
