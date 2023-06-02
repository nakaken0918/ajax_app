//投稿メモのHTML
const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">

      <div class="post-date">
        投稿日時：${item.created_at}
      </div>

      <div class="post-content">
        ${item.content}
      </div>

    </div>`;
  return html;
};

function post (){
  //リクエストを送信する処理
  // getElementById  ...指定した要素を取得。
  const submit = document.getElementById("submit");
  // click  ...クリックをトリガーにする。
  // 「e」 ...イベント発生時の情報を記録させるオブジェクト。慣例的にeventの頭文字が使われるが、文字列は何でもいい。
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    // new FormData  ...オブジェクトを生成。引数に指定したフォームの要素から値を取得する。
    const formData = new FormData(form);
    // XMLHttpRequest  ...JavaScriptからサーバーサイドにリクエストを送るオブジェクトを生成。
    // XHR  ...XMLHttpRequestを略した記述。
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {

      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };

      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      // buildHTMLで投稿メモのHTMLを外に切り出す。
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";

    };
  });
 };

 // addEventListener  ...引数の一つ目にトリガーとなるイベント、二つ目に発動する処理を指定。
 // load  ...ページの読み込みをトリガーにする。
 window.addEventListener('load', post);
 