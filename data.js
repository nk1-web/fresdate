// =====================================================
// Fresdate - デートプランDB
//
// ★ データを追加するときはこのファイルだけ編集すればOK！
//
// 【構造】
//   category   : カテゴリ名（12種類）
//   subCategory: サブカテゴリ（カテゴリ内の分類）
//   name       : プラン名（具体的なスポット名）
//   budget     : 予算（表示用文字列）
//   budgetNum  : 予算（数値・フィルタリング用）
//   area       : エリア区分（都内・近郊/神奈川/埼玉/おうち/その他）
//   areaRaw    : エリア詳細（カード表示用）
//   time       : 時間帯（昼/夕方/夜/いつでも）
//   indoor     : 屋内 or 屋外
//   season     : 季節（春/夏/秋/冬/通年）
//   duration   : 所要時間（1〜3時間/2〜4時間/半日〜1日）
//
// ★ 追加するときは最後の「ここに追加」の行にコピペするだけ！
// =====================================================

const DB = [

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ① スポーツ・アクティビティ
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"スポーツ・アクティビティ",subCategory:"施設",         name:"ラウンドワン",        budget:"3000円〜",  budgetNum:3000,  area:"東京",areaRaw:"全国",         time:"夕方",    indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"スポーツ・アクティビティ",subCategory:"施設",         name:"スポッチャ",          budget:"3000円〜",  budgetNum:3000,  area:"東京",areaRaw:"全国",         time:"昼",      indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"スポーツ・アクティビティ",subCategory:"屋内スポーツ", name:"ボウリング",          budget:"2000円〜",  budgetNum:2000,  area:"東京",areaRaw:"全国",         time:"昼",      indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋内スポーツ", name:"ボルダリング",        budget:"2000円〜",  budgetNum:2000,  area:"東京",areaRaw:"全国",         time:"昼",      indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ", name:"バドミントン（公園）",budget:"500円〜",   budgetNum:500,   area:"東京",areaRaw:"全国",     time:"昼",      indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ", name:"スケート",            budget:"2000円〜",  budgetNum:2000,  area:"東京",areaRaw:"全国",         time:"昼",      indoor:"屋外",season:"冬",  duration:"2〜4時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ", name:"スノボ・スキー",      budget:"10000円〜", budgetNum:10000, area:"長野・山梨",areaRaw:"全国",     time:"昼",      indoor:"屋外",season:"冬",  duration:"半日〜1日"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ", name:"パラグライダー",      budget:"10000円〜", budgetNum:10000, area:"長野・山梨",areaRaw:"全国",     time:"昼",      indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ", name:"サイクリング",        budget:"1000円〜",  budgetNum:1000,  area:"東京",areaRaw:"全国",     time:"昼",      indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ", name:"ランニング",          budget:"0円",       budgetNum:0,     area:"東京",areaRaw:"全国",         time:"昼",      indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ", name:"キャッチボール",      budget:"0円",       budgetNum:0,     area:"東京",areaRaw:"全国",         time:"昼",      indoor:"屋外",season:"通年",duration:"2〜4時間"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ② エンタメ
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"エンタメ",subCategory:"",name:"劇団四季・舞台",  budget:"6000円〜",  budgetNum:6000, area:"東京",areaRaw:"全国",time:"昼",  indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"エンタメ",subCategory:"",name:"映画館",          budget:"2000円〜",  budgetNum:2000, area:"東京",areaRaw:"全国",time:"昼",  indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"エンタメ",subCategory:"",name:"ゲームセンター",  budget:"1000円〜",  budgetNum:1000, area:"東京",areaRaw:"全国",time:"夕方",indoor:"屋内",season:"通年",duration:"1〜3時間"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ③ お家デート
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"お家デート",subCategory:"",name:"ゲーム（家）", budget:"0円",    budgetNum:0,    area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"お家デート",subCategory:"",name:"料理づくり",   budget:"1000円〜",budgetNum:1000, area:"おうち",areaRaw:"全国",time:"夜",      indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"お家デート",subCategory:"",name:"塗り絵（家）", budget:"500円〜", budgetNum:500,  area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"お家デート",subCategory:"",name:"映画（家）",   budget:"0円",    budgetNum:0,    area:"おうち",areaRaw:"全国",time:"夜",      indoor:"屋内",season:"通年",duration:"1〜3時間"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ④ ドライブ
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"ドライブ",subCategory:"東京エリア",  name:"海ほたる",   budget:"2000円〜",budgetNum:2000, area:"千葉",areaRaw:"千葉（木更津）",         time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"ドライブ",subCategory:"神奈川エリア",name:"箱根ドライブ",budget:"3000円〜",budgetNum:3000, area:"神奈川",    areaRaw:"神奈川（箱根）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ⑤ プチ旅行
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"プチ旅行",subCategory:"神奈川エリア",name:"箱根",              budget:"5000円〜",budgetNum:5000, area:"神奈川",areaRaw:"神奈川（箱根）",      time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"プチ旅行",subCategory:"神奈川エリア",name:"みさきまぐろきっぷ",budget:"4000円〜",budgetNum:4000, area:"神奈川",areaRaw:"神奈川（三浦半島）",  time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ⑥ リラクゼーション
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"リラクゼーション",subCategory:"温泉",             name:"箱根温泉",  budget:"5000円〜",budgetNum:5000, area:"神奈川",    areaRaw:"全国",    time:"いつでも",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"スーパー銭湯",name:"スパジャポ",budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"サウナ",           name:"個室サウナ", budget:"3000円〜",budgetNum:3000, area:"東京",areaRaw:"全国",             time:"昼",      indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"岩盤浴",           name:"岩盤浴",     budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"全国",             time:"昼",      indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"動物カフェ",       name:"動物カフェ", budget:"3000円〜",budgetNum:3000, area:"東京",areaRaw:"全国",             time:"昼",      indoor:"屋内",season:"通年",duration:"1〜3時間"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ⑦ 季節限定イベント
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"季節限定イベント",subCategory:"春",name:"お花見",      budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"全国",       time:"昼",  indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"季節限定イベント",subCategory:"春",name:"お花見（夜桜）",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"全国",       time:"夜",  indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"季節限定イベント",subCategory:"春",name:"いちご狩り",  budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"全国",   time:"昼",  indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"季節限定イベント",subCategory:"夏",name:"お祭り",      budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"全国",   time:"夜",  indoor:"屋外",season:"夏",duration:"2〜4時間"},
  {category:"季節限定イベント",subCategory:"夏",name:"花火大会",    budget:"0円",     budgetNum:0,    area:"東京",areaRaw:"全国",   time:"夜",  indoor:"屋外",season:"夏",duration:"2〜4時間"},
  {category:"季節限定イベント",subCategory:"夏",name:"プール",      budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"全国",   time:"昼",  indoor:"屋外",season:"夏",duration:"半日〜1日"},
  {category:"季節限定イベント",subCategory:"秋",name:"昭和記念公園",budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"全国",time:"昼", indoor:"屋外",season:"秋",duration:"2〜4時間"},
  {category:"季節限定イベント",subCategory:"冬",name:"イルミネーション",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"全国",time:"夜", indoor:"屋外",season:"冬",duration:"2〜4時間"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ⑧ アウトドア
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"アウトドア",subCategory:"登山",     name:"高尾山",        budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"東京（八王子）",       time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"ピクニック",name:"芝公園",        budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（芝公園）",  time:"昼",indoor:"屋外",season:"春",  duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"ピクニック",name:"代々木公園",    budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（代々木）",  time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"ピクニック",name:"新宿御苑",      budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（新宿）",    time:"昼",indoor:"屋外",season:"春",  duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",       name:"葛西臨海公園",  budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（葛西）",    time:"昼",indoor:"屋外",season:"夏",  duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"キャンプ", name:"山中湖キャンプ",budget:"5000円〜",budgetNum:5000, area:"その他",    areaRaw:"山梨（山中湖）",  time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"牧場",     name:"牧場",          budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"東京近郊",        time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"釣り",     name:"八景島釣り",    budget:"3000円〜",budgetNum:3000, area:"神奈川",    areaRaw:"神奈川（八景島）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ⑨ ミュージアム・展示施設
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"ミュージアム・展示施設",subCategory:"水族館",       name:"水族館",          budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"東京都内近郊",       time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"美術館",       name:"国立西洋美術館",  budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（上野）",    time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"美術館",       name:"森美術館",        budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"東京（六本木）",  time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"美術館",       name:"チームラボ",      budget:"4000円〜",budgetNum:4000, area:"東京",areaRaw:"東京（豊洲）",            time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"動物園",       name:"上野動物園",      budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（上野）",    time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"プラネタリウム",name:"プラネタリウム",  budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"東京都内",            time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"博物館",       name:"博物館",          budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京都内",            time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"イルミネーション",name:"よみうりランド（イルミ）",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（よみうりランド）",time:"夜",indoor:"屋外",season:"冬",duration:"2〜4時間"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ⑩ 体験・ものづくり
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"体験・ものづくり",subCategory:"",name:"陶芸体験",      budget:"3000円〜",budgetNum:3000, area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"キャンドル製作",budget:"3000円〜",budgetNum:3000, area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"ペアリング作り",budget:"5000円〜",budgetNum:5000, area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"香水づくり",    budget:"4000円〜",budgetNum:4000, area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"リアル脱出ゲーム",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"アクセサリー作り",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ⑪ 食べ歩き・散策
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"食べ歩き・散策",subCategory:"東京エリア",  name:"浅草食べ歩き",  budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"東京（浅草）",    time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",  name:"上野散策",      budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（上野）",    time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",  name:"ラーメン巡り",  budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"東京都内",            time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",  name:"町中華巡り",    budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"東京都内",            time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"神奈川エリア",name:"横浜中華街",    budget:"2000円〜",budgetNum:2000, area:"神奈川",    areaRaw:"神奈川（横浜）",  time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"神奈川エリア",name:"鎌倉散策",      budget:"3000円〜",budgetNum:3000, area:"神奈川",    areaRaw:"神奈川（鎌倉）",  time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"神奈川エリア",name:"みなとみらい",  budget:"2000円〜",budgetNum:2000, area:"神奈川",    areaRaw:"神奈川（横浜）",  time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"埼玉エリア",  name:"川越散策",      budget:"2000円〜",budgetNum:2000, area:"埼玉",      areaRaw:"埼玉（川越）",    time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ⑫ テーマパーク
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"テーマパーク",subCategory:"",name:"ディズニーランド",budget:"10000円〜",budgetNum:10000,area:"千葉",areaRaw:"千葉（舞浜）",         time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"よみうりランド",  budget:"3000円〜", budgetNum:3000, area:"東京",areaRaw:"東京（よみうりランド）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},

  // ★ここに新しいプランを追加してください★
  // {category:"カテゴリ",subCategory:"サブカテゴリ",name:"プラン名",budget:"〇〇円〜",budgetNum:0,area:"東京",areaRaw:"詳細エリア",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
];
