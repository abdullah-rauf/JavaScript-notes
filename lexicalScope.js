
// Lexical Scope
// Inner function ka pas outer function ka acess huta hai but outer ka pas inner function ka access nhi hutaa 
// Function ka scope tab tk rehta hai jb tk woh execute huta hai jab woh execute hu gya tu us ka scope bi ktm 


function hello() {
    let name = 'hello';
    function hell() {
        let arr = [1, 2, 3, 4, 5]
        function no() {
            console.log(name);
            
        }
    }
}

