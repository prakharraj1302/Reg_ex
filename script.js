
function srch(){
    var text = document.getElementById('text').value;
    var s = document.getElementById('srch').value;
    var out = document.getElementById('srch_out');

    out.innerHTML = "";

    console.log(s);

    var n = text.search(s);
    out.innerHTML = n;

}

function replc(){
    
    var text = document.getElementById('text').value;
    var r1 = document.getElementById('replace_1').value;
    var r2 = document.getElementById('replace_2').value;
    var out = document.getElementById('rep_out');

    out.innerHTML = "";

    var res = text.replace( r1 , r2 );
    console.log(res);

    out.innerHTML = res;

}

function test(){
    var text = document.getElementById('text').value;
    var t = document.getElementById('test').value;
    var out = document.getElementById('test_out');
    
    out.innerHTML = "";

    Regt = new RegExp(t)
    console.log(Regt);
    console.log(text);
    var res = Regt.test(text);

    out.innerHTML = res;

}