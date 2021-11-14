let man = {
    name: 'Dmitry',
    age: 31,
    sayName() {
        alert(this.name);
    }
}

console.log(man.age);
console.log(man.name);
man.sayName();

let page = {
    title: 'samuraiJS',
    content: ``,
    render() {
        document.write(this.content);
    }
}

page.content = `<div> Content about React JS </div>`;
page.render();

let page2 = {
    title: 'samuraiJS_',
    _content: ``,
    setContent(content) {
        this._content = this.content;
    },
    getContent() {
        return this._content;
    },
    render: function (){
        document.write(this._content);
    }
}

//page2._content = `<div> Content about React JS in page2</div>`;  - нельзя
page2.setContent(`<div> Content about React JS in page2</div>`);
//console.log(page2._content);  - нельзя
console.log(page2.getContent());
page2.render();

let renderPage = (state) => {
    console.log(state);
}


let store = {
    _subscriber() {
        console.log('no subscribers (observers)')
    },
    _state: {
        firstName: 'it-incubator.by',
        lastName: 'it-kamasutra.com'
    },
    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    setFirstname(value) {
        this._state.firstName = value;
        this._subscriber();
    }
}

//store._state - нельзя

let state = store.getState();
store.setFirstname('samuraiJS');
state = store.getState();

console.log(state);

store.subscribe( () => {
   let state = store.getState() ;
   renderPage(state);
});

store.setFirstname('youtube.com');
