function fn() {
    const CObject = { name: "Denys" };
    let LObject1 = { name: "Optimus" };
    
    CObject.name = "Bumblbee";
    LObject1.name = "Gang";
    let Object = {name: "Optimus Gang2"};

    console.log(CObject);
    console.log(LObject1);
}
fn();
const createUser = (name, city) => {
    return name + city;
}
console.log(createUser("Denys", "Kyiv"));