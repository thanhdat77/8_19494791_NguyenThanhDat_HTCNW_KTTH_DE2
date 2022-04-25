$(document).ready(function() {
    var i = 1
    $("#btn2").click(function(){
        $("#myModal").modal();

    })
    $("#name").blur(fname)
    
    function fname(){
        var i = 1
        let re = /[A-Z]{1}[a-z]*/
        if ($("#name").val()== ""){
            $("#spname").html("Khong de trong")
            return false
        }
        if(re.test($("#name").val())){

            $("#spname").html("*")
            return true

        }else{
            $("#spname").html("Moi ki tu viet hoa va khong su dung so")
            return false
        }
    }
    $("#number").blur(fnumber)
    function fnumber(){
        let re = /\d{9}/
        if ($("#number").val()== ""){
            $("#spnumber").html("Khong de trong")
            return false
        }
        if(re.test($("#number").val())){

            $("#spnumber").html("*")
            return true

        }else{
            $("#spnumber").html("phai la 9 so")
            return false
        }
    }
    
   
    $("#DC").blur(fDC)
    function fDC(){
        let re = /[A-Z]+/
        if ($("#DC").val()== ""){
            $("#spDC").html("Khong de trong")
            return false
        }   
        if(re.test($("#DC").val())){

            $("#spDC").html("*")
            return true

        }else{
            $("#spDC").html("Dùng chữ hoa ")
            return false
        }
    }
    $("#NTT").blur(fNNT)
    function fNNT(){
        let re = /[a-zA-z]+(\@iuh\.edu\.vn)$/
        if ($("#NTT").val()== ""){
            $("#spNTT").html("Khong de trong")
            return false
        }   
        if(re.test($("#NTT").val())){

            $("#spNTT").html("*")
            return true

        }else{
            $("#spNTT").html("phai dung dinh dang @iuh.edu.vn")
            return false
        }
    }
    /////////////////////
    $("#DT").blur(fDT)
    function fDT(){
        let re = /0[0-9]{2}\-[0-9]{3}\-[0-9]{4}/
        if ($("#DT").val()== ""){
            $("#spDT").html("Khong de trong")
            return false
        }   
        if(re.test($("#DT").val())){

            $("#spDT").html("*")
            return true

        }else{
            $("#spDT").html(": 0xx-xxx-xxxx dùng chữ số 0 ở đầu và các chữ số ở sau đúng định dạng")
            return false
        }
    }
    $("#Save").click(function(){
        if ( fname() && fnumber() && fDC() && fDT()){
            row = "<tr>";
            row += "<th>" + (i++) +"</th>"
            row += "<th>" + $("#name").val() +"</th>"
            row += "<th>" + $("#number").val() +"</th>"
            row += "<th>" + $("#DC").val() +"</th>"
            row += "<th>" + $("#NTT").val() +"</th>"
            row += "<th>" + $("#DT").val() +"</th>"
            row += "<th>" + $("#ADD").val() +"</th>"
            $("#danhsach").append(row)
            $("#myModal").modal("hide")
        }else{
            alert("nhap dung form moi co the them")
        }
    })

})


