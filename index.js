class TestClass{
    constructor(options) {
        this.name = options.name
        this.age = options.age
    }
    voice(a){
        let resultStr = `I'm ${this.name}, I'm ${this.age} years old.`
        console.log(resultStr)
        return resultStr
    }
}

module.exports = TestClass
