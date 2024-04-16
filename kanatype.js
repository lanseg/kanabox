var letters = {
    a: { hiragana: "あ", katakana: "ア" },
    i: { hiragana: "い", katakana: "イ" },
    u: { hiragana: "う", katakana: "ウ" },
    e: { hiragana: "え", katakana: "エ" },
    o: { hiragana: "お", katakana: "オ" },
    ka: { hiragana: "か", katakana: "カ" },
    ki: { hiragana: "き", katakana: "キ" },
    ku: { hiragana: "く", katakana: "ク" },
    ke: { hiragana: "け", katakana: "ケ" },
    ko: { hiragana: "こ", katakana: "コ" },
    sa: { hiragana: "さ", katakana: "サ" },
    //
    shi: { hiragana: "し", katakana: "シ" },
    si: { hiragana: "し", katakana: "シ" },
    //
    su: { hiragana: "す", katakana: "ス" },
    se: { hiragana: "せ", katakana: "セ" },
    so: { hiragana: "そ", katakana: "ソ" },
    ta: { hiragana: "た", katakana: "タ" },
    //
    chi: { hiragana: "ち", katakana: "チ" },
    ti: { hiragana: "ち", katakana: "チ" },
    //
    tu: { hiragana: "つ", katakana: "ツ", hiragana_small: "っ" },
    tsu: { hiragana: "つ", katakana: "ツ", hiragana_small: "っ" },
    //
    te: { hiragana: "て", katakana: "テ" },
    to: { hiragana: "と", katakana: "ト" },
    na: { hiragana: "な", katakana: "ナ" },
    ni: { hiragana: "に", katakana: "ニ" },
    nu: { hiragana: "ぬ", katakana: "ヌ" },
    ne: { hiragana: "ね", katakana: "ネ" },
    no: { hiragana: "の", katakana: "ノ" },
    n: { hiragana: "ん", katakana: "ン" },
    nn: { hiragana: "ん", katakana: "ン" },
    "n ": { hiragana: "ん", katakana: "ン" },
    ha: { hiragana: "は", katakana: "ハ" },
    hi: { hiragana: "ひ", katakana: "ヒ" },
    fu: { hiragana: "ふ", katakana: "フ" },
    he: { hiragana: "へ", katakana: "ヘ" },
    ho: { hiragana: "ほ", katakana: "ホ" },
    ma: { hiragana: "ま", katakana: "マ" },
    mi: { hiragana: "み", katakana: "ミ" },
    mu: { hiragana: "む", katakana: "ム" },
    me: { hiragana: "め", katakana: "メ" },
    mo: { hiragana: "も", katakana: "モ" },
    ya: { hiragana: "や", katakana: "ヤ" },
    yu: { hiragana: "ゆ", katakana: "ユ" },
    yo: { hiragana: "よ", katakana: "ヨ" },
    ra: { hiragana: "ら", katakana: "ラ" },
    ri: { hiragana: "り", katakana: "リ" },
    ru: { hiragana: "る", katakana: "ル" },
    re: { hiragana: "れ", katakana: "レ" },
    ro: { hiragana: "ろ", katakana: "ロ" },
    wa: { hiragana: "わ", katakana: "ワ" },
    wo: { hiragana: "を", katakana: "ヲ" },
    ga: { hiragana: "が", katakana: "ガ" },
    gi: { hiragana: "ぎ", katakana: "ギ" },
    gu: { hiragana: "ぐ", katakana: "グ" },
    ge: { hiragana: "げ", katakana: "ゲ" },
    go: { hiragana: "ご", katakana: "ゴ" },
    za: { hiragana: "ざ", katakana: "ザ" },
    ji: { hiragana: "じ", katakana: "ジ" },
    zu: { hiragana: "ず", katakana: "ズ" },
    ze: { hiragana: "ぜ", katakana: "ゼ" },
    zo: { hiragana: "ぞ", katakana: "ゾ" },
    da: { hiragana: "だ", katakana: "ダ" },
    di: { hiragana: "ぢ", katakana: "ヂ" },
    //
    du: { hiragana: "づ", katakana: "ヅ" },
    dzu: { hiragana: "づ", katakana: "ヅ" },
    //
    de: { hiragana: "で", katakana: "デ" },
    do: { hiragana: "ど", katakana: "ド" },
    ba: { hiragana: "ば", katakana: "バ" },
    bi: { hiragana: "び", katakana: "ビ" },
    bu: { hiragana: "ぶ", katakana: "ブ" },
    be: { hiragana: "べ", katakana: "ベ" },
    bo: { hiragana: "ぼ", katakana: "ボ" },
    pa: { hiragana: "ぱ", katakana: "パ" },
    pi: { hiragana: "ぴ", katakana: "ピ" },
    pu: { hiragana: "ぷ", katakana: "プ" },
    pe: { hiragana: "ぺ", katakana: "ペ" },
    po: { hiragana: "ぽ", katakana: "ポ" },
    kya: { hiragana: "きゃ", katakana: "キャ" },
    kyu: { hiragana: "きゅ", katakana: "キュ" },
    kyo: { hiragana: "きょ", katakana: "キョ" },
    sha: { hiragana: "しゃ", katakana: "シャ" },
    shu: { hiragana: "しゅ", katakana: "シュ" },
    sho: { hiragana: "しょ", katakana: "ショ" },
    cha: { hiragana: "ちゃ", katakana: "チャ" },
    chu: { hiragana: "ちゅ", katakana: "チュ" },
    cho: { hiragana: "ちょ", katakana: "チョ" },
    nya: { hiragana: "にゃ", katakana: "ニャ" },
    nyu: { hiragana: "にゅ", katakana: "ニュ" },
    nyo: { hiragana: "にょ", katakana: "ニョ" },
    hya: { hiragana: "ひゃ", katakana: "ヒャ" },
    hyu: { hiragana: "ひゅ", katakana: "ヒュ" },
    hyo: { hiragana: "ひょ", katakana: "ヒョ" },
    mya: { hiragana: "みゃ", katakana: "ミャ" },
    myu: { hiragana: "みゅ", katakana: "ミュ" },
    myo: { hiragana: "みょ", katakana: "ミョ" },
    rya: { hiragana: "りゃ", katakana: "リャ" },
    ryu: { hiragana: "りゅ", katakana: "リュ" },
    ryo: { hiragana: "りょ", katakana: "リョ" },
    gya: { hiragana: "ぎゃ", katakana: "ギャ" },
    gyu: { hiragana: "ぎゅ", katakana: "ギュ" },
    gyo: { hiragana: "ぎょ", katakana: "ギョ" },
    ja: { hiragana: "じゃ", katakana: "ジャ" },
    ju: { hiragana: "じゅ", katakana: "ジュ" },
    jo: { hiragana: "じょ", katakana: "ジョ" },
    bya: { hiragana: "びゃ", katakana: "ビャ" },
    byu: { hiragana: "びゅ", katakana: "ビュ" },
    byo: { hiragana: "びょ", katakana: "ビョ" },
    pya: { hiragana: "ぴゃ", katakana: "ピャ" },
    pyu: { hiragana: "ぴゅ", katakana: "ピュ" },
    pyo: { hiragana: "ぴょ", katakana: "ピョ" },
};

var toKana = function (text) {
    var result = "";
    var lower = text.toLowerCase();
    for (var i = 0; i < text.length; i++) {
        var type = text.charAt(i).toLowerCase() === text.charAt(i) ? "hiragana" : "katakana";
        var tsu = letters["tsu"][type + "_small"];
        var addTsu = false;
        if (
            i < text.length - 1 &&
            text.charAt(i) === text.charAt(i + 1) &&
            lower.charAt(i) !== "n"
        ) {
            addTsu = true;
            i++;
        } else if (i === text.length - 1 && lower.charAt(i) === "n") {
            result += text.charAt(i);
            continue;
        }
        var kana = null;
        for (var j = 3; j >= 0; j--) {
            var syllable = lower.substr(i, j);
            if (syllable in letters) {
                kana = letters[syllable][type];
                i += j - 1;
                break;
            }
        }
        if (kana !== null) {
            result += (addTsu ? tsu : "") + kana;
        } else {
            result += (addTsu ? text.charAt(i - 1) : "") + text.charAt(i);
        }
    }
    return result;
};
