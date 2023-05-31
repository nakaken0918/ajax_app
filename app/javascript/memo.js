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

  });
 };

 // addEventListener  ...引数の一つ目にトリガーとなるイベント、二つ目に発動する処理を指定。
 // load  ...ページの読み込みをトリガーにする。
 window.addEventListener('load', post);
 