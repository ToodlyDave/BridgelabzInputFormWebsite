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

    get email() {
        return this.emailValue;
    }

    set email (email) {
        let emailPattern = RegExp("^[\\w+-]+(\\.[\\w-]+)*@[^_\\W]+(\\.[^_\\W]+)?(?=(\\.[^_\\W]{3,}$|\\.[a-zA-Z]{2}$)).*$")

        if( !emailPattern.test(email)) {
            throw "Invalid Email";
        }
        else {
            this.emailValue = email;
        }
    }

    get phone() {
        return this.phoneValue;
    }

    set phone(phone) {
        let phonePattern = RegExp("^[0-9]{1,3}[\\s][0-9]{10}$");

        if (!phonePattern.test(phone)) {
            throw "Invalid Phone pattern";
        }
        else {
            this.phoneValue = phone;
        }
    }

    get password() {
        return this.pwdValue;
    }

    set password(password) {
        let pwdPattern = RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=[^_\\W]*[_\\W][^_\\W]*$).{8,}$");

        if( !pwdPattern.test(password)) {
            throw "Invalid password"
        }
        else {
            this.pwdValue = password;
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