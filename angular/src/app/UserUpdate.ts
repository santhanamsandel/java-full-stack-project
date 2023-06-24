export class UserUpdate {
  constructor(
    public UserId?:number,
    public name: string = '',
    public mobile: string = '',
    public password: string = '',
    public role: string = ''
  ) {}
}