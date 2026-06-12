// ───────────────────────────────────────────────
// REBOOST 紹介LP データ定義
// すべて一次情報で確認済みのファクト/リンクのみを使用。
// CTA の遷移先（# 始まり）は本番の発行フォーム/予約URLに差し替えてください。
// ───────────────────────────────────────────────

export const LINKS = {
  service: "https://mizukara.com/service-reboost/",
  supervision:
    "https://mizukara.com/news/%E4%BD%93%E9%A8%93%E5%9E%8B%E8%87%AA%E5%B7%B1%E7%90%86%E8%A7%A3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%80%8Creboost%EF%BC%88%E3%83%AA%E3%83%96%E3%83%BC%E3%82%B9%E3%83%88%EF%BC%89%E3%80%8D/",
  olympus: "https://mizukara.com/news/olympus-coaching/",
  book: "https://www.gentosha.co.jp/book/detail/9784344044272/",
  movie: "https://www.youtube.com/watch?v=FuQym6V3PRI",
  company: "https://mizukara.com/",
  // ▼ 本番URLに差し替え
  ctaReferral: "#issue",   // 紹介リンク発行フォーム（紹介者）
  apply: "#apply",         // 申込リンク（被紹介者「贈り物を受け取る」）
  seminar: "#seminar",     // 無料説明会の予約
  contact: "#contact",     // お問い合わせフォーム／LINE（本番URLに差し替え）
};

export const STATS = {
  count: "5,000",
  satisfaction: "4.92", // 公式資料準拠（2025年9月開催・143名平均）
  referWant: "9.50", // 「知人に紹介したい」828名調査の平均スコア（/10）
  referShare: "約7割", // 参加者のうち紹介経由の割合 ※要・社内データ確認
  asOf: "集計期間 2023年5月〜2026年1月／満足度は2025年9月開催 143名の平均（自社調べ）",
};

// 料金（公式資料：REBOOST スタータープラン）。被紹介者はご紹介ギフトで20,000円OFF。
export const PRICE = {
  plan: "REBOOST スタータープラン",
  regular: "107,800",   // 税込（本体98,000円）
  gift: "20,000",       // ご紹介ギフト（被紹介者が2万円OFF）
  referral: "87,800",   // ご紹介価格（税込）
  note: "すべて税込価格。分割払いもご用意しています。",
};

// 運営会社（すべて公式サイト等の一次情報で確認済み）
export const COMPANY = {
  name: "株式会社ミズカラ",
  tagline: "すべての人に、可能性がある。",
  about:
    "REBOOSTを提供する株式会社ミズカラ（旧 GOAL-B）は、認知科学にもとづくコーチングで、個人と組織の変容を支援する会社です。代表講師は『自分の変え方』（幻冬舎）著者の村岡大樹。",
  rows: [
    ["社名", "株式会社ミズカラ（旧 株式会社GOAL-B）"],
    ["設立", "2019年7月3日"],
    ["所在地", "東京都千代田区内幸町2-2-3 日比谷国際ビル6階"],
    ["資本金", "1,000万円"],
    ["事業内容", "個人向けコーチング事業／企業向け組織コーチング事業"],
    ["代表プログラム", "REBOOST ／ SELFCORE ／ THE VISION"],
  ],
  url: "https://mizukara.com/about/",
};

// REBOOST（FIRST）の体験設計：仮面を外す2日間
export const REBOOST_JOURNEY = [
  {
    tag: "DAY 1",
    title: "現状を知る",
    desc: "自己理解と価値観の棚卸し",
    items: ["自分を縛る信念を特定する", "思考・感情・行動のパターンを理解する", "本音と建前のズレに気づく"],
  },
  {
    tag: "DAY 2",
    title: "本来の自分へ戻る",
    desc: "制限を外し、未来を再設計する",
    items: ["自分の価値観に気づく", "未来に向かって解放していく"],
  },
  {
    tag: "懇親会",
    title: "仲間とつながる",
    desc: "新しい人生を共に歩む仲間との出会い",
    items: ["同じ志を持つ仲間との交流", "応援し合えるコミュニティ", "受講後の実践を加速"],
  },
];

// 受講後の変化（提供価値）
export const REBOOST_CHANGES = [
  "心からやりたい行動が、認識できる",
  "自分の感情を、感じやすくなる",
  "感情（ステート）が行動に影響していると分かる",
  "コミュニケーションが、円滑になる",
  "本当の願いを抑え込んでいたことに、気づく",
];

