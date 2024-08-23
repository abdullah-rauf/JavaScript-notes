

const obj = {
    name: 'johndoe',
    getname : (name)=> {
        console.log(this.name);
    },
    get : (name)=> {
        console.log(this.name);
    }
}
obj.getname()
obj.get()