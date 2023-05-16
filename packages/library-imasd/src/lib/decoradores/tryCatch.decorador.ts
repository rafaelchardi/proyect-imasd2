export interface ErrorHandle {
  handleError(error: Error, propertyKey: string): any;
}
export class ErrDecorator implements ErrorHandle {
  handleError(error: Error, propertyKey: string) {}
}
export const TryCatchDecorator = (ErrorHandle: new () => ErrorHandle) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    let original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      try {
        return original.apply(this, args);
      } catch (e: any) {
        let app = new ErrorHandle();
        app.handleError(e, propertyKey);
      }
    };
    return descriptor;
  };
};
