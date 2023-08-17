export default class MyErrorMapper {
  error: any;
  constructor(error: any) {
    try {
      if (error instanceof Error) this.error = error;
      else this.error = JSON.parse(JSON.stringify(error));
    } catch {
      this.error = error;
    }
  }

  public getCode() {
    if (this.error?.code) return this.error.code;
    if (this.error?.status) return this.error.status;
    if (this.error?.response) return this.error.response.status;

    return -1;
  }

  public getMessage(): string {
    let msg = "Something went wrong!";
    if (
      this.error?.response?.data &&
      typeof this.error.response.data === "string"
    )
      msg = this.error.response.data;
    if (this.error?.message && typeof this.error.message === "string")
      msg = this.error.message;

    return msg;
  }

  public getLog(): string {
    if (this.error?.response?.data)
      return JSON.stringify(this.error.response.data);

    if (this.error?.message && typeof this.error.message === "string")
      return this.error.message;

    return JSON.stringify(this.error);
  }
}
