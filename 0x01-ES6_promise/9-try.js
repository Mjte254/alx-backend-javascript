export default function guardrail(callback) {
  const result = {
    value: null,
    error: null
  };

  try {
    result.value = callback(); // Execute the callback
  } catch (error) {
    result.error = error.message; // Capture the error message
  }

  return result; // Return the result object
}
