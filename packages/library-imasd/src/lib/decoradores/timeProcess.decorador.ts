export function TimeProcess(coment: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const orig = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const start = performance.now();
      orig.apply(this, args);
      const stop = performance.now();
      console.log(coment);
      console.log(`tiempo ->:`, (stop - start).toFixed(2));
    };
  };
}
