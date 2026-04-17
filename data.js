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
  {category:"スポーツ・アクティビティ",subCategory:"施設",         name:"スポッチャ",          budget:"3000円〜",  budgetNum:3000,  area:"東京",areaRaw:"全国",         time:"昼",      indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"スポーツ・アクティビティ",subCategory:"屋内スポーツ", name:"ボウリング",          budget:"2000円〜",  budgetNum:2000,  area:"東京",areaRaw:"全国",         time:"昼",      indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋内スポーツ", name:"ボルダリング",        budget:"2000円〜",  budgetNum:2000,  area:"東京",areaRaw:"全国",         time:"昼",      indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ", name:"バドミントン",     budget:"500円〜",   budgetNum:500,   area:"東京",areaRaw:"全国",     time:"昼",      indoor:"屋外",season:"通年",duration:"2〜4時間"},
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
  {category:"エンタメ",subCategory:"",name:"ゲームセンター",  budget:"100円〜",  budgetNum:1000, area:"東京",areaRaw:"全国",time:"夕方",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"エンタメ",subCategory:"",name:"カラオケ",  budget:"1000円〜",  budgetNum:1000, area:"東京",areaRaw:"全国",time:"夕方",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"エンタメ",subCategory:"",name:"ダーツ",  budget:"1000円〜",  budgetNum:1000, area:"東京",areaRaw:"全国",time:"夕方",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"エンタメ",subCategory:"",name:"ビリヤード",  budget:"1000円〜",  budgetNum:1000, area:"東京",areaRaw:"全国",time:"夕方",indoor:"屋内",season:"通年",duration:"1〜3時間"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ③ お家デート
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"お家デート",subCategory:"",name:"ゲーム", budget:"0円",    budgetNum:0,    area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"1～3時間"},
  {category:"お家デート",subCategory:"",name:"料理づくり",   budget:"1000円〜",budgetNum:1000, area:"おうち",areaRaw:"全国",time:"夜",      indoor:"屋内",season:"通年",duration:"1～3時間"},
  {category:"お家デート",subCategory:"",name:"塗り絵", budget:"500円〜", budgetNum:500,  area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"1～3時間"},
  {category:"お家デート",subCategory:"",name:"映画",   budget:"0円",    budgetNum:0,    area:"おうち",areaRaw:"全国",time:"夜",      indoor:"屋内",season:"通年",duration:"1〜3時間"},


  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ⑤ プチ旅行
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"食べ歩き・散策",subCategory:"神奈川エリア",name:"箱根",              budget:"5000円〜",budgetNum:5000, area:"神奈川",areaRaw:"神奈川（箱根）",      time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"食べ歩き・散策",subCategory:"神奈川エリア",name:"みさきまぐろきっぷ",budget:"4000円〜",budgetNum:4000, area:"神奈川",areaRaw:"神奈川（三浦半島）",  time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ⑥ リラクゼーション
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"リラクゼーション",subCategory:"温泉",             name:"箱根温泉",  budget:"5000円〜",budgetNum:5000, area:"神奈川",    areaRaw:"神奈川県（箱根）",    time:"いつでも",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"温泉複合施設",name:"スパジャポ",budget:"1000円〜",budgetNum:1000, area:"東京（東久留米市）",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"サウナ",           name:"個室サウナ", budget:"3000円〜",budgetNum:3000, area:"東京",areaRaw:"全国",             time:"昼",      indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"岩盤浴",           name:"岩盤浴",     budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"全国",             time:"昼",      indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"動物カフェ",       name:"動物カフェ", budget:"3000円〜",budgetNum:3000, area:"東京",areaRaw:"全国",             time:"昼",      indoor:"屋内",season:"通年",duration:"1〜3時間"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ⑦ 期間限定イベント
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ⑧ アウトドア
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"アウトドア",subCategory:"山",     name:"高尾山",        budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"東京（八王子）",       time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"公園",name:"芝公園",        budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（芝公園）",  time:"昼",indoor:"屋外",season:"春",  duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"公園",name:"代々木公園",    budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（代々木）",  time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"公園",name:"新宿御苑",      budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（新宿）",    time:"昼",indoor:"屋外",season:"春",  duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",       name:"葛西臨海公園",  budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（葛西）",    time:"昼",indoor:"屋外",season:"夏",  duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"キャンプ", name:"山中湖キャンプ",budget:"5000円〜",budgetNum:5000, area:"その他",    areaRaw:"山梨（山中湖）",  time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"釣り",     name:"八景島釣り掘",    budget:"3000円〜",budgetNum:3000, area:"神奈川",    areaRaw:"神奈川（八景島）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ⑨ ミュージアム・展示施設
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"ミュージアム・展示施設",subCategory:"美術館",       name:"国立西洋美術館",  budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（上野）",    time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"美術館",       name:"森美術館",        budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"東京（六本木）",  time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"美術館",       name:"チームラボ",      budget:"4000円〜",budgetNum:4000, area:"東京",areaRaw:"東京（豊洲）",            time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"動物園",       name:"上野動物園",      budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（上野）",    time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},

  

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

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // コメントから追加（新規プラン）
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // お家デート
  {category:"お家デート",subCategory:"",name:"アニメ鑑賞",budget:"0円",budgetNum:0,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"旅行シミュレーション・しおり作り",budget:"0円",budgetNum:0,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"お菓子作り",budget:"1000円〜",budgetNum:1000,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"ボードゲーム",budget:"0円",budgetNum:0,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"1〜3時間"},

  // エンタメ
  {category:"食べ歩き・散策",subCategory:"",name:"コラボカフェ巡り",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"エンタメ",subCategory:"",name:"サーカス",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"展望台",name:"スカイツリー",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（押上）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"",name:"ペットショップ巡り",budget:"0円",budgetNum:0,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"",subCategory:"",name:"家具屋・雑貨屋巡り",budget:"0円",budgetNum:0,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"エンタメ",subCategory:"",name:"アウトレット",budget:"0円",budgetNum:0,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"半日〜1日"},
 
  // スポーツ・アクティビティ
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"フリスビー",budget:"0円",budgetNum:0,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"シャボン玉",budget:"0円",budgetNum:0,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"凧揚げ",budget:"0円",budgetNum:0,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  

  // 体験・ものづくり
  {category:"体験・ものづくり",subCategory:"",name:"そば打ち体験",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"スポーツ・アクティビティ",subCategory:"",name:"乗馬体験",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},

  // 食べ歩き・散策
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"新大久保食べ歩き",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（新大久保）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"新宿御苑散策",budget:"500円〜",budgetNum:500,area:"東京",areaRaw:"東京（新宿）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"蔵前散策",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京（蔵前）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"吉祥寺散策",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京（吉祥寺）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"清澄白河散策",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京（清澄白河）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"神保町散策",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京（神保町）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"古き良き商店街食べ歩き",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"古着屋巡り",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（三軒茶屋・下北沢・中目黒）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"昼飲み",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"世田谷線巡り",budget:"500円〜",budgetNum:500,area:"東京",areaRaw:"東京（世田谷）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"異国料理巡り",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"蚤の市",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"神奈川エリア",name:"江ノ島散策",budget:"2000円〜",budgetNum:2000,area:"神奈川",areaRaw:"神奈川（江ノ島）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},

  // アウトドア
  {category:"アウトドア",subCategory:"キャンプ",name:"グランピング",budget:"10000円〜",budgetNum:10000,area:"その他",areaRaw:"東京近郊",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"その他",name:"道の駅スタンプラリー",budget:"0円",budgetNum:0,area:"その他",areaRaw:"関東近郊",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},

  // ミュージアム・展示施設
  {category:"ミュージアム・展示施設",subCategory:"水族館",name:"アートアクアリウム",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（銀座）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"公園",name:"都立9庭園",budget:"500円〜",budgetNum:500,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"展望台",name:"北仲ノット展望台",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（横浜）",time:"夕方",indoor:"屋外",season:"通年",duration:"1〜3時間"},

  // テーマパーク
  {category:"テーマパーク",subCategory:"",name:"富士急ハイランド",budget:"5000円〜",budgetNum:5000,area:"その他",areaRaw:"山梨（富士急）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"ユニバーサルスタジオジャパン",budget:"10000円〜",budgetNum:10000,area:"その他",areaRaw:"大阪（USJ）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"ジブリパーク",budget:"5000円〜",budgetNum:5000,area:"その他",areaRaw:"愛知（ジブリパーク）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"ちいかわパーク",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},

  // プチ旅行
  {category:"食べ歩き・散策",subCategory:"神奈川エリア",name:"江ノ島",budget:"3000円〜",budgetNum:3000,area:"神奈川",areaRaw:"神奈川（江ノ島）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},

  // 期間限定イベント

  {category:"アウトドア",subCategory:"高原",name:"霧降高原",budget:"1000円〜",budgetNum:1000,area:"栃木",areaRaw:"栃木（霧降高原）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"高原",name:"箱根仙石原ススキ高原",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（箱根）",time:"昼",indoor:"屋外",season:"秋",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"滝・渓谷・湖",name:"奥多摩・鳩ノ巣渓谷",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京（奥多摩）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"公園",name:"昭和記念公園",budget:"500円〜",budgetNum:500,area:"東京",areaRaw:"東京（立川）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  // ★ここに新しいプランを追加してください★
  // {category:"カテゴリ",subCategory:"サブカテゴリ",name:"プラン名",budget:"〇〇円〜",budgetNum:0,area:"東京",areaRaw:"詳細エリア",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},


  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 新規追加スポット
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ── アウトドア / 公園 ──
  {category:"アウトドア",subCategory:"公園",name:"弘前公園",budget:"500円〜",budgetNum:500,area:"その他",areaRaw:"青森（弘前）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"公園",name:"高遠城址公園",budget:"500円〜",budgetNum:500,area:"その他",areaRaw:"長野（高遠）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"公園",name:"国営ひたち海浜公園",budget:"500円〜",budgetNum:500,area:"茨城",areaRaw:"茨城（ひたちなか）",time:"昼",indoor:"屋外",season:"春",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"公園",name:"あしかがフラワーパーク",budget:"1000円〜",budgetNum:1000,area:"栃木",areaRaw:"栃木（足利）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"公園",name:"吾妻山公園",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（二宮）",time:"昼",indoor:"屋外",season:"冬",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"公園",name:"偕楽園",budget:"500円〜",budgetNum:500,area:"茨城",areaRaw:"茨城（水戸）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"公園",name:"稲毛海浜公園",budget:"0円",budgetNum:0,area:"千葉",areaRaw:"千葉（稲毛）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"山",name:"大室山",budget:"500円〜",budgetNum:500,area:"その他",areaRaw:"静岡（伊東）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"公園",name:"美ヶ原公園",budget:"0円",budgetNum:0,area:"その他",areaRaw:"長野（美ヶ原）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},

  // ── アウトドア / 高原・山 ──
  {category:"アウトドア",subCategory:"高原",name:"覚満淵",budget:"0円",budgetNum:0,area:"群馬",areaRaw:"群馬（赤城山）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"高原",name:"渋峠",budget:"0円",budgetNum:0,area:"群馬",areaRaw:"群馬（渋峠）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"高原",name:"上高地",budget:"1000円〜",budgetNum:1000,area:"その他",areaRaw:"長野（上高地）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"公園",name:"尾瀬国立公園",budget:"1000円〜",budgetNum:1000,area:"群馬",areaRaw:"群馬（尾瀬）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"高原",name:"乙女峠",budget:"0円",budgetNum:0,area:"その他",areaRaw:"静岡（乙女峠）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"山",name:"達磨山",budget:"0円",budgetNum:0,area:"その他",areaRaw:"静岡（達磨山）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"高原",name:"天狗高原",budget:"0円",budgetNum:0,area:"その他",areaRaw:"高知（天狗高原）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"滝・渓谷・湖",name:"河口湖",budget:"0円",budgetNum:0,area:"その他",areaRaw:"山梨（河口湖）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},

  // ── アウトドア / 滝・渓谷 ──
  {category:"アウトドア",subCategory:"滝・渓谷・湖",name:"華厳滝",budget:"500円〜",budgetNum:500,area:"栃木",areaRaw:"栃木（日光）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"滝・渓谷・湖",name:"白糸の滝",budget:"0円",budgetNum:0,area:"その他",areaRaw:"静岡（富士宮）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"滝・渓谷・湖",name:"平湯大滝",budget:"0円",budgetNum:0,area:"その他",areaRaw:"岐阜（奥飛騨）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"滝・渓谷・湖",name:"沈堕の滝",budget:"0円",budgetNum:0,area:"その他",areaRaw:"大分（沈堕の滝）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"滝・渓谷・湖",name:"吹割の滝",budget:"0円",budgetNum:0,area:"群馬",areaRaw:"群馬（沼田）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"滝・渓谷・湖",name:"袋田の滝",budget:"500円〜",budgetNum:500,area:"茨城",areaRaw:"茨城（大子）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"滝・渓谷・湖",name:"月待の滝",budget:"0円",budgetNum:0,area:"茨城",areaRaw:"茨城（大子）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"滝・渓谷・湖",name:"花貫渓谷",budget:"0円",budgetNum:0,area:"茨城",areaRaw:"茨城（高萩）",time:"昼",indoor:"屋外",season:"秋",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"滝・渓谷・湖",name:"日原鍾乳洞",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京（奥多摩）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"滝・渓谷・湖",name:"吾妻峡",budget:"0円",budgetNum:0,area:"群馬",areaRaw:"群馬（東吾妻）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"滝・渓谷・湖",name:"三十槌の氷柱",budget:"0円",budgetNum:0,area:"埼玉",areaRaw:"埼玉（秩父）",time:"昼",indoor:"屋外",season:"冬",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"滝・渓谷・湖",name:"洒水の滝",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（山北）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},

  // ── アウトドア / 海岸・島 ──
  {category:"アウトドア",subCategory:"海",name:"江川海岸",budget:"0円",budgetNum:0,area:"千葉",areaRaw:"千葉（木更津）",time:"夕方",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"犬吠埼",budget:"0円",budgetNum:0,area:"千葉",areaRaw:"千葉（銚子）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"小浦海岸",budget:"0円",budgetNum:0,area:"千葉",areaRaw:"千葉（勝浦）",time:"昼",indoor:"屋外",season:"夏",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"屏風ヶ浦",budget:"0円",budgetNum:0,area:"千葉",areaRaw:"千葉（銚子）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"御宿海岸",budget:"0円",budgetNum:0,area:"千葉",areaRaw:"千葉（御宿）",time:"昼",indoor:"屋外",season:"夏",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"大波月海岸",budget:"0円",budgetNum:0,area:"その他",areaRaw:"高知（大月）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"猿島",budget:"1000円〜",budgetNum:1000,area:"神奈川",areaRaw:"神奈川（横須賀）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"立石海岸",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（横須賀）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"城ヶ島",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（三浦）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"稚児ヶ淵",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（江ノ島）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"仙石原",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（箱根）",time:"昼",indoor:"屋外",season:"秋",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"辰ノ島",budget:"1000円〜",budgetNum:1000,area:"その他",areaRaw:"長崎（壱岐）",time:"昼",indoor:"屋外",season:"夏",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"海",name:"青海島",budget:"0円",budgetNum:0,area:"その他",areaRaw:"山口（長門）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"父母ヶ浜",budget:"0円",budgetNum:0,area:"その他",areaRaw:"香川（三豊）",time:"夕方",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"天神崎",budget:"0円",budgetNum:0,area:"その他",areaRaw:"和歌山（田辺）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"南房総国定公園鵜原理想郷",budget:"0円",budgetNum:0,area:"千葉",areaRaw:"千葉（勝浦）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},

  // ── アウトドア / 神社・史跡 ──
  {category:"アウトドア",subCategory:"神社・史跡",name:"天空の鳥居（高屋神社）",budget:"0円",budgetNum:0,area:"その他",areaRaw:"香川（観音寺）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"神社・史跡",name:"世界遺産鬼ヶ城",budget:"0円",budgetNum:0,area:"その他",areaRaw:"三重（熊野）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"山",name:"吉野山",budget:"0円",budgetNum:0,area:"その他",areaRaw:"奈良（吉野）",time:"昼",indoor:"屋外",season:"春",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"神社・史跡",name:"旧太子駅",budget:"0円",budgetNum:0,area:"群馬",areaRaw:"群馬（富岡）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"神社・史跡",name:"牛代の水目桜",budget:"0円",budgetNum:0,area:"茨城",areaRaw:"静岡（島田市）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"馬ロック",budget:"0円",budgetNum:0,area:"その他",areaRaw:"静岡（南伊豆町）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},

  // ── ミュージアム・展示施設 / 展望台 ──
  {category:"ミュージアム・展示施設",subCategory:"展望台",name:"アイ・リンクタウン展望施設",budget:"0円",budgetNum:0,area:"千葉",areaRaw:"千葉（市川）",time:"夕方",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"ミュージアム・展示施設",subCategory:"展望台",name:"江ノ島シーキャンドル",budget:"500円〜",budgetNum:500,area:"神奈川",areaRaw:"神奈川（江ノ島）",time:"夕方",indoor:"屋内",season:"通年",duration:"1〜3時間"},

  // ── ミュージアム・展示施設 / 水族館 ──
  {category:"ミュージアム・展示施設",subCategory:"水族館",name:"箱根園水族館",budget:"1500円〜",budgetNum:1500,area:"神奈川",areaRaw:"神奈川（箱根）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},

  // ── リラクゼーション / 温泉 ──
  {category:"リラクゼーション",subCategory:"温泉",name:"伊香保温泉",budget:"3000円〜",budgetNum:3000,area:"群馬",areaRaw:"群馬（伊香保）",time:"いつでも",indoor:"屋内",season:"通年",duration:"半日〜1日"},

  // ── プチ旅行 ──
  {category:"アウトドア",subCategory:"海",name:"都井岬",budget:"1000円〜",budgetNum:1000,area:"その他",areaRaw:"宮崎（都井岬）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"滝・渓谷・湖",name:"祖谷のかずら橋",budget:"1000円〜",budgetNum:1000,area:"その他",areaRaw:"徳島（祖谷）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"滝・渓谷・湖",name:"白龍湖",budget:"1000円〜",budgetNum:1000,area:"その他",areaRaw:"岐阜（白龍湖）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"高原",name:"サンメッセ日南",budget:"1000円〜",budgetNum:1000,area:"その他",areaRaw:"宮崎（日南）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"滝・渓谷・湖",name:"ユージーン渓谷",budget:"0円",budgetNum:0,area:"その他",areaRaw:"岡山（ユージーン渓谷）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"温泉",name:"房総鴨川温泉",budget:"5000円〜",budgetNum:5000,area:"千葉",areaRaw:"千葉（鴨川）",time:"いつでも",indoor:"屋内",season:"通年",duration:"半日〜1日"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 新規追加スポット（第3弾）
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ── ミュージアム・展示施設 / 博物館・美術館 ──
  {category:"ミュージアム・展示施設",subCategory:"博物館",name:"板橋区立熱帯環境植物館",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京（板橋）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"美術館",name:"彫刻の森美術館",budget:"2000円〜",budgetNum:2000,area:"神奈川",areaRaw:"神奈川（箱根）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"美術館",name:"ガラスの森美術館",budget:"2000円〜",budgetNum:2000,area:"神奈川",areaRaw:"神奈川（箱根）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"博物館",name:"江戸東京博物館",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京（両国）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"博物館",name:"国立科学博物館",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京（上野）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"博物館",name:"未来科学館",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京（お台場）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"美術館",name:"那須ステンドグラス美術館",budget:"2000円〜",budgetNum:2000,area:"栃木",areaRaw:"栃木（那須）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},

  // ── ミュージアム・展示施設 / 水族館 ──
  {category:"ミュージアム・展示施設",subCategory:"水族館",name:"葛西臨海公園水族館",budget:"700円〜",budgetNum:700,area:"東京",areaRaw:"東京（葛西）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"水族館",name:"かつうら海中公園",budget:"1000円〜",budgetNum:1000,area:"千葉",areaRaw:"千葉（勝浦）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},

  // ── ミュージアム・展示施設 / 展望台 ──
  {category:"ミュージアム・展示施設",subCategory:"展望台",name:"大観山展望台",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（箱根）",time:"昼",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"ミュージアム・展示施設",subCategory:"展望台",name:"東京都庁展望室",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（新宿）",time:"夕方",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"ミュージアム・展示施設",subCategory:"展望台",name:"SHIBUYA SKY",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（渋谷）",time:"夕方",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"ミュージアム・展示施設",subCategory:"展望台",name:"展望レストハウスクリスタルビュー",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（葛西）",time:"夕方",indoor:"屋内",season:"通年",duration:"1〜3時間"},

  // ── ミュージアム・展示施設 / その他 ──
  {category:"食べ歩き・散策",subCategory:"",name:"大谷グランドセンター",budget:"500円〜",budgetNum:500,area:"栃木",areaRaw:"栃木（宇都宮）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"その他",name:"市谷の社 本と活字館",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（市谷）",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"ミュージアム・展示施設",subCategory:"その他",name:"赤レンガ倉庫",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（横浜）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"その他",name:"ロックハート城",budget:"1000円〜",budgetNum:1000,area:"群馬",areaRaw:"群馬（高山村）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"テーマパーク",subCategory:"",name:"ポケパークカントー",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},

  // ── テーマパーク ──
  {category:"テーマパーク",subCategory:"",name:"TOKYO DREAM PARK",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"東映太秦映画村",budget:"2000円〜",budgetNum:2000,area:"その他",areaRaw:"京都（太秦）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"サウナ",name:"那須ユートピア",budget:"2000円〜",budgetNum:2000,area:"栃木",areaRaw:"栃木（那須）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"牧場",name:"NASU FARM VILLAGE",budget:"1000円〜",budgetNum:1000,area:"栃木",areaRaw:"栃木（那須）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"ミュージアム・展示施設",subCategory:"美術館",name:"ワンダリア横浜",budget:"3000円〜",budgetNum:3000,area:"神奈川",areaRaw:"神奈川（横浜）",time:"昼",indoor:"屋内",season:"通年",duration:"半日〜1日"},

  // ── アウトドア / 公園 ──
  {category:"アウトドア",subCategory:"公園",name:"上野恩賜公園",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（上野）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"公園",name:"六義園",budget:"500円〜",budgetNum:500,area:"東京",areaRaw:"東京（駒込）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"公園",name:"千鳥ヶ淵",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（千代田）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"公園",name:"井の頭恩賜公園",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（吉祥寺）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"公園",name:"宮ヶ瀬湖畔園地",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（愛川）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"公園",name:"FEEL THE GARDEN",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"公園",name:"座間のひまわり畑",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（座間）",time:"昼",indoor:"屋外",season:"夏",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"公園",name:"KITTE丸の内屋上庭園",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（丸の内）",time:"昼",indoor:"屋外",season:"通年",duration:"1〜3時間"},

  // ── アウトドア / 神社・史跡 ──
  {category:"アウトドア",subCategory:"神社・史跡",name:"靖国神社",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（九段下）",time:"昼",indoor:"屋外",season:"春",duration:"1〜3時間"},
  {category:"アウトドア",subCategory:"神社・史跡",name:"豪徳寺",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（世田谷）",time:"昼",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"アウトドア",subCategory:"神社・史跡",name:"鶴岡八幡宮",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（鎌倉）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"神社・史跡",name:"箱根神社",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（箱根）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"神社・史跡",name:"鎌倉大仏",budget:"500円〜",budgetNum:500,area:"神奈川",areaRaw:"神奈川（鎌倉）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"神社・史跡",name:"筑波山",budget:"1000円〜",budgetNum:1000,area:"茨城",areaRaw:"茨城（つくば）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"神社・史跡",name:"八ッ場あがつま湖・吾妻峡",budget:"0円",budgetNum:0,area:"群馬",areaRaw:"群馬（長野原）",time:"昼",indoor:"屋外",season:"秋",duration:"2〜4時間"},

  // ── アウトドア / 海 ──
  {category:"アウトドア",subCategory:"海",name:"七里ヶ浜",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（鎌倉）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"片瀬東浜海水浴場",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（藤沢）",time:"昼",indoor:"屋外",season:"夏",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"江ノ島岩屋",budget:"500円〜",budgetNum:500,area:"神奈川",areaRaw:"神奈川（江ノ島）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"三浦海岸",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（三浦）",time:"昼",indoor:"屋外",season:"夏",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"真名瀬海岸",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（葉山）",time:"昼",indoor:"屋外",season:"夏",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"逗子海水浴場",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（逗子）",time:"昼",indoor:"屋外",season:"夏",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"三笠公園",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（横須賀）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"三崎港",budget:"1000円〜",budgetNum:1000,area:"神奈川",areaRaw:"神奈川（三浦）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"真鶴岬",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（真鶴）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"逢島",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（真鶴）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"原岡桟橋",budget:"0円",budgetNum:0,area:"千葉",areaRaw:"千葉（南房総）",time:"夕方",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"アウトドア",subCategory:"海",name:"葛西渚橋",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（葛西）",time:"夕方",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"アウトドア",subCategory:"海",name:"大桟橋",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（横浜）",time:"夕方",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"アウトドア",subCategory:"海",name:"山下公園",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（横浜）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"小町通り",budget:"1000円〜",budgetNum:1000,area:"神奈川",areaRaw:"神奈川（鎌倉）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",name:"ひよどり坂",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（鎌倉）",time:"昼",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"アウトドア",subCategory:"海",name:"万国橋",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（横浜）",time:"夕方",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"アウトドア",subCategory:"海",name:"川崎工場夜景",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（川崎）",time:"夜",indoor:"屋外",season:"通年",duration:"2〜4時間"},

  // ── アウトドア / 高原・湖 ──
  {category:"アウトドア",subCategory:"高原",name:"大涌谷",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（箱根）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"高原",name:"芦ノ湖",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（箱根）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"高原",name:"相模湖",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（相模原）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"高原",name:"宮ヶ瀬ダム",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（愛川）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"高原",name:"津久井湖",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（相模原）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},

  // ── アウトドア / 牧場 ──
  {category:"アウトドア",subCategory:"牧場",name:"マザー牧場",budget:"2000円〜",budgetNum:2000,area:"千葉",areaRaw:"千葉（富津）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"牧場",name:"吉祥寺プティット村",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京（吉祥寺）",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"アウトドア",subCategory:"牧場",name:"MORI MORI",budget:"1000円〜",budgetNum:1000,area:"神奈川",areaRaw:"神奈川（横浜）",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},

  // ── リラクゼーション / 温泉 ──
  {category:"リラクゼーション",subCategory:"温泉",name:"箱根湯本",budget:"3000円〜",budgetNum:3000,area:"神奈川",areaRaw:"神奈川（箱根）",time:"いつでも",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"温泉",name:"湯河原温泉",budget:"3000円〜",budgetNum:3000,area:"神奈川",areaRaw:"神奈川（湯河原）",time:"いつでも",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"温泉",name:"飯山温泉郷",budget:"2000円〜",budgetNum:2000,area:"神奈川",areaRaw:"神奈川（厚木）",time:"いつでも",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"温泉",name:"七沢温泉郷",budget:"2000円〜",budgetNum:2000,area:"神奈川",areaRaw:"神奈川（厚木）",time:"いつでも",indoor:"屋内",season:"通年",duration:"半日〜1日"},

  // ── 食べ歩き・散策 / 神奈川エリア ──
  {category:"食べ歩き・散策",subCategory:"神奈川エリア",name:"ソレイユの丘",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（横須賀）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"食べ歩き・散策",subCategory:"神奈川エリア",name:"BASEGATE横浜関内",budget:"2000円〜",budgetNum:2000,area:"神奈川",areaRaw:"神奈川（横浜）",time:"夕方",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"神奈川エリア",name:"小田原城",budget:"500円〜",budgetNum:500,area:"神奈川",areaRaw:"神奈川（小田原）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"神奈川エリア",name:"CHEKMATE C.C.",budget:"1000円〜",budgetNum:1000,area:"神奈川",areaRaw:"神奈川（横浜）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},

  // ── エンタメ ──
  {category:"エンタメ",subCategory:"",name:"ダイヤと花の大観覧車",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京（葛西）",time:"夕方",indoor:"屋外",season:"通年",duration:"1〜3時間"},


  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 期間限定イベント（開催期間を管理）
  // ★ 追加・更新するときはstartDate/endDateを変更してください
  // 形式: "MM-DD"（例: "04-01" = 4月1日）
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"期間限定イベント",subCategory:"",name:"上野恩賜公園のお花見",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（上野）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"03-15",endDate:"04-20"},
  {category:"期間限定イベント",subCategory:"",name:"千鳥ヶ淵ライトアップ",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（千代田）",time:"夜",indoor:"屋外",season:"春",duration:"1〜3時間",startDate:"03-20",endDate:"04-10"},
  {category:"期間限定イベント",subCategory:"",name:"新宿御苑の桜",budget:"500円〜",budgetNum:500,area:"東京",areaRaw:"東京（新宿）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"03-15",endDate:"04-20"},
  {category:"期間限定イベント",subCategory:"",name:"国営ひたち海浜公園ネモフィラ",budget:"500円〜",budgetNum:500,area:"茨城",areaRaw:"茨城（ひたちなか）",time:"昼",indoor:"屋外",season:"春",duration:"半日〜1日",startDate:"04-15",endDate:"05-10"},
  {category:"期間限定イベント",subCategory:"",name:"あしかがフラワーパーク藤まつり",budget:"1000円〜",budgetNum:1000,area:"栃木",areaRaw:"栃木（足利）",time:"昼",indoor:"屋外",season:"春",duration:"半日〜1日",startDate:"04-10",endDate:"05-20"},


  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 期間限定イベント
  // startDate/endDate: "MM-DD" 形式
  // subCategory: 花見 / いちご狩り / 展示 / アクティビティ
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // ── 花見 ──
 
  {category:"期間限定イベント",subCategory:"",name:"六義園しだれ桜ライトアップ",budget:"500円〜",budgetNum:500,area:"東京",areaRaw:"東京（駒込）",time:"夜",indoor:"屋外",season:"春",duration:"1〜3時間",startDate:"03-18",endDate:"04-07"},
  {category:"期間限定イベント",subCategory:"",name:"吾妻山公園の菜の花と富士山",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（二宮）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"01-20",endDate:"02-20"},
  {category:"期間限定イベント",subCategory:"",name:"小田原城の桜",budget:"500円〜",budgetNum:500,area:"神奈川",areaRaw:"神奈川（小田原）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"03-20",endDate:"04-15"},

  // ── いちご狩り ──

  // ── 展示 ──
  
  {category:"期間限定イベント",subCategory:"展示",name:"座間のひまわり畑",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（座間）",time:"昼",indoor:"屋外",season:"夏",duration:"2〜4時間",startDate:"07-20",endDate:"08-20"},
  {category:"期間限定イベント",subCategory:"展示",name:"花貫渓谷の紅葉",budget:"0円",budgetNum:0,area:"茨城",areaRaw:"茨城（高萩）",time:"昼",indoor:"屋外",season:"秋",duration:"2〜4時間",startDate:"11-01",endDate:"11-30"},
  {category:"期間限定イベント",subCategory:"展示",name:"イルミネーション（よみうりランド）",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（よみうりランド）",time:"夜",indoor:"屋外",season:"冬",duration:"2〜4時間",startDate:"11-01",endDate:"02-28"},
  {category:"期間限定イベント",subCategory:"展示",name:"三十槌の氷柱",budget:"0円",budgetNum:0,area:"埼玉",areaRaw:"埼玉（秩父）",time:"昼",indoor:"屋外",season:"冬",duration:"2〜4時間",startDate:"01-10",endDate:"02-20"},

  // ── アクティビティ ──
  {category:"期間限定イベント",subCategory:"アクティビティ",name:"花火大会",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京都内近郊",time:"夜",indoor:"屋外",season:"夏",duration:"2〜4時間",startDate:"07-01",endDate:"08-31"},
  {category:"期間限定イベント",subCategory:"アクティビティ",name:"お祭り・縁日",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京都内近郊",time:"夜",indoor:"屋外",season:"夏",duration:"2〜4時間",startDate:"07-01",endDate:"08-31"},
  {category:"期間限定イベント",subCategory:"アクティビティ",name:"プール・海水浴",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京都内近郊",time:"昼",indoor:"屋外",season:"夏",duration:"半日〜1日",startDate:"07-01",endDate:"08-31"},
  {category:"期間限定イベント",subCategory:"アクティビティ",name:"スケート（冬季）",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋外",season:"冬",duration:"2〜4時間",startDate:"11-01",endDate:"02-28"},

  {category:"期間限定イベント",subCategory:"",name:"SORAYAMA 光・透明・反射-TOKYO-",budget:"2500円〜",budgetNum:2500,area:"東京",areaRaw:"東京（京橋）",time:"昼",indoor:"屋内",season:"春",duration:"2〜4時間",startDate:"03-14",endDate:"05-31"},
  {category:"期間限定イベント",subCategory:"",name:"ピクサーの世界展",budget:"4000円〜",budgetNum:4000,area:"東京",areaRaw:"東京（豊洲）",time:"昼",indoor:"屋内",season:"春",duration:"2〜4時間",startDate:"03-20",endDate:"10-12"},
  {category:"期間限定イベント",subCategory:"",name:"逗子海岸映画祭",budget:"3000円〜",budgetNum:3000,area:"神奈川",areaRaw:"神奈川（逗子）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-26",endDate:"05-06"},
  {category:"期間限定イベント",subCategory:"",name:"アイスクリーム万博　あいぱくPremium TOKYO 2026",budget:"600円〜",budgetNum:600,area:"東京",areaRaw:"東京（新宿）",time:"昼",indoor:"屋内",season:"春",duration:"2〜4時間",startDate:"04-24",endDate:"05-06"},
  {category:"期間限定イベント",subCategory:"",name:"台湾祭 in東京スカイツリータウン2026",budget:"0円〜",budgetNum:0,area:"東京",areaRaw:"東京（押上）",time:"夜",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-04",endDate:"05-31"},


  // ── 新規追加：2026年4月〜5月開催中イベント ──

  // 【花見・花】
  {category:"期間限定イベント",subCategory:"花見",name:"亀戸天神社 藤まつり",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（亀戸）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-04",endDate:"05-06"},
  {category:"期間限定イベント",subCategory:"花見",name:"ガーデンネックレス横浜2026",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（横浜みなとみらい）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"03-19",endDate:"06-14"},
  {category:"期間限定イベント",subCategory:"花見",name:"練馬区立四季の香ローズガーデン バラ祭り",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（練馬）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"05-01",endDate:"06-07"},
  {category:"期間限定イベント",subCategory:"花見",name:"館林つつじまつり",budget:"0円",budgetNum:0,area:"群馬",areaRaw:"群馬（館林）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"05-06"},
  {category:"期間限定イベント",subCategory:"花見",name:"文京つつじまつり",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（文京区）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"04-30"},
  {category:"期間限定イベント",subCategory:"花見",name:"こもれび森のイバライドのネモフィラ",budget:"500円〜",budgetNum:500,area:"茨城",areaRaw:"茨城（石岡）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"03-01",endDate:"05-31"},
  {category:"期間限定イベント",subCategory:"花見",name:"鹿沼ルピナスまつり",budget:"500円〜",budgetNum:500,area:"栃木",areaRaw:"栃木（鹿沼）",time:"昼",indoor:"屋外",season:"春",duration:"半日〜1日",startDate:"04-18",endDate:"05-06"},
  {category:"期間限定イベント",subCategory:"花見",name:"土浦桜まつり",budget:"0円",budgetNum:0,area:"茨城",areaRaw:"茨城（土浦）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"03-20",endDate:"04-12"},
  {category:"期間限定イベント",subCategory:"花見",name:"秦野桜まつり",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（秦野）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"03-20",endDate:"04-12"},

 

 
  {category:"期間限定イベント",subCategory:"展示",name:"東京タワー シティライトファンタジア 春",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京（東京タワー）",time:"夜",indoor:"屋内",season:"春",duration:"1〜3時間",startDate:"02-28",endDate:"05-06"}, 
  {category:"期間限定イベント",subCategory:"展示",name:"Space Travelium TeNQ 宇宙兄弟展",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（東京ドームシティ）",time:"昼",indoor:"屋内",season:"春",duration:"2〜4時間",startDate:"01-01",endDate:"04-19"},
  // 【アクティビティ】
  {category:"期間限定イベント",subCategory:"アクティビティ",name:"横浜みなとみらい野外シネマフェス",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（横浜みなとみらい）",time:"夜",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"05-06"},
  
  {category:"期間限定イベント",subCategory:"アクティビティ",name:"ネットフリックス渋谷リアル・イカゲーム",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京（渋谷）",time:"昼",indoor:"屋内",season:"春",duration:"2〜4時間",startDate:"01-16",endDate:"07-20"},
 

  // ── 2026年4月 新規追加イベント ──
  {category:"期間限定イベント",subCategory:"花見",name:"昭和記念公園 チューリップフェス",budget:"500円〜",budgetNum:500,area:"東京",areaRaw:"東京（立川）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-10",endDate:"04-30"},
  {category:"期間限定イベント",subCategory:"花見",name:"亀戸天神 藤まつり",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（江東区）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-15",endDate:"05-06"},
  {category:"期間限定イベント",subCategory:"展示",name:"デザインあ展",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（六本木）",time:"昼",indoor:"屋内",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"06-30"},
  {category:"期間限定イベント",subCategory:"展示",name:"ジブリパークとジブリ展",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"06-30"},
  {category:"期間限定イベント",subCategory:"アクティビティ",name:"オクトーバーフェスト",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（日比谷）",time:"夕方",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-24",endDate:"05-06"},
  {category:"期間限定イベント",subCategory:"花見",name:"長井海の手公園 ネモフィラ",budget:"500円〜",budgetNum:500,area:"神奈川",areaRaw:"神奈川（横須賀）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"04-30"},
  {category:"期間限定イベント",subCategory:"花見",name:"相模原麻溝公園 花フェス",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（相模原）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"04-30"},
  {category:"期間限定イベント",subCategory:"展示",name:"鎌倉文学館 春展示",budget:"500円〜",budgetNum:500,area:"神奈川",areaRaw:"神奈川（鎌倉）",time:"昼",indoor:"屋内",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"04-30"},
  {category:"期間限定イベント",subCategory:"アクティビティ",name:"湘南クラフトビールフェス",budget:"2000円〜",budgetNum:2000,area:"神奈川",areaRaw:"神奈川（藤沢）",time:"夕方",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"04-30"},
  {category:"期間限定イベント",subCategory:"花見",name:"ふなばしアンデルセン公園 花イベント",budget:"1000円〜",budgetNum:1000,area:"千葉",areaRaw:"千葉（船橋）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"04-30"},
  {category:"期間限定イベント",subCategory:"花見",name:"房総フラワーライン",budget:"0円",budgetNum:0,area:"千葉",areaRaw:"千葉（南房総）",time:"昼",indoor:"屋外",season:"春",duration:"半日〜1日",startDate:"04-01",endDate:"04-30"},
  {category:"期間限定イベント",subCategory:"アクティビティ",name:"成田山表参道 春まつり",budget:"500円〜",budgetNum:500,area:"千葉",areaRaw:"千葉（成田）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"04-30"},
  {category:"期間限定イベント",subCategory:"アクティビティ",name:"木更津アウトレット フードフェス",budget:"1000円〜",budgetNum:1000,area:"千葉",areaRaw:"千葉（木更津）",time:"昼",indoor:"屋外",season:"春",duration:"半日〜1日",startDate:"04-01",endDate:"04-30"},
  {category:"期間限定イベント",subCategory:"花見",name:"国営武蔵丘陵森林公園 ポピー",budget:"500円〜",budgetNum:500,area:"埼玉",areaRaw:"埼玉（滑川町）",time:"昼",indoor:"屋外",season:"春",duration:"半日〜1日",startDate:"04-20",endDate:"05-20"},
  {category:"期間限定イベント",subCategory:"花見",name:"羊山公園 芝桜",budget:"500円〜",budgetNum:500,area:"埼玉",areaRaw:"埼玉（秩父）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-15",endDate:"05-06"},
  {category:"期間限定イベント",subCategory:"アクティビティ",name:"長瀞ライン下り 春シーズン",budget:"2000円〜",budgetNum:2000,area:"埼玉",areaRaw:"埼玉（長瀞）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"06-30"},
  {category:"期間限定イベント",subCategory:"アクティビティ",name:"川越 春グルメ祭り",budget:"1000円〜",budgetNum:1000,area:"埼玉",areaRaw:"埼玉（川越）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"04-30"},
  {category:"期間限定イベント",subCategory:"花見",name:"フラワーパーク春イルミ",budget:"1000円〜",budgetNum:1000,area:"茨城",areaRaw:"茨城（石岡）",time:"夜",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"04-30"},
  {category:"期間限定イベント",subCategory:"アクティビティ",name:"鹿島神宮 春イベント",budget:"0円",budgetNum:0,area:"茨城",areaRaw:"茨城（鹿嶋）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"04-30"},
  {category:"期間限定イベント",subCategory:"アクティビティ",name:"水戸グルメフェス",budget:"1000円〜",budgetNum:1000,area:"茨城",areaRaw:"茨城（水戸）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"04-30"},
  {category:"期間限定イベント",subCategory:"花見",name:"八幡山公園 桜＆花イベント",budget:"0円",budgetNum:0,area:"栃木",areaRaw:"栃木（宇都宮）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"04-30"},
  {category:"期間限定イベント",subCategory:"アクティビティ",name:"宇都宮餃子祭り",budget:"1000円〜",budgetNum:1000,area:"栃木",areaRaw:"栃木（宇都宮）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"04-30"},
  {category:"期間限定イベント",subCategory:"花見",name:"敷島公園バラ園",budget:"0円",budgetNum:0,area:"群馬",areaRaw:"群馬（前橋）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-20",endDate:"05-20"},
  {category:"期間限定イベント",subCategory:"アクティビティ",name:"高崎フードフェス",budget:"1000円〜",budgetNum:1000,area:"群馬",areaRaw:"群馬（高崎）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"04-30"},
  {category:"期間限定イベント",subCategory:"展示",name:"平成恋愛展",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（渋谷）",time:"昼",indoor:"屋内",season:"春",duration:"2〜4時間",startDate:"04-07",endDate:"06-28"},

{category:"期間限定イベント",subCategory:"花見",name:"亀戸天神社 藤まつり",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（亀戸）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-04",endDate:"05-06"},
  {category:"期間限定イベント",subCategory:"花見",name:"ガーデンネックレス横浜2026",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（横浜みなとみらい）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"03-19",endDate:"06-14"},
  {category:"期間限定イベント",subCategory:"花見",name:"練馬区立四季の香ローズガーデン バラ祭り",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（練馬）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"05-01",endDate:"06-07"},
  {category:"期間限定イベント",subCategory:"花見",name:"館林つつじまつり",budget:"0円",budgetNum:0,area:"群馬",areaRaw:"群馬（館林）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"05-06"},
  {category:"期間限定イベント",subCategory:"花見",name:"文京つつじまつり",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（文京区）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"04-01",endDate:"04-30"},
  {category:"期間限定イベント",subCategory:"花見",name:"こもれび森のイバライドのネモフィラ",budget:"500円〜",budgetNum:500,area:"茨城",areaRaw:"茨城（石岡）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"03-01",endDate:"05-31"},
  {category:"期間限定イベント",subCategory:"花見",name:"鹿沼ルピナスまつり",budget:"500円〜",budgetNum:500,area:"栃木",areaRaw:"栃木（鹿沼）",time:"昼",indoor:"屋外",season:"春",duration:"半日〜1日",startDate:"04-18",endDate:"05-06"},
  {category:"期間限定イベント",subCategory:"花見",name:"土浦桜まつり",budget:"0円",budgetNum:0,area:"茨城",areaRaw:"茨城（土浦）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"03-20",endDate:"04-12"},
  {category:"期間限定イベント",subCategory:"花見",name:"秦野桜まつり",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（秦野）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間",startDate:"03-20",endDate:"04-12"},
 
 
 
 
  
 
 
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 追加データ（各カテゴリ拡充）
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 
  // ── スポーツ・アクティビティ追加 ──
  {category:"スポーツ・アクティビティ",subCategory:"屋内スポーツ",name:"卓球",budget:"1500円〜",budgetNum:1500,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋内スポーツ",name:"アーチェリー",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋内スポーツ",name:"ゴルフ練習場",budget:"1500円〜",budgetNum:1500,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋内スポーツ",name:"ミニゴルフ（パターゴルフ）",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"スタンドアップパドル",budget:"5000円〜",budgetNum:5000,area:"神奈川",areaRaw:"神奈川（鎌倉・逗子）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"シーカヤック",budget:"5000円〜",budgetNum:5000,area:"神奈川",areaRaw:"神奈川（三浦）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"テニス",budget:"500円〜",budgetNum:500,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"バスケットボール",budget:"0円",budgetNum:0,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"ロードバイクレンタル",budget:"3000円〜",budgetNum:3000,area:"神奈川",areaRaw:"神奈川（鎌倉）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
    {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"釣り堀",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"ハイキング",budget:"1000円〜",budgetNum:1000,area:"神奈川",areaRaw:"神奈川（丹沢）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"ジップライン",budget:"3000円〜",budgetNum:3000,area:"埼玉",areaRaw:"埼玉（秩父）",time:"昼",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋内スポーツ",name:"レーザータグ",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"スポーツ・アクティビティ",subCategory:"施設",name:"インドアサーフィン",budget:"4000円〜",budgetNum:4000,area:"千葉",areaRaw:"千葉（千葉市）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"カヌー体験",budget:"3000円〜",budgetNum:3000,area:"埼玉",areaRaw:"埼玉（長瀞）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋内スポーツ",name:"バッティングセンター",budget:"500円〜",budgetNum:500,area:"東京",araRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"クロスカントリー",budget:"3000円〜",budgetNum:3000,area:"茨城",areaRaw:"茨城（つくば）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"スケートボード",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋内スポーツ",name:"クライミングジム",budget:"2500円〜",budgetNum:2500,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"カイトサーフィン体験",budget:"8000円〜",budgetNum:8000,area:"千葉",areaRaw:"千葉（九十九里）",time:"昼",indoor:"屋外",season:"春",duration:"半日〜1日"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"トレイルランニング",budget:"0円",budgetNum:0,area:"東京",areaRaw:"東京（高尾・奥多摩）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋内スポーツ",name:"ダンスレッスン体験",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
 
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"サップヨガ体験",budget:"5000円〜",budgetNum:5000,area:"神奈川",areaRaw:"神奈川（湘南）",time:"昼",indoor:"屋外",season:"春",duration:"1〜3時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"ウェイクボード体験",budget:"5000円〜",budgetNum:5000,area:"埼玉",areaRaw:"埼玉（彩湖）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
 
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"熱気球体験",budget:"8000円〜",budgetNum:8000,area:"栃木",areaRaw:"栃木（那須）",time:"昼",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"スキューバダイビング体験",budget:"8000円〜",budgetNum:8000,area:"神奈川",areaRaw:"神奈川（真鶴）",time:"昼",indoor:"屋外",season:"春",duration:"半日〜1日"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"ラフティング",budget:"5000円〜",budgetNum:5000,area:"群馬",areaRaw:"群馬（みなかみ）",time:"昼",indoor:"屋外",season:"春",duration:"半日〜1日"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"バンジージャンプ",budget:"10000円〜",budgetNum:10000,area:"群馬",areaRaw:"群馬（みなかみ）",time:"昼",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"スポーツ・アクティビティ",subCategory:"屋外スポーツ",name:"ホーストレッキング",budget:"6000円〜",budgetNum:6000,area:"栃木",areaRaw:"栃木（那須）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
 
  // ── エンタメ追加 ──
  {category:"エンタメ",subCategory:"",name:"お笑いライブ",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京都内",time:"夕方",indoor:"屋内",season:"通年",duration:"2〜4時間"},
 
  {category:"エンタメ",subCategory:"",name:"マジックショー",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京都内",time:"夕方",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"エンタメ",subCategory:"",name:"ナイトクルーズ",budget:"5000円〜",budgetNum:5000,area:"東京",areaRaw:"東京（お台場）",time:"夜",indoor:"屋外",season:"通年",duration:"2〜4時間"},
 
  {category:"エンタメ",subCategory:"",name:"観劇",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京都内",time:"夕方",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"エンタメ",subCategory:"",name:"花火工場見学",budget:"2000円〜",budgetNum:2000,area:"埼玉",areaRaw:"埼玉（川口）",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"エンタメ",subCategory:"",name:"占い館",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"エンタメ",subCategory:"",name:"ミュージカル鑑賞",budget:"6000円〜",budgetNum:6000,area:"東京",areaRaw:"東京都内",time:"夕方",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"エンタメ",subCategory:"",name:"夜景ドライブ",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"全国",time:"夜",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"エンタメ",subCategory:"",name:"トランポリンパーク",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"ミュージアム・展示施設",subCategory:"博物館",name:"鉄道博物館",budget:"1500円〜",budgetNum:1500,area:"埼玉",areaRaw:"埼玉（大宮）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"エンタメ",subCategory:"",name:"クラフトビール醸造所ツアー",budget:"2000円〜",budgetNum:2000,area:"神奈川",areaRaw:"神奈川（横浜）",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"エンタメ",subCategory:"",name:"天文台見学",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京（三鷹）",time:"夜",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"エンタメ",subCategory:"",name:"ジャズクラブ",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京（新宿・銀座）",time:"夜",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"エンタメ",subCategory:"",name:"アーケードゲームラウンジ",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"全国",time:"夕方",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"エンタメ",subCategory:"",name:"ホラーハウス（お化け屋敷）",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"全国",time:"夕方",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"エンタメ",subCategory:"",name:"ロールプレイカフェ（",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京（秋葉原）",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"エンタメ",subCategory:"",name:"屋形船",budget:"8000円〜",budgetNum:8000,area:"東京",areaRaw:"東京（隅田川）",time:"夜",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"ドラムサークル体験",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"体験・ものづくり",subCategory:"",name:"バーテンダー体験",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京都内",time:"夕方",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"エンタメ",subCategory:"",name:"フォトスタジオ撮影",budget:"5000円〜",budgetNum:5000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"エンタメ",subCategory:"",name:"インスタントカメラ散歩",budget:"1500円〜",budgetNum:1500,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"エンタメ",subCategory:"",name:"ゴーカート",budget:"5000円〜",budgetNum:5000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋外",season:"通年",duration:"1〜3時間"},
 
  // ── お家デート追加 ──
  {category:"お家デート",subCategory:"",name:"オリジナルカクテルを作る",budget:"1000円〜",budgetNum:1000,area:"おうち",areaRaw:"全国",time:"夜",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"バルーンアート体験",budget:"500円〜",budgetNum:500,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"ミニ水族館を作る",budget:"3000円〜",budgetNum:3000,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"お家デート",subCategory:"",name:"プロジェクターで映画鑑賞",budget:"2000円〜",budgetNum:2000,area:"おうち",areaRaw:"全国",time:"夜",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"お家デート",subCategory:"",name:"ワインテイスティング",budget:"2000円〜",budgetNum:2000,area:"おうち",areaRaw:"全国",time:"夜",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"お家デート",subCategory:"",name:"縁側でプチ花見",budget:"1000円〜",budgetNum:1000,area:"おうち",areaRaw:"全国",time:"昼",indoor:"屋外",season:"春",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"アロマキャンドル作り）",budget:"1500円〜",budgetNum:1500,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"手作りすごろく・オリジナルゲーム",budget:"300円〜",budgetNum:300,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"星空観察",budget:"0円",budgetNum:0,area:"おうち",areaRaw:"全国",time:"夜",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"おうちスパ",budget:"1000円〜",budgetNum:1000,area:"おうち",areaRaw:"全国",time:"夜",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"フォトブック作り",budget:"1000円〜",budgetNum:1000,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"お互いの好きな音楽をシェアする夜",budget:"0円",budgetNum:0,area:"おうち",areaRaw:"全国",time:"夜",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"おうちキャンプ",budget:"2000円〜",budgetNum:2000,area:"おうち",areaRaw:"全国",time:"夜",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"お家デート",subCategory:"",name:"ミニパティシエ",budget:"1000円〜",budgetNum:1000,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"語学学習",budget:"0円",budgetNum:0,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"手相・タロット占い",budget:"500円〜",budgetNum:500,area:"おうち",areaRaw:"全国",time:"夜",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"ミニフォトスタジオ",budget:"1000円〜",budgetNum:1000,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"謎解きキット",budget:"2000円〜",budgetNum:2000,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"お家デート",subCategory:"",name:"ガーデニング・植物育て",budget:"1000円〜",budgetNum:1000,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"ラテアート",budget:"500円〜",budgetNum:500,area:"おうち",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"パジャマパーティ",budget:"1000円〜",budgetNum:1000,area:"おうち",areaRaw:"全国",time:"夜",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"お家デート",subCategory:"",name:"DIYリメイク",budget:"1000円〜",budgetNum:1000,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"お家デート",subCategory:"",name:"手打ちパスタ作り",budget:"1000円〜",budgetNum:1000,area:"おうち",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"ミニコンサート",budget:"0円",budgetNum:0,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"ジグソーパズル",budget:"1000円〜",budgetNum:1000,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"お家デート",subCategory:"",name:"お取り寄せグルメ食べ比べ",budget:"3000円〜",budgetNum:3000,area:"おうち",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"ハーブティーブレンド体験",budget:"1000円〜",budgetNum:1000,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"二人の将来計画ノート作り",budget:"500円〜",budgetNum:500,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"写真プリント＆コラージュ",budget:"500円〜",budgetNum:500,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"サウナ風自宅スパナイト",budget:"500円〜",budgetNum:500,area:"おうち",areaRaw:"全国",time:"夜",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"お家デート",subCategory:"",name:"絵本づくり",budget:"500円〜",budgetNum:500,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"お家デート",subCategory:"",name:"バーチャル旅行（Google Earthで世界一周）",budget:"0円",budgetNum:0,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"お家デート",subCategory:"",name:"ミニ観葉植物テラリウム作り",budget:"2000円〜",budgetNum:2000,area:"おうち",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"2〜4時間"},
 
  // ── 体験・ものづくり追加 ──
  {category:"体験・ものづくり",subCategory:"",name:"吹きガラス体験",budget:"4000円〜",budgetNum:4000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"体験・ものづくり",subCategory:"",name:"友禅染め体験",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"苔テラリウム作り",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"体験・ものづくり",subCategory:"",name:"レザークラフト",budget:"5000円〜",budgetNum:5000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"ガラスフュージング体験",budget:"4000円〜",budgetNum:4000,area:"神奈川",areaRaw:"神奈川（横浜）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"手作りみそ体験",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"藍染め体験",budget:"3000円〜",budgetNum:3000,area:"埼玉",areaRaw:"埼玉（川越）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"シルクスクリーンプリント",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"フラワーアレンジメント",budget:"4000円〜",budgetNum:4000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"体験・ものづくり",subCategory:"",name:"万年筆インク調合",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京（銀座）",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"体験・ものづくり",subCategory:"",name:"木工体験（カッティングボード作り）",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"バターチキンカレー料理教室",budget:"5000円〜",budgetNum:5000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"ドライフラワーリース作り",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"体験・ものづくり",subCategory:"",name:"押し花アート体験",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"体験・ものづくり",subCategory:"",name:"ハーバリウム作り",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"体験・ものづくり",subCategory:"",name:"マクラメアクセサリー作り",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"和菓子作り体験",budget:"4000円〜",budgetNum:4000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"巾着袋・風呂敷染め",budget:"3000円〜",budgetNum:3000,area:"栃木",areaRaw:"栃木（日光）",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"体験・ものづくり",subCategory:"",name:"ステンドグラス体験",budget:"4000円〜",budgetNum:4000,area:"栃木",areaRaw:"栃木（那須）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"クロッシェ体験",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"プリザーブドフラワー体験",budget:"4000円〜",budgetNum:4000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"体験・ものづくり",subCategory:"",name:"海で拾ったもので作るシーグラスアート",budget:"1000円〜",budgetNum:1000,area:"神奈川",areaRaw:"神奈川（湘南）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"スムージー・ジュースバー体験",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"体験・ものづくり",subCategory:"",name:"蜜蝋キャンドル作り",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"体験・ものづくり",subCategory:"",name:"書道体験（墨絵アート）",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"体験・ものづくり",subCategory:"",name:"ミニ盆栽作り",budget:"3000円〜",budgetNum:3000,area:"埼玉",areaRaw:"埼玉（さいたま）",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"体験・ものづくり",subCategory:"",name:"おにぎり職人体験",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"体験・ものづくり",subCategory:"",name:"デジタルイラスト体験",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"クレイアート",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"体験・ものづくり",subCategory:"",name:"版画体験",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
 
  // ── 食べ歩き・散策追加 ──
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"谷根千散策",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（谷中・根津・千駄木）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"下北沢散策",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（下北沢）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"清澄白河カフェ巡り",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（清澄白河）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"蔵前おしゃれ散策",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（蔵前）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"吉祥寺散策",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（吉祥寺）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"中目黒カフェ＆川沿い散歩",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（中目黒）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"原宿・表参道ショッピング",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京（原宿・表参道）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"築地場外市場",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（築地）",time:"昼",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"豊洲市場ツアー",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京（豊洲）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"お台場散策",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（お台場）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"神楽坂散策",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（神楽坂）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"東京エリア",name:"三軒茶屋カフェ巡り",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（三軒茶屋）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"神奈川エリア",name:"元町・山手散策",budget:"2000円〜",budgetNum:2000,area:"神奈川",areaRaw:"神奈川（横浜）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"神奈川エリア",name:"逗子海岸散策",budget:"1000円〜",budgetNum:1000,area:"神奈川",areaRaw:"神奈川（逗子）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"神奈川エリア",name:"小田原城下町散策",budget:"2000円〜",budgetNum:2000,area:"神奈川",areaRaw:"神奈川（小田原）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"神奈川エリア",name:"湘南・江ノ電沿線散歩",budget:"1500円〜",budgetNum:1500,area:"神奈川",areaRaw:"神奈川（藤沢〜鎌倉）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"食べ歩き・散策",subCategory:"神奈川エリア",name:"二宮・吾妻山麓散歩",budget:"500円〜",budgetNum:500,area:"神奈川",areaRaw:"神奈川（二宮）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"埼玉エリア",name:"大宮・一番街グルメ巡り",budget:"2000円〜",budgetNum:2000,area:"埼玉",areaRaw:"埼玉（大宮）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"埼玉エリア",name:"浦和・うなぎの名店巡り",budget:"4000円〜",budgetNum:4000,area:"埼玉",areaRaw:"埼玉（浦和）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"埼玉エリア",name:"長瀞・ライン下り後グルメ",budget:"2000円〜",budgetNum:2000,area:"埼玉",areaRaw:"埼玉（長瀞）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"千葉エリア",name:"成田山参道食べ歩き",budget:"2000円〜",budgetNum:2000,area:"千葉",areaRaw:"千葉（成田）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"千葉エリア",name:"佐原・小江戸散策",budget:"2000円〜",budgetNum:2000,area:"千葉",areaRaw:"千葉（香取・佐原）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"千葉エリア",name:"銚子・お魚市場食べ歩き",budget:"2000円〜",budgetNum:2000,area:"千葉",areaRaw:"千葉（銚子）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"食べ歩き・散策",subCategory:"千葉エリア",name:"木更津・三井アウトレット",budget:"2000円〜",budgetNum:2000,area:"千葉",areaRaw:"千葉（木更津）",time:"昼",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"食べ歩き・散策",subCategory:"栃木エリア",name:"日光・東照宮門前散策",budget:"2000円〜",budgetNum:2000,area:"栃木",areaRaw:"栃木（日光）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"食べ歩き・散策",subCategory:"栃木エリア",name:"那須高原カフェ巡り",budget:"2000円〜",budgetNum:2000,area:"栃木",areaRaw:"栃木（那須）",time:"昼",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"食べ歩き・散策",subCategory:"群馬エリア",name:"草津温泉街食べ歩き",budget:"3000円〜",budgetNum:3000,area:"群馬",areaRaw:"群馬（草津）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"食べ歩き・散策",subCategory:"群馬エリア",name:"伊香保温泉・石段街散策",budget:"2000円〜",budgetNum:2000,area:"群馬",areaRaw:"群馬（伊香保）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"食べ歩き・散策",subCategory:"茨城エリア",name:"水戸・偕楽園周辺散策",budget:"1000円〜",budgetNum:1000,area:"茨城",areaRaw:"茨城（水戸）",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"食べ歩き・散策",subCategory:"茨城エリア",name:"土浦・蓮田カフェ",budget:"1500円〜",budgetNum:1500,area:"茨城",areaRaw:"茨城（土浦）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
 
  // ── リラクゼーション追加 ──
  {category:"リラクゼーション",subCategory:"温泉",name:"草津温泉",budget:"5000円〜",budgetNum:5000,area:"群馬",areaRaw:"群馬（草津）",time:"いつでも",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"温泉",name:"那須温泉",budget:"5000円〜",budgetNum:5000,area:"栃木",areaRaw:"栃木（那須）",time:"いつでも",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"温泉",name:"秩父温泉",budget:"1000円〜",budgetNum:1000,area:"埼玉",areaRaw:"埼玉（秩父）",time:"いつでも",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"リラクゼーション",subCategory:"温泉",name:"横浜天然温泉",budget:"1500円〜",budgetNum:1500,area:"神奈川",areaRaw:"神奈川（横浜）",time:"いつでも",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"リラクゼーション",subCategory:"温泉",name:"鬼怒川温泉",budget:"8000円〜",budgetNum:8000,area:"栃木",areaRaw:"栃木（鬼怒川）",time:"いつでも",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"温泉",name:"熱海温泉",budget:"5000円〜",budgetNum:5000,area:"その他",areaRaw:"静岡（熱海）",time:"いつでも",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"温泉",name:"大磯温泉",budget:"2000円〜",budgetNum:2000,area:"神奈川",areaRaw:"神奈川（大磯）",time:"いつでも",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"リラクゼーション",subCategory:"サウナ",name:"ととのい",budget:"4000円〜",budgetNum:4000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"リラクゼーション",subCategory:"サウナ",name:"テントサウナ体験",budget:"8000円〜",budgetNum:8000,area:"群馬",areaRaw:"群馬（みなかみ）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"サウナ",name:"サウナ付きグランピング",budget:"15000円〜",budgetNum:15000,area:"栃木",areaRaw:"栃木（那須）",time:"いつでも",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"温泉複合施設",name:"ドーミーインデイユース",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"温泉複合施設",name:"東京天然温泉 古代の湯",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京（板橋）",time:"いつでも",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"リラクゼーション",subCategory:"温泉複合施設",name:"おふろの国",budget:"1500円〜",budgetNum:1500,area:"神奈川",areaRaw:"神奈川（横浜）",time:"いつでも",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"リラクゼーション",subCategory:"動物カフェ",name:"ふくろうカフェ",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"リラクゼーション",subCategory:"動物カフェ",name:"うさぎカフェ",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"リラクゼーション",subCategory:"動物カフェ",name:"爬虫類カフェ",budget:"1500円〜",budgetNum:1500,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"リラクゼーション",subCategory:"動物カフェ",name:"ハリネズミカフェ",budget:"1500円〜",budgetNum:1500,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"リラクゼーション",subCategory:"岩盤浴",name:"岩盤浴ラウンジ（カップル個室）",budget:"4000円〜",budgetNum:4000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"リラクゼーション",subCategory:"温泉",name:"日帰り温泉リゾート（千葉鴨川）",budget:"3000円〜",budgetNum:3000,area:"千葉",areaRaw:"千葉（鴨川）",time:"いつでも",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"温泉複合施設",name:"コミュニティスパ",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"東京都内",time:"夜",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"リラクゼーション",subCategory:"サウナ",name:"フィンランド式サウナ",budget:"10000円〜",budgetNum:10000,area:"その他",areaRaw:"山梨（山中湖）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"温泉",name:"月岡温泉",budget:"3000円〜",budgetNum:3000,area:"その他",areaRaw:"新潟（月岡）",time:"いつでも",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"動物カフェ",name:"モルモットカフェ",budget:"1500円〜",budgetNum:1500,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"リラクゼーション",subCategory:"岩盤浴",name:"漢方岩盤浴（薬草スチーム）",budget:"2500円〜",budgetNum:2500,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
 
  // ── テーマパーク追加 ──
  {category:"テーマパーク",subCategory:"",name:"東京ディズニーシー",budget:"10000円〜",budgetNum:10000,area:"千葉",areaRaw:"千葉（舞浜）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"ユニバーサル・スタジオ・ジャパン",budget:"10000円〜",budgetNum:10000,area:"その他",areaRaw:"大阪（此花区）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"富士急ハイランド",budget:"6000円〜",budgetNum:6000,area:"その他",areaRaw:"山梨（富士吉田）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"那須ハイランドパーク",budget:"4000円〜",budgetNum:4000,area:"栃木",areaRaw:"栃木（那須）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"西武園ゆうえんち",budget:"5000円〜",budgetNum:5000,area:"埼玉",areaRaw:"埼玉（所沢）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"東武ワールドスクウェア",budget:"3000円〜",budgetNum:3000,area:"栃木",areaRaw:"栃木（日光）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"テーマパーク",subCategory:"",name:"ハウステンボス",budget:"8000円〜",budgetNum:8000,area:"その他",areaRaw:"長崎（佐世保）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"レゴランド・ジャパン",budget:"6000円〜",budgetNum:6000,area:"その他",areaRaw:"愛知（名古屋）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"サンリオピューロランド",budget:"4000円〜",budgetNum:4000,area:"東京",areaRaw:"東京（多摩）",time:"昼",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"よこはまコスモワールド",budget:"3000円〜",budgetNum:3000,area:"神奈川",areaRaw:"神奈川（横浜）",time:"夕方",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"テーマパーク",subCategory:"",name:"東京サマーランド",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京（あきる野）",time:"昼",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"スペースワールド跡地",budget:"0円",budgetNum:0,area:"その他",areaRaw:"福岡（北九州）",time:"昼",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"テーマパーク",subCategory:"",name:"しまじろうパーク",budget:"2000円〜",budgetNum:2000,area:"神奈川",areaRaw:"神奈川（川崎）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"テーマパーク",subCategory:"",name:"鴨川シーワールド",budget:"3500円〜",budgetNum:3500,area:"千葉",areaRaw:"千葉（鴨川）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"牧場",name:"マザー牧場",budget:"2000円〜",budgetNum:2000,area:"千葉",areaRaw:"千葉（富津）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"牧場",name:"成田ゆめ牧場",budget:"1500円〜",budgetNum:1500,area:"千葉",areaRaw:"千葉（成田）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"テーマパーク",subCategory:"",name:"東京ジョイポリス",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京（お台場）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"テーマパーク",subCategory:"",name:"横浜八景島シーパラダイス",budget:"3500円〜",budgetNum:3500,area:"神奈川",areaRaw:"神奈川（横浜）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"スパリゾートハワイアンズ",budget:"5000円〜",budgetNum:5000,area:"その他",areaRaw:"福島（いわき）",time:"昼",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"ミュージアム・展示施設",subCategory:"博物館",name:"明治村",budget:"2000円〜",budgetNum:2000,area:"その他",areaRaw:"愛知（犬山）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"としまえん跡・Warner Bros. Studio",budget:"4000円〜",budgetNum:4000,area:"東京",areaRaw:"東京（練馬）",time:"昼",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"公園",name:"倉敷チボリ公園跡",budget:"0円",budgetNum:0,area:"その他",areaRaw:"岡山（倉敷）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"テーマパーク",subCategory:"",name:"三井グリーンランド",budget:"4000円〜",budgetNum:4000,area:"その他",areaRaw:"熊本（荒尾）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"鷲羽山ハイランド",budget:"3000円〜",budgetNum:3000,area:"その他",areaRaw:"岡山（倉敷）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"スペースナンバーワン",budget:"2000円〜",budgetNum:2000,area:"群馬",areaRaw:"群馬（伊勢崎）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"テーマパーク",subCategory:"",name:"モビリティリゾートもてぎ",budget:"3000円〜",budgetNum:3000,area:"栃木",areaRaw:"栃木（茂木）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"公園",name:"横浜ドリームランド跡・港の見える丘公園",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（横浜）",time:"昼",indoor:"屋外",season:"通年",duration:"1〜3時間"},
  {category:"テーマパーク",subCategory:"",name:"スカイシアター MBS",budget:"3000円〜",budgetNum:3000,area:"その他",areaRaw:"大阪（梅田）",time:"夕方",indoor:"屋内",season:"通年",duration:"2〜4時間"},
 
  // ── ミュージアム追加 ──
  {category:"ミュージアム・展示施設",subCategory:"美術館",name:"東京都現代美術館",budget:"1500円〜",budgetNum:1500,area:"東京",areaRaw:"東京（江東区）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"美術館",name:"原美術館ARC",budget:"1500円〜",budgetNum:1500,area:"群馬",areaRaw:"群馬（渋川）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"美術館",name:"神奈川県立近代美術館",budget:"500円〜",budgetNum:500,area:"神奈川",areaRaw:"神奈川（鎌倉）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"美術館",name:"DIC川村記念美術館",budget:"1500円〜",budgetNum:1500,area:"千葉",areaRaw:"千葉（佐倉）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"美術館",name:"埼玉県立近代美術館",budget:"500円〜",budgetNum:500,area:"埼玉",areaRaw:"埼玉（浦和）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"美術館",name:"横浜美術館",budget:"1000円〜",budgetNum:1000,area:"神奈川",areaRaw:"神奈川（横浜）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"博物館",name:"横浜ユーラシア文化館",budget:"200円〜",budgetNum:200,area:"神奈川",areaRaw:"神奈川（横浜）",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"ミュージアム・展示施設",subCategory:"博物館",name:"埼玉県立歴史と民俗の博物館",budget:"300円〜",budgetNum:300,area:"埼玉",areaRaw:"埼玉（大宮）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"水族館",name:"すみだ水族館",budget:"2000円〜",budgetNum:2000,area:"東京",areaRaw:"東京（押上）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"水族館",name:"マクセル アクアパーク品川",budget:"2300円〜",budgetNum:2300,area:"東京",areaRaw:"東京（品川）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"水族館",name:"横浜・八景島シーパラ水族館",budget:"2400円〜",budgetNum:2400,area:"神奈川",areaRaw:"神奈川（横浜）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"水族館",name:"鴨川シーワールド水族館",budget:"2800円〜",budgetNum:2800,area:"千葉",areaRaw:"千葉（鴨川）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"動物園",name:"多摩動物公園",budget:"600円〜",budgetNum:600,area:"東京",areaRaw:"東京（日野）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"ミュージアム・展示施設",subCategory:"動物園",name:"千葉市動物公園",budget:"700円〜",budgetNum:700,area:"千葉",areaRaw:"千葉（千葉市）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"動物園",name:"埼玉こども動物自然公園",budget:"700円〜",budgetNum:700,area:"埼玉",areaRaw:"埼玉（東松山）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"ミュージアム・展示施設",subCategory:"展望台",name:"横浜ランドマークタワー展望台",budget:"1000円〜",budgetNum:1000,area:"神奈川",areaRaw:"神奈川（横浜）",time:"夕方",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"ミュージアム・展示施設",subCategory:"展望台",name:"さいたまスカイ展望台",budget:"500円〜",budgetNum:500,area:"埼玉",areaRaw:"埼玉（さいたま）",time:"夕方",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"ミュージアム・展示施設",subCategory:"博物館",name:"川崎市市民ミュージアム",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（川崎）",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"ミュージアム・展示施設",subCategory:"プラネタリウム",name:"コニカミノルタ サイエンスドーム",budget:"500円〜",budgetNum:500,area:"東京",areaRaw:"東京（八王子）",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"ミュージアム・展示施設",subCategory:"プラネタリウム",name:"千葉市科学館プラネタリウム",budget:"600円〜",budgetNum:600,area:"千葉",areaRaw:"千葉（千葉市）",time:"昼",indoor:"屋内",season:"通年",duration:"1〜3時間"},
  {category:"ミュージアム・展示施設",subCategory:"美術館",name:"栃木県立美術館",budget:"300円〜",budgetNum:300,area:"栃木",areaRaw:"栃木（宇都宮）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"美術館",name:"群馬県立近代美術館",budget:"300円〜",budgetNum:300,area:"群馬",areaRaw:"群馬（高崎）",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"博物館",name:"国立歴史民俗博物館",budget:"600円〜",budgetNum:600,area:"千葉",areaRaw:"千葉（佐倉）",time:"昼",indoor:"屋内",season:"通年",duration:"半日〜1日"},
];
