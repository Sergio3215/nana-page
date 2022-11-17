export default async function handler(req, res) {

    try {
        const {Token} = req.cookies;
        console.log(Token);

        let key = (Token != undefined)? true : false;

        console.log(key)
        res.json({ success: key });

    } catch (err) {
        // console.log(err)
        res.json({ success: false });
    }
}