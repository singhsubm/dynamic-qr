const REDIRECT_URL = "https://jagdish-shine.vercel.app/";

export default function handler(req, res) {
  res.redirect(307, REDIRECT_URL);
}