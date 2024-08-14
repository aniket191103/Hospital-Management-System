export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  // Determine the cookie name based on the user's role
  const cookieName = user.role === 'Admin' ? 'adminToken' : 'patientToken';

  // Ensure COOKIE_EXPIRE is correctly read and parsed
  const cookieExpireDays = process.env.COOKIE_EXPIRE ? parseInt(process.env.COOKIE_EXPIRE) : 7; // Default to 7 days if not set

  // Calculate the expiry date
  const cookieExpireDate = new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000);

  // Log the expiry date for debugging
  console.log('Cookie Expiry Date:', cookieExpireDate); // Debugging line

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      expires: cookieExpireDate,
      httpOnly: true,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
