class User {
  private _email: string;
  private _password: string;
  private _id: number;
  private _firstName: string;
  private _secondName: string;

  constructor(email: string, password: string, id: number, firstName: string, secondName: string) {
    this._email = email;
    this._password = password;
    this._id = id;
    this._firstName = firstName;
    this._secondName = secondName;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get secondName(): string {
    return this._secondName;
  }

  set secondName(value: string) {
    this._secondName = value;
  }
}
