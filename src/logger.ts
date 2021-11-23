export class Logger {

  constructor(private trace = false) {
  }

  setTrace(value: boolean) {
    this.trace = value;
  }

  log(message?: string, ...optionalParams: any[]) {
    if (this.trace) {
      console.log(message);
    }
  }
}