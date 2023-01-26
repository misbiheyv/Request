function bar(arg: number) {
    const dec: MethodDecorator = (target, propertyKey, descriptor) => {
        return targe;
    }
    return dec;
}


class Test {
    @bar(100)
    foo() {
        return 100;
    }
}

console.log(new Test().foo())
