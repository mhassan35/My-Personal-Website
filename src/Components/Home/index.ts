// custom-typings.d.ts
declare module 'typed.js' {
    class Typed {
      destroy(): void;
      constructor(element: string | Element, options: any);
    }
    export default Typed;
  }
  