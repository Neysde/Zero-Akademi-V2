/*
 * fetch-coaches.mjs
 * This script fetches coach data from the API and returns it.
 */

// This function is exposed globally so it can be used by other scripts.
window.fetchCoaches = async () => {
  try {
    const response = await fetch("/api/coaches");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const coaches = await response.json();
    return coaches;
  } catch (error) {
    console.error("Error fetching coaches:", error);
    return []; // Return an empty array on error
  }
};
