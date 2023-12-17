
//percentage col  
document.getElementById("gradeInput1").addEventListener('input', function(e){
    document.getElementById("percentRes1").innerHTML = e.target.value;
});
document.getElementById("gradeOverallInput1").addEventListener('input', function(e){
    var gradeInput = document.getElementById("gradeInput1").value
    document.getElementById("percentRes1").innerHTML = (gradeInput/(e.target.value))*100+"%";
});

document.getElementById("gradeInput2").addEventListener('input', function(e){
    document.getElementById("percentRes2").innerHTML = e.target.value;
});
document.getElementById("gradeOverallInput2").addEventListener('input', function(e){
    var gradeInput = document.getElementById("gradeInput2").value
    document.getElementById("percentRes2").innerHTML = (gradeInput/(e.target.value))*100+"%";
});

document.getElementById("gradeInput3").addEventListener('input', function(e){
    document.getElementById("percentRes3").innerHTML = e.target.value;
});
document.getElementById("gradeOverallInput3").addEventListener('input', function(e){
    var gradeInput = document.getElementById("gradeInput3").value
    document.getElementById("percentRes3").innerHTML = (gradeInput/(e.target.value))*100+"%";
});

document.getElementById("gradeInput4").addEventListener('input', function(e){
    document.getElementById("percentRes4").innerHTML = e.target.value;
});
document.getElementById("gradeOverallInput4").addEventListener('input', function(e){
    var gradeInput = document.getElementById("gradeInput4").value
    document.getElementById("percentRes4").innerHTML = (gradeInput/(e.target.value))*100+"%";
});

//Mean   
document.getElementById("meanBtn").addEventListener('click', function(e){
    var numOFCourses = 4
    var gradeInput1 = document.getElementById("gradeInput1").value
    if (gradeInput1 == null || gradeInput1 == "") {
        gradeInput1 = 0
        numOFCourses--
    }
    var gradeOverallIInput1 = document.getElementById("gradeOverallInput1").value
    var grade1 = parseFloat(gradeInput1/gradeOverallIInput1)

    var gradeInput2 = document.getElementById("gradeInput2").value
    if (gradeInput2 == null || gradeInput2 == "") {
        gradeInput2 = 0
        numOFCourses--
    }
    var gradeOverallIInput2 = document.getElementById("gradeOverallInput2").value
    var grade2 = parseFloat(gradeInput2/gradeOverallIInput2)

    var gradeInput3 = document.getElementById("gradeInput3").value
    if (gradeInput3 == null || gradeInput3 == "") {
        gradeInput3 = 0
        numOFCourses--
    }
    var gradeOverallIInput3 = document.getElementById("gradeOverallInput3").value
    var grade3 = parseFloat(gradeInput3/gradeOverallIInput3)

    var gradeInput4 = document.getElementById("gradeInput4").value
    if (gradeInput4 == null || gradeInput4 == "") {
        gradeInput4 = 0
        numOFCourses--
    }
    var gradeOverallIInput4 = document.getElementById("gradeOverallInput4").value
    var grade4 = parseFloat(gradeInput4/gradeOverallIInput4)

    document.getElementById("meanRes").innerHTML ="Mean= " + (((grade1 + grade2 + grade3 + grade4)/numOFCourses)*100) + "%"
    document.getElementById("meanRes").style.visibility = "visible" ;
});

//WEIGHTED 
document.getElementById("weightedBtn").addEventListener('click', function(e){
    var gradeInput1 = document.getElementById("gradeInput1").value
    var gradeOverallIInput1 = document.getElementById("gradeOverallInput1").value
    var weight1 = document.getElementById("weighted1").value
    var grade1weighted = parseFloat(gradeInput1/gradeOverallIInput1) * weight1
    if (grade1weighted == null || grade1weighted == "", weight1 == null || weight1 == "") {
        grade1weighted = 0
        weight1 = 0
    }

    var gradeInput2 = document.getElementById("gradeInput2").value
    var gradeOverallIInput2 = document.getElementById("gradeOverallInput2").value
    var weight2 = document.getElementById("weighted2").value
    var grade2weighted = parseFloat(gradeInput2/gradeOverallIInput2) * weight2
    if (grade2weighted == null || grade2weighted == "", weight2 == null || weight2 == "") {
        grade2weighted = 0
        weight2 = 0
    }

    var gradeInput3 = document.getElementById("gradeInput3").value
    var gradeOverallIInput3 = document.getElementById("gradeOverallInput3").value
    var weight3 = document.getElementById("weighted3").value
    var grade3weighted = parseFloat(gradeInput3/gradeOverallIInput3) * weight3
    if (grade3weighted == null || grade3weighted == "", weight3 == null || weight3 == "") {
        grade3weighted = 0
        weight3 = 0
    }

    var gradeInput4 = document.getElementById("gradeInput4").value
    var gradeOverallIInput4 = document.getElementById("gradeOverallInput4").value
    var weight4 = document.getElementById("weighted4").value
    var grade4weighted = parseFloat(gradeInput4/gradeOverallIInput4) * weight4
    if (grade4weighted == null || grade4weighted == "", weight4 == null || weight4 == "") {
        grade4weighted = 0
        weight4 = 0
    }

    var sumOfGradesWeighted = grade1weighted + grade2weighted + grade3weighted + grade4weighted
    var sumOfWeightes = parseFloat(weight1) + parseFloat(weight2) + parseFloat(weight3) + parseFloat(weight4)
    var weightedOverall = (sumOfGradesWeighted/sumOfWeightes)*100

    document.getElementById("weightedRes").innerHTML ="WEIGHTED= " + (weightedOverall) + "%"
    document.getElementById("weightedRes").style.visibility = "visible" ;
});
