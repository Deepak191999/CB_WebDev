
function collegeGya(callbck)
{ 
    // callbck= maggiLeneGYa
    console.log("College gya ");
    setTimeout(() => {
        console.log("college se vapis a gya");
        callbck(mummyMaggiBnaDO)
    }, 2000);
}

function maggiLeneGYa(callbck)
{
    // callbck= mummyMaggiBnaDO
    console.log("Maggi lene gya");
    setTimeout(() => {
        console.log("Maggi le kr agya");
        callbck()
    }, 2000);
}

function mummyMaggiBnaDO()
{
    console.log("Maggi banni start krdi");
    setTimeout(() => {
        console.log("Maggi bn gyi");
    }, 2000);
}

collegeGya(maggiLeneGYa)