export const BADGES = [
  {
    label: "川合伸幸教授 監修",
    tag: "認知科学",
    href: LINKS.supervision,
    detail:
      "名古屋大学・川合伸幸教授（日本認知科学会 前会長）がREBOOSTを18時間以上参与観察し、自己効力感理論（バンデューラ）に則った設計であることを検証しています。",
  },
  {
    label: "オリンパス導入",
    tag: "法人実績",
    href: LINKS.olympus,
    detail:
      "オリンパスの製造部門・約76名の研修にREBOOSTを導入（2026年1月・4日間）。先方役員からも高い評価をいただいています。",
  },
  {
    label: "Amazon 1位",
    tag: "書籍",
    href: LINKS.book,
    detail:
      "書籍『自分の変え方』（村岡大樹 著・幻冬舎）が、予約開始日にAmazon7部門で1位を獲得しました。",
  },
  {
    label: "累計5,000名",
    tag: "受講実績",
    href: LINKS.service,
    detail:
      "2023年のサービス開始以来、累計5,000名以上が受講しています（自社調べ・2026年◯月時点）。",
  },
  {
    label: "満足度 4.92 / 5",
    tag: "顧客評価",
    href: LINKS.service,
    detail:
      "受講後アンケートの平均満足度は4.92/5。多くの方が変化を実感しています（自社調べ・2026年◯月時点）。",
  },
];

export const REASONS = [
  {
    n: "01",
    title: "認知科学者が監修",
    body: "名古屋大学・川合伸幸教授（日本認知科学会 前会長）が設計を検証。気合いや根性ではなく、再現性のある科学です。",
    href: LINKS.supervision,
    cta: "監修を見る",
  },
  {
    n: "02",
    title: "企業も導入",
    body: "オリンパスの研修にも採用。大手企業が選ぶ、確かさがあります。",
    href: LINKS.olympus,
    cta: "導入事例を見る",
  },
  {
    n: "03",
    title: "書籍はAmazon部門1位",
    body: "『自分の変え方』（幻冬舎）。プログラムの理論的な裏付けがあります。",
    href: LINKS.book,
    cta: "書籍を見る",
  },
  {
    n: "04",
    title: "累計5,000名・満足度4.92",
    body: "多くの方が体験し、高い満足度を記録し続けています。",
    href: LINKS.service,
    cta: "公式サイトを見る",
  },
];

// 顧客事例（なーすけを先頭・featured）
export const CASES = [
  { name: "なーすけ", role: "フィットネスYouTuber", quote: "「もう限界だった」彼が見つけた“本当の自分”。", href: "https://youtu.be/BJrOrTvt82w", type: "YouTube", yt: "BJrOrTvt82w", featured: true },
  { name: "一ノ瀬メイ", role: "パラリンピアン / 元競泳日本代表", quote: "「未来に踏み出す確かな自信を得られた」。", href: "https://prtimes.jp/main/html/rd/p/000000030.000114578.html", type: "記事", yt: "zDlh9hFh6TE" },
  { name: "ドキュメンタリー作品", role: "REBOOST 受講生", quote: "「夢中な自分を取り戻す2日間」。", href: "https://www.youtube.com/watch?v=FuQym6V3PRI", type: "YouTube", yt: "FuQym6V3PRI" },
  { name: "misa さん", role: "受講生 / note体験記", quote: "『わたしなんか』を脱いだ日。", href: "https://note.com/misa_paca/n/nde8f31aa2e63", type: "note" },
  { name: "mayu さん", role: "受講生 / note体験記", quote: "順風満帆なはずなのに、涙が止まらなかった25歳の夏。", href: "https://note.com/mayuuus/n/neee9126985ed", type: "note" },
  { name: "なみ さん", role: "ライター / 方眼ノートトレーナー", quote: "これまでで最も大きな変化が起きた2日間。", href: "https://note.com/nami_0703/n/n729a280de6e4", type: "note" },
  { name: "いっちー さん", role: "ポジティブコンダクター", quote: "「幸せ」を諦めなくてよかった。", href: "https://note.com/deft_ibis3044/n/na7fc6c3aee1c", type: "note" },
  { name: "村岡大樹", role: "REBOOST 代表講師", quote: "2,000万円の投資結果に関してご報告させてください。", href: "https://youtu.be/7tQVzVKqWUY", type: "YouTube", yt: "7tQVzVKqWUY" },
  { name: "なぜ仕事が辛いのか", role: "REBOOST 解説", quote: "その“辛さ”の、本当の理由。", href: "https://youtu.be/rvh0NtbQdYo", type: "YouTube", yt: "rvh0NtbQdYo" },
  { name: "親の影響", role: "REBOOST 解説", quote: "信念は、どうつくられるのか。", href: "https://youtu.be/P4LvFqvH_0w", type: "YouTube", yt: "P4LvFqvH_0w" },
  { name: "信念形成の科学", role: "REBOOST 解説", quote: "両親との関係が、信念に与える影響。", href: "https://youtu.be/NLGvrFgu8UE", type: "YouTube", yt: "NLGvrFgu8UE" },
];

export const thumb = (c) =>
  c.yt ? `https://img.youtube.com/vi/${c.yt}/hqdefault.jpg` : null;

export const WORRIES = [
  "やりたいことが、分からない",
  "将来が、なんとなく不安",
  "今の状況を、変えたい",
  "もっと自分らしく、生きたい",
];

// 紹介者向けFAQ：紹介される側（被紹介者）の心理を読み取り、紹介者の不安に答える
export const FAQ_REFERRAL = [
  { q: "紹介した相手に、迷惑や売り込みと思われませんか？", a: "強引な勧誘はいたしません。まずは“知る・話す”だけ。相手の方の負担にはなりませんので、安心して贈れます。" },
  { q: "相手が「怪しい」と感じないか心配です。", a: "川合伸幸教授（名古屋大学）の監修、オリンパス導入、累計5,000名・満足度4.92など客観的な裏付けがあります。「紹介したい」スコアも9.50/10。安心して受け取ってもらえます。" },
  { q: "相手には、どんなメリットがありますか？", a: "ご紹介の方は、20,000円分のギフト（2万円OFF）でREBOOSTを受講できます。あなたからの嬉しいプレゼントになります。" },
  { q: "相手があまり乗り気でないときは？", a: "まずは3分の動画や、無料説明会だけでもOK。いきなり申し込みではない“軽い入口”を用意しているので、気軽に渡せます。" },
  { q: "紹介したあと、相手との関係に影響しませんか？", a: "ご案内はすべて私たちが行い、しつこい連絡もいたしません。あなたと相手の信頼関係を損なうことはありません。" },
];

export const FAQ_RECEIVE = [
  { q: "怪しい自己啓発ではありませんか？", a: "認知科学者・川合伸幸教授（名古屋大学・日本認知科学会 前会長）の監修のもと、認知科学の知見に基づいて設計されています。オリンパス等の企業研修にも導入されており、第三者からの評価も受けています。" },
  { q: "強引な勧誘はありますか？", a: "ありません。まずは“知る・話す”だけ。ご納得いただいた方にだけ、次のステップをご案内します。" },
  { q: "料金はいくらですか？", a: "REBOOST スタータープランは通常107,800円（税込）です。ご紹介の方は20,000円分のギフトが適用され、87,800円（税込）で受講いただけます。分割払いもご用意しています。" },
  { q: "どんな人に向いていますか？", a: "「もっと自分らしく生きたい」「今の状況を変えたい」と感じている方に向いています。年齢や職種は問いません。" },
  { q: "REBOOSTでは、具体的に何をするのですか？", a: "2日間かけて、あなたの中にある“Be（信念）”を見つめ、自分を縛る思い込みを手放していくワークを行います。診断や講義中心ではなく、体験を通じて深く自己理解を進めるプログラムです。" },
  { q: "対面ですか？オンラインですか？", a: "じっくり向き合うため、対面形式で実施しています。開催地・日程の詳細は説明会でご案内します。" },
  { q: "効果は、どれくらい続きますか？", a: "一過性の高揚ではなく、日常で再現できることを目指して設計されています（川合教授監修）。受講後も、本来の自分を軸に選択を続けられる状態を目指します。" },
  { q: "一人での参加でも大丈夫ですか？", a: "はい。参加者の多くが、お一人で参加されています。安心して臨んでいただける場づくりをしています。" },
  { q: "20,000円分のギフトは、どう使えますか？", a: "ご紹介経由でのお申し込みに適用される特典です。適用条件の詳細は、説明会・個別相談でご案内します。" },
  { q: "申し込み前に、まず話だけ聞けますか？", a: "もちろんです。まずは無料説明会で、疑問や不安をすべて解消してください。そのうえで、ご自身のペースで判断いただけます。" },
];

export const LINE_TEMPLATE =
  "前に話してた“もっと自分らしくなりたい”件、私がやってすごく良かったプログラムがあって。認知科学の先生も監修してて、ちゃんと変われるやつ。きっと合うと思うからシェアするね →〔ペラいちURL〕 紹介だと2万円分お得になるよ。";

export const STEPS_REFERRAL = [
  { n: "1", title: "紹介リンクを発行する", desc: "1クリックで完了します。" },
  { n: "2", title: "大切な人へ送る", desc: "LINEテンプレートをそのまま使えます。" },
  { n: "3", title: "完了", desc: "以降のご案内は、すべて私たちが行います。" },
];

export const STEPS_RECEIVE = [
  { n: "1", title: "動画を見る", desc: "3分で、雰囲気がわかります。" },
  { n: "2", title: "説明会に参加する", desc: "〔◯月◯日〕開催。まず“知る”。" },
  { n: "3", title: "個別相談で話してみる", desc: "あなたのペースで大丈夫です。" },
];
