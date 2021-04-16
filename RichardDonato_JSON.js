var empData=[];
function storeInSession() {
   // localStorage.setItem("empInfo",JSON.stringify(empData));
   sessionStorage.setItem("empInfo",JSON.stringify(empData));
}
function retrieveFromSession() {
    //var obj = JSON.parse(localStorage.getItem("empInfo"));
    var obj = JSON.parse(sessionStorage.getItem("empInfo"));
    console.log(obj);
}
function onFormSubmit() {
    var formData = readData();
    insertNewRecords(formData);
    resetForm();
    empData.push(formData);  
    console.log(empData)
}
function readData() {
    var formData={};
    formData.empid=document.getElementById("empid").value;
    formData.taskId = document.getElementById("taskId").value;
    formData.desc = document.getElementById("desc").value;
    formData.deadline = document.getElementById("deadline").value;
    return formData;
}
function insertNewRecords(formData) {
    var table = document.getElementById("taskDetails");
    var tableBody = table.getElementsByTagName("tbody")[0];
    var newRow = tableBody.insertRow(tableBody.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML=formData.empid;

    var cell2 =newRow.insertCell(1);
    cell2.innerHTML= formData.taskId;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML= formData.desc;

    var cell4 = newRow.insertCell(3);
    cell4.innerHTML= formData.deadline;

    var cell5 = newRow.insertCell(4);
    cell5.innerHTML="<a href='#' onclick='deleteRec(this)'>X</a>";
 
}
function deleteRec(data){
    var row = data.parentElement.parentElement;
    document.getElementById("taskDetails").deleteRow(row.rowIndex);
}
var data;
function updateRec(data){
    this.data = data;
    var row = data.parentElement.parentElement;
    var cells = row.getElementsByTagName("td");
    var empid = cells[0].innerHTML;
    var taskId =  cells[1].innerHTML;
    var desc =  cells[2].innerHTML;
    var deadline =  cells[3].innerHTML;

    document.getElementById("empid").value=empid;
    document.getElementById("taskId").value=taskId; 
    document.getElementById("desc").value=desc; 
    document.getElementById("deadline").value=deadline; 
    document.getElementById("b1").value="Update Record"  
}
function resetForm() {
    document.getElementById("empid").value="";
    document.getElementById("taskId").value=""; 
    document.getElementById("desc").value=""; 
    document.getElementById("deadline").value="";  

}