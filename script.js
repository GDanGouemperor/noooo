// 用來儲存單字的字典
const dictionary = {};

// 新增單字
function addWord() {
  const englishWord = document.getElementById("addEnglishWord").value.trim();
  const chineseMeaning = document.getElementById("addChineseMeaning").value.trim();

  if (englishWord && chineseMeaning) {
    dictionary[englishWord.toLowerCase()] = chineseMeaning;
    document.getElementById("addEnglishWord").value = '';
    document.getElementById("addChineseMeaning").value = '';
    updateWordList();
    alert("單字已新增！");
  } else {
    alert("請輸入完整的英文單字和中文意思！");
  }
}

// 查詢單字
function searchWord() {
  const englishWord = document.getElementById("searchEnglishWord").value.trim().toLowerCase();
  const result = dictionary[englishWord];
  const searchResult = document.getElementById("searchResult");

  if (result) {
    searchResult.textContent = `中文意思: ${result}`;
  } else {
    searchResult.textContent = "查無此單字！";
  }
}

// 更新單字清單
function updateWordList() {
  const wordList = document.getElementById("wordList");
  wordList.innerHTML = Object.entries(dictionary)
    .map(([english, chinese]) => `<li>${english} - ${chinese}</li>`)
    .join('');
}