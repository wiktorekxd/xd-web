export class RegisterUserModel {
    constructor(
        public email: string,
        public password: string) {
    }
}

export class LoginUserModel {
    constructor(
        public email: string,
        public password: string) {
    }
}

export class User {
    constructor(
        public email: string) {
    }
}
