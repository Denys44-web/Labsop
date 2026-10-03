function IptoInt(ip = "127.0.0.1") {
    const p = ip.split(".");
    const result = p.reduce((acc, current) => {
        const num = Number(current);
        return (acc << 8) + num;

    }, 0);
    return result;
}
console.log (IptoInt("165.225.133.150"));
console.log (IptoInt("8.8.8.8"));