const Phones = [
    {name: "Denys", phone: +380976807298},
    {name: "Ivan", phone: +380976807299}
];
function FindPhoneByName(name) {
    for ( const phone of Phones) {
        if (phone.name === name) {
            return phone.phone;
        }
    }
    return "Not found";
}
console.log(Phones, FindPhoneByName);
