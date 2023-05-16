import { Subject } from 'rxjs';

export function closeCompleteObservables(constructor: Function): void {
  const close = constructor.prototype.close;

  if (typeof close !== 'function' || !close) {
    console.error(
      `Buenas esta utilizando la directiva @OnCloseDestroyObservables en el componente ${constructor.name}  pero no has implementado el metodo close :   close(): void { .....  }`
    );
  }
  constructor.prototype.closeComplete = function (): object {
    this._obserClose$ = this._obserClose$ || new Subject();
    return this._obserClose$.asObservable();
  };

  constructor.prototype.close = function (...args: any[]): void {
    if (typeof close === 'function') {
      close.apply(this, args);
    }
    if (this._obserClose$) {
      this._obserClose$.next(true);
    }
  };
}
