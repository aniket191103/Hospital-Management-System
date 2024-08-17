import jwt from 'jsonwebtoken';

export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken(); // Ensure this method generates the JWT token correctly
  const cookieName = user.role === 'Admin' ? 'adminToken' : 'patientToken';
  const cookieExpireDays = process.env.COOKIE_EXPIRE ? parseInt(process.env.COOKIE_EXPIRE) : 7;
  const cookieExpireDate = new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000);

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      expires: cookieExpireDate,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
      domain: process.env.NODE_ENV === 'production' ? 'yourproductiondomain.com' : undefined, // Adjust as necessary
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
