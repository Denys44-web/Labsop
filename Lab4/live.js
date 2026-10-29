const people = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
const age = (people) => {
    const live = {};
    for ( const name in people) {
        live[name] = people[name].died - people[name].born;
    }
    return live;
}
console.log (age(people));