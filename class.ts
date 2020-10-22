export class MyClass<T> {
  public static staticFunction<T>(a: T) {
    return new MyClass<T>();
  }
}
