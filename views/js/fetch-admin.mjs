document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("form");
  const loginButton = document.getElementById("login-button");

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Disable button to prevent multiple submissions
    loginButton.disabled = true;

    try {
      const formData = new FormData(loginForm);
      const credentials = {
        username: formData.get("username"),
        password: formData.get("password"),
      };

      const response = await fetch(`${window.BASE_URL}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();

        // Handle different error formats
        const errorMessage = errorData.errorResponse?.code
          ? `Error: ${errorData.errorResponse.errmsg}` // Handle errorResponse object
          : errorData; // Handle plain message

        // Clear existing errors
        const existingError = loginForm.querySelector(".login-error");
        if (existingError) existingError.remove();

        // Create and display error message
        const errorElement = document.createElement("div");
        errorElement.className = "login-error";
        errorElement.textContent = errorMessage;
        errorElement.style.cssText = `
          color: #dc2626;
          text-align: center;
          margin-bottom: 0.8rem;
          font-size: 0.9rem;
        `;

        loginForm.insertBefore(errorElement, loginButton);
        setTimeout(() => errorElement.remove(), 5000);
      }

      const data = await response.json();

      // Successful login - redirect to admin dashboard
      window.location.href = `${window.BASE_URL}/admin/dashboard`;
    } catch (error) {
      // Re-enable button on error
      loginButton.disabled = false;
    }
  });
});
