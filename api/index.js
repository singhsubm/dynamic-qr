const REDIRECT_URL = "https://jagdish-care.vercel.app";

export default function handler(req, res) {
  res.redirect(307, REDIRECT_URL);
}