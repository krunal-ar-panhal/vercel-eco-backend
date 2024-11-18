import jwt from 'jsonwebtoken'

export const adminAuth = async (req, res, next) => {
    try {
      const { token } = req.headers; 
      if (!token) {
        return res.json({ success: false, message: "Not Authorized. Login Again." });
      } 
      const token_decode = jwt.verify(token, process.env.JWTS);
      if (token_decode.email !== process.env.ADMIN_EMAIL) {
        return res.json({ success: false, message: "Not Authorized. Login Again." });
      }
      next();
    } catch (error) {
      console.log(error);
        res.json({ success: false, message: "Invalid or expired token." });
    }
  };
  