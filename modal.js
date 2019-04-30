// $('#exampleModalCenter').on('modal', function ()
//  {
//
//   $('#myInput').trigger('focus')
// })
function Modal(){
  console.log("so vai");
  document.getElementById("formEbook").style.visibility = "visible";
  document.getElementById("linkEbook").style.visibility = "hidden";


}

// // Download File
// function downloadFile(file)
// {
//  window.location.href="C://cliente.xls";
// }

function downloadEbook(file)
{
 // window.location="";
  window.open('ebook/ebook-efettivo-ferramentas-para-empresas-produtivas.pdf','_blank');
}
