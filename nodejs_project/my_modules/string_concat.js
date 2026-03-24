function concat(a, b) {
  return `${a}${b}`;
}
// module: Node.jsが最初から用意している、その「ファイル自身」を指すオブジェクト。
// exports: module の中にある「出荷リスト」のような場所。
// = { concat }: 「出荷リストに concat 関数を載せます」という命令。
module.exports = {
  concat,
};
