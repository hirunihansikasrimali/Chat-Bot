function sendButton(){
const myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "__cf_bm=yYBRohDOcMm_Wh02IQEc1M4j1Nf_TY78EfDtf4ZG7JA-1795075606.6917822-1.0.1.1-tEyYVB0YRtOuyNfvefvfiL3M7t.Ys_05CL5rCQP3Hwxi1laeAM6uNR_1SjtLNomY1OG5vyk65KGfbB.KiHuWR_lOjruBW0PdsuRQ39J_a1TiG5uGXkRo0jW.yqPUcJlH");

const raw = JSON.stringify({
  "model": "openai/gpt-oss-20b",
  "input": document.getElementById("txtUserInput").value
//   "input": "Explain about java"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.groq.com/openai/v1/responses", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    document.getElementById("lblDisplay").innerText=result.output[1].content[0].text;
    
    console.log(result.output[1].content[0].text);
  })
}

