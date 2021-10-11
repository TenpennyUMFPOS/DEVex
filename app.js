
        function addRow() {

            var title = document.getElementById("title");
            var author = document.getElementById("author");
            var bprice = document.getElementById("price");
            var table = document.getElementById("myTableData");

            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);

             row.insertCell(0).innerHTML ="<input type = 'text' class='focus' name = 'title' value = '" + title.value + "'  /> ";                                               
             row.insertCell(1).innerHTML = "<input type = 'text' class='focus'   name = 'title' value = '" + author.value + "' />";
             row.insertCell(2).innerHTML = "<input type = 'text' class='focus' name = 'title' value = '" + price.value + "' />";
             row.insertCell(3).innerHTML = '<input type="button" value = "Edit" class="edit">';
             row.insertCell(4).innerHTML = '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
            
             document.querySelector(".edit").addEventListener("click", () =>{
                //  document.getElementById("focusTitle").classList.remove("focusTitle");
                //  document.getElementById("focusAuthor").classList.remove("focusAuthor");
                //  document.getElementById("focusPrice").classList.remove("focusPrice");*
                let edit = this.event.currentTarget.parentElement.parentElement.children;
                for(let i=0; i<3; i++){
                     console.log(edit[i])
                   edit[i].classList.remove("focus");
                    // edit.classList.remove("focus");
                //    console.log("here", this.event.currentTarget.parentElement.parentElement.children[i].children)
                 }
             })
        }

        function deleteRow(x) {
            var index = x.parentNode.parentNode.rowIndex;
            var table = document.getElementById("myTableData");
            table.deleteRow(index);
        }
        // function EditRow(x){
        
        // }

        //document.getElementById('addbutton').addEventListener('click',
        function popup_open() {
            document.querySelector('.modal').style.display = 'flex';

        }
        function popup_close(){
            document.querySelector('.modal').style.display = 'none';
        }
























        // function create{

        //     var tr=document.createElement('tr');
    
        //     var td1=document.createElement('td');
        //     var td2=document.createElement('td');
        //     var td3=document.createElement('td');
    
        //     var body=document.getElementsByName('body');
    
        //     var div=document.createElement('div');
    
        //     div.innerHTML=`
        //     <form method="post" action="try2.html"> <label id="title">Title:</label>   <input type="text" name="title" placeholder="title" id="title">
        //         `