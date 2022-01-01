class Employee {

    get id() {
        return this.id;
    }

    set id(id) {
        this.id = id;
    }

    get name() {
        return this.nameValue;
    }

    set name(name) {
        let namePattern = RegExp("^[A-Z][a-z A-Z]{2,}$");

        if(!namePattern.test(name)) {
            throw "Invalid Name";
        }
        else {
            this.nameValue = name;
        }
    }

    get profilePic() { return this.profilePic; }
    set profilePic(profilePic) { this.profilePic = profilePic }

    get gender() { return this.gender}
    set gender(gender) { this.gender = gender }

    get salary() { return this.salary}
    set salary(salary) {this.salary = salary}

    get startDate() { return this.startDate}
    set startDate(startDate) {this.startDate = startDate}

    get department() { return this.department}
    set department(department) {this.department = department}

}