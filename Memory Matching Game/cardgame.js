candyimgs = ['./candy.png', './corn.png', './choco.webp', './cottoncandy.png', './jelly.png','./lolipop.png', './heartcandy.png', './cane.png', './mint.png', './marsh.png' ];
var cno, rno;
var imgpos;
function rowncol() {
    rno = document.getElementById("rno").value;
    cno = document.getElementById("cno").value;

    if( rno != cno) {
        alert("Enter same rows and columns!!");
    }

    if((rno%2)== 1 && (cno%2) == 1) {
        alert("Enter even numbers only!!");
    }

    else if (rno===cno) {
        console.log(rno);
        console.log(cno);
        createTable();
        document.getElementById("btn").disabled = false;
    }

}

function createTable() {
    for(var r=0;r<(rno);r++)
    {
     var rowcell = document.getElementById('container').insertRow(r);
     rowcell.setAttribute('class', 'cell-cont' );
     for(var c=0;c<(cno);c++)  
      {
        var colcell =  rowcell.insertCell(c);
        colcell.setAttribute('class', 'cell' );
        colcell.setAttribute('id', 'cell'+r+c );
        colcell.innerHTML = "<img src='./jelly.png' alt='jelly' class='hid-img' />"; 
        colcell.value= r+ " " + c; 
        imgpos = colcell.value;
        console.log(imgpos); 
        // var hidimg = document.getElementsByClassName('cell');
        // hidimg.src = './jelly.png';
        // append(hiddenimg);
       }
       
    }
}


function hiddenimg () {
    
}

    // for(var i=1;i<=rno;i++){
    //     for(var j=1;j<=cno;j++){
    //         var tag = document.createElement("table");
    //     }
    // }
//     var theader = '<table border="1">\n';
//     var tbody = '';
//     for(var i=1; i<= rno; i++) {
//         tbody += '<tr>';

//         for( var j=1; j<=cno; j++) {
//             tbody += '<td>';
//             tbody += 'cell' + i + ',' + j;
//             tbody += '<td>';
//         }
//         tbody += '</tr>\n';
//     }
//     var tfooter = '</table>';
//     document.getElementById('container').innerHTML = theader + tbody + tfooter;

