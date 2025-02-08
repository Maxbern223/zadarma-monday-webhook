export default function handler(req, res) {
    if (req.method === "GET") {
        res.send("✅ Vercel работает!");
    } else if (req.method === "POST") {
        console.log(req.body);
        res.json({ message: "Webhook received!" });
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
