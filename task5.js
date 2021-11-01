class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName
        this.age = age
        this.position = position
        this.technologies = []
    }

    code() {}

    learnNewTechnology(technology) {
        technology.push(technology)
    }
}

class JuniorDeveloper extends Developer {
    constructor(fullName, age, position = 'Junior') {
        super(fullName, age, position = 'Junior')
        this.code()
        {
            console.log('Junior разработчик пишет код...')
        }
        this.technologies = ['HTML', 'CSS', 'JavaScript']
    }
}

class MiddleDeveloper extends Developer {
    constructor(fullName, age, position = 'Middle') {
        super(fullName, age, position = 'Middle')
        this.code()
        {
            console.log('Middle разработчик пишет код...')
        }
        this.technologies = ['React']
    }
}

class SeniorDeveloper extends Developer {
    constructor(fullName, age, position = 'Senior') {
        super(fullName, age, position = 'Senior')
        this.code()
        {
            console.log('Senior разработчик пишет код...')
        }
        this.technologies = ['NodeJS']
    }
}

const juniorDeveloper = new JuniorDeveloper('Анастасия', 20)
const middleDeveloper = new MiddleDeveloper('Игорь', 25)
const seniorDeveloper = new SeniorDeveloper('Максим', 30)

juniorDeveloper.code(); // Junior разработчик пишет код...
middleDeveloper.code(); // Middle разработчик пишет код…
seniorDeveloper.code(); // Senior разработчик пишет код...

console.log(juniorDeveloper.fullName, juniorDeveloper.age,
    juniorDeveloper.position); // 'Анастасия', 20, 'Junior'
console.log(middleDeveloper.fullName, middleDeveloper.age,
    middleDeveloper.position); // 'Игорь', 25, 'Middle'
console.log(seniorDeveloper.fullName, seniorDeveloper.age,
    seniorDeveloper.position); // 'Максим', 30, 'Senior'
