const getScore = function(key, responses, score = 0){
  for(let i=0; i<key.length; i++){
    for(let j=0; j<responses.length; j++){
      if((key[i].qNum === responses[j].qNum) && (key[i].answer === responses[j].answer)){
        score = score + 1;
      }
    }
  }

  return score;
}

export default getScore;