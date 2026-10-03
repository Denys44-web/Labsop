const Phones = {
    "Denys": +380976807298,
    "Ivan": +380976807299,
}
function FindPhoneByName(name) {
    return Phones[name] || "Not found";
}
console.log(Phones, FindPhoneByName);
