module.exports = {
    getLogged: async () => {
        const ftch = await fetch('api/logged');
        const res = await ftch.json();

        return res.success
    }
}

