class Player implements Person {
    name: string;
    age: number;

    formatName() {
        return this.name.toUpperCase();
    }
}