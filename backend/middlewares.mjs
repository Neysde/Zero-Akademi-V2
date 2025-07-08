// Middleware to check if the user is an authenticated admin for page routes
export const isAdmin = (req, res, next) => {
  // This middleware checks if an admin user is logged in by looking for 'req.session.adminUser'.
  // It's designed for protecting entire pages. If the admin is not logged in, it redirects them to the admin login page.
  if (req.session && req.session.adminUser) {
    // Admin is authenticated, proceed to the next middleware or route handler
    return next();
  }
  // Admin is not authenticated, redirect to the admin login page
  res.redirect("/admin/login");
};

// Middleware to check if the user is an authenticated admin for API routes
export const isAdminApi = (req, res, next) => {
  // This middleware is similar to isAdmin but is designed for API endpoints.
  // If the admin is not authenticated, it sends a 401 Unauthorized status with a JSON error message
  // instead of redirecting. This is better for clients like fetch that are expecting JSON responses.
  if (req.session && req.session.adminId) {
    // Admin is authenticated, proceed to the next middleware or route handler
    return next();
  }
  // Admin is not authenticated, send an error response
  res.status(401).json({ success: false, message: "Unauthorized: Admin access required." });
};