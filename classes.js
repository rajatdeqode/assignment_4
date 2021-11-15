class Test {
  constructor(given_name, given_designation, given_experience) {
    this.name = given_name;
    this.designation = given_designation;
    this.experience = given_experience;
  }
  getExperience(experience) {
    return 2020 - experience;
  }
  static add(a, b) {
    return a + b;
  }
}

class Programmer extends Test {
  constructor(given_name, given_designation, given_experience, language) {
    super(given_name, given_designation, given_experience);
    this.language = language;
  }
  get Github() {
    return this.github;
  }

  set github(github) {
   
    this.github=github
  }
}

const t = new Programmer("rajat", "junior", 25, "c");

t.github="name"

console.log(t.github)