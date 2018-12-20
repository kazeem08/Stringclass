require("./stringClassSolutions")

describe('test for Vowels', () => {
    test("string that contain vowels", () => {
        expect('kaze-m'.hasVowels()).toBeTruthy()
    })
    
    test("string that contain no vowels", () => {
        expect('jdtddg'.hasVowels()).toBeFalsy()
    })

    test("string that contain only numbers", () => {
        expect('123456'.hasVowels()).toBeFalsy()
    })

    test("string that contain only special characters", () => {
        expect('jdtddg'.hasVowels()).toBeFalsy()
    })

})

describe('test for toUpper', () => {
    test('string that is completely lowercase', () => {
        expect('mercedes'.toUpper()).toBe('MERCEDES')
    })

    test('string that is completely uppercase', () => {
        expect('MANG0'.toUpper()).toBe('MANGO')
    })

    test('string that contain mixture of upper and lower', () => {
        expect('caPiTulate'.toUpper()).toBe('CAPITULATE')
    })

    test('string that contain lower at the beginning and upper at the end', () => {
        expect('casti-GATE'.toUpper()).toBe('CASTI-GATE')
    })

})

describe('test for toLower', () => {
    test('string that is completely uppercase', () => {
        expect('MERCEDES'.toLower()).toBe('mercedes')
    })

    test('string that is completely uppercase', () => {
        expect('MANG0'.toLower()).toBe('mango')
    })

    test('string that contain mixture of upper and lower', () => {
        expect('CApiTuLAtE'.toLower()).toBe('capitulate')
    })

    test('string that contain upper at the beginning and lower at the end', () => {
        expect('CASTI-gate'.toLower()).toBe('casti-gate')
    })

})

describe('test for ucFirst', () => {
    test('string that has first letter as lowercase', () => {
        expect('welcome'.ucFirst()).toBe('Welcome')
    })

    test('string that has first letter as uppercase', () => {
        expect('Welcome'.ucFirst()).not.toBe('welcome')
    })
})

describe('test for isQuestion', () => {
    test('string that ends with ?', () => {
        expect('eaten?'.isQuestion()).toBeTruthy()
    })

    test('string that ends with ?', () => {
        expect('sleeping'.isQuestion()).toBeFalsy()
    })
})

describe('test for words', () => {
    test('string that has hyphen', () => {
        expect('real-madrid is white'.words()).not.toBe(['real', 'madrid', 'is', 'white'])
    })

    test('string that has digits and letters', () => {
        expect('535363 hello'.words()).toBe(['535363', 'hello'])
    })
})

describe('test for wordCount', () => {
    test('string that has hyphen', () => {
        expect('real-madrid is white'.wordCount()).toBe('3')
    })

    test('string that has digits and letters', () => {
        expect('535363 hello'.wordCount()).toBe('2')
    })
})

describe('test for fromCurrency', () => {
    test('string that has one comma', () => {
        expect('11,225.34'.fromCurrency()).toBe('11225.34')
    })

    test('string that has more than one comma', () => {
        expect('234,225,018.45'.fromCurrency()).toBe('234225018.45')
    })
})