class Dictionary {
    constructor(name) {
        this.name = name
        this.words = {}
    }

    add(word, description) {
        this.words[word] = description
    }

    remove(wordToRemove) {
        delete this.words[wordToRemove]
    }

    get(wordToGet) {
        return this.words[wordToGet]
    }

    showAllWords() {
        console.log(this.words)
    }
}

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name)
    }
    add(word, description) {
        super.add(word, description)
        this.words['isDifficult'] = true
    }
}


const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.')
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.')
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.')
hardWordsDictionary.remove('неологизм')
hardWordsDictionary.showAllWords()


const dictionary = new Dictionary('Толковый словарь')
dictionary.add('JavaScript', 'популярный язык программирования')
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие')
dictionary.remove('JavaScript')
console.log(dictionary.get('Веб-разработчик'))
dictionary.showAllWords()
console.log(dictionary)


