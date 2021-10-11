
        function addRow() {

            var title = document.getElementById("title");
            var author = document.getElementById("author");
            var bprice = document.getElementById("price");
            var table = document.getElementById("myTableData");

            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);

             row.insertCell(0).innerHTML ="<input type = 'text' class='focus' name = 'title' value = '" + title.value + "' readonly /> ";                                               
             row.insertCell(1).innerHTML = "<input type = 'text' class='focus' name = 'title' value = '" + author.value + "'readonly />";
             row.insertCell(2).innerHTML = "<input type = 'text' class='focus' name = 'title' value = '" + price.value + "' readonly/>";
             row.insertCell(3).innerHTML = '<input type="button" value = "Edit">';
             row.insertCell(4).innerHTML = '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
        }

        function deleteRow(x) {
            var index = x.parentNode.parentNode.rowIndex;
            var table = document.getElementById("myTableData");
            table.deleteRow(index);
        }
        function EditRow(x){
            
            

        }

        //document.getElementById('addbutton').addEventListener('click',
        function popup_open() {
            document.querySelector('.modal').style.display = 'flex';

        }
        function popup_close(){
            document.querySelector('.modal').style.display = 'none';
        }

