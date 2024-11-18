import jwt from 'jsonwebtoken'

export const adminLogin = async (req,res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
          const token = jwt.sign({ email }, process.env.JWTS);
          res.json({ success: true, token });
        } else {
          res.json({ success: false, message: "Invalid credentials" });
        }
      } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
      }
      
}