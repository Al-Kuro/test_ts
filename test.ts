abstract class AClass {
  numbers: number[] = [];

  constructor(n: number) {
    this.fill(n);
  }

  private fill(n: number): void {
    for (let i = 0; i < n; i++) {
      this.numbers.push(Math.round(Math.random() * 10));
    }
  }

  protected factorial(array: number[]): number[] {
    let factorialNumber = (n: number): number => {
      return n != 1 ? n * factorialNumber(n - 1) : 1;
    };
    return array.map((arr) => factorialNumber(arr));
  }

  abstract sort(): number[];
}

class Class1 extends AClass {
  constructor(n: number) {
    super(n);
  }

  sort(): number[] {
    return this.factorial(this.numbers.sort((a, b) => b - a));
  }
}

class Class2 extends AClass {
  constructor(n: number) {
    super(n);
  }

  sort(): number[] {
    return this.factorial(this.numbers.sort((a, b) => a - b));
  }
}

const class1 = new Class1(5);
console.log(class1.sort());

const class2 = new Class2(6);
console.log(class2.sort());
