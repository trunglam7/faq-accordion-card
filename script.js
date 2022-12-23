function showAnswer(question){
    const questionBtn = document.getElementById(question.id);
    const questionHeading = questionBtn.firstElementChild;
    const answer = questionBtn.lastElementChild;
    const arrow = questionHeading.firstElementChild;

    //if the answer (p tag) is open (height != 0)
    if(answer.offsetHeight){
        questionHeading.style.fontWeight = '400';
        answer.style.height = '0';
        answer.style.marginTop = '0';
        arrow.style.transform = 'rotate(360deg)';
    }

    //if the answer (p tag) is not open (height = 0)
    else{
        questionHeading.style.fontWeight = '700';
        answer.style.height = '100%';
        answer.style.marginTop = '10px';
        arrow.style.transform = 'rotate(180deg)';
    }
}