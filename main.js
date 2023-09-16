var postAPI = `http://localhost:3000/courses`;

fetch(postAPI)
  .then((response) => response.json())
  .then((data) => {
    var vocab = data.map((item) => {
      return {
        id: item.id,
        word: item.English,
        definition: item.Vietnamese,
      };
    });
    vocab.forEach((element) => {
      console.log(element.word + " la: " + element.definition);
    });
  });
