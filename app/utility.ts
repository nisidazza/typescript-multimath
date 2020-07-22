class Utility {
    //passing the id of an input box and get back the value in the box
    /* add static keyword as I want to be able to use the function throughout the class without 
    having to create instances of the utility class */
    static getInputValue(elementID: string): string {
        const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
        return inputElement.value;
    }
}