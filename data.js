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
  {category:"プチ旅行",subCategory:"神奈川エリア",name:"箱根",              budget:"5000円〜",budgetNum:5000, area:"神奈川",areaRaw:"神奈川（箱根）",      time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"プチ旅行",subCategory:"神奈川エリア",name:"みさきまぐろきっぷ",budget:"4000円〜",budgetNum:4000, area:"神奈川",areaRaw:"神奈川（三浦半島）",  time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ⑥ リラクゼーション
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"リラクゼーション",subCategory:"温泉",             name:"箱根温泉",  budget:"5000円〜",budgetNum:5000, area:"神奈川",    areaRaw:"神奈川県（箱根）",    time:"いつでも",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"温泉複合施設",name:"スパジャポ",budget:"1000円〜",budgetNum:1000, area:"東京（東久留米市）",areaRaw:"全国",time:"いつでも",indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"サウナ",           name:"個室サウナ", budget:"3000円〜",budgetNum:3000, area:"東京",areaRaw:"全国",             time:"昼",      indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"岩盤浴",           name:"岩盤浴",     budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"全国",             time:"昼",      indoor:"屋内",season:"通年",duration:"半日〜1日"},
  {category:"リラクゼーション",subCategory:"動物カフェ",       name:"動物カフェ", budget:"3000円〜",budgetNum:3000, area:"東京",areaRaw:"全国",             time:"昼",      indoor:"屋内",season:"通年",duration:"1〜3時間"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ⑦ 季節限定イベント
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"季節限定イベント",subCategory:"春",name:"お花見",      budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"全国",       time:"昼",  indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"季節限定イベント",subCategory:"春",name:"いちご狩り",  budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"全国",   time:"昼",  indoor:"屋外",season:"春",duration:"2〜4時間"},
  {category:"季節限定イベント",subCategory:"夏",name:"お祭り",      budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"全国",   time:"夜",  indoor:"屋外",season:"夏",duration:"2〜4時間"},
  {category:"季節限定イベント",subCategory:"夏",name:"花火大会",    budget:"0円",     budgetNum:0,    area:"東京",areaRaw:"全国",   time:"夜",  indoor:"屋外",season:"夏",duration:"2〜4時間"},
  {category:"季節限定イベント",subCategory:"夏",name:"プール",      budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"全国",   time:"昼",  indoor:"屋外",season:"夏",duration:"半日〜1日"},
  
  {category:"季節限定イベント",subCategory:"冬",name:"イルミネーション",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"全国",time:"夜", indoor:"屋外",season:"冬",duration:"2〜4時間"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ⑧ アウトドア
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"アウトドア",subCategory:"山",     name:"高尾山",        budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"東京（八王子）",       time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"公園",name:"芝公園",        budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（芝公園）",  time:"昼",indoor:"屋外",season:"春",  duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"公園",name:"代々木公園",    budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（代々木）",  time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"公園",name:"新宿御苑",      budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（新宿）",    time:"昼",indoor:"屋外",season:"春",  duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"海",       name:"葛西臨海公園",  budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（葛西）",    time:"昼",indoor:"屋外",season:"夏",  duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"キャンプ", name:"山中湖キャンプ",budget:"5000円〜",budgetNum:5000, area:"その他",    areaRaw:"山梨（山中湖）",  time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"アウトドア",subCategory:"牧場",     name:"牧場",          budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"東京近郊",        time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"アウトドア",subCategory:"釣り",     name:"八景島釣り掘",    budget:"3000円〜",budgetNum:3000, area:"神奈川",    areaRaw:"神奈川（八景島）",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ⑨ ミュージアム・展示施設
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {category:"ミュージアム・展示施設",subCategory:"美術館",       name:"国立西洋美術館",  budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（上野）",    time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"美術館",       name:"森美術館",        budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"東京（六本木）",  time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"美術館",       name:"チームラボ",      budget:"4000円〜",budgetNum:4000, area:"東京",areaRaw:"東京（豊洲）",            time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"動物園",       name:"上野動物園",      budget:"1000円〜",budgetNum:1000, area:"東京",areaRaw:"東京（上野）",    time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"プラネタリウム",name:"プラネタリウム",  budget:"2000円〜",budgetNum:2000, area:"東京",areaRaw:"東京都内",            time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},
  

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
  {category:"体験・ものづくり",subCategory:"",name:"乗馬体験",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},

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
  {category:"ミュージアム・展示施設",subCategory:"その他",name:"都立9庭園",budget:"500円〜",budgetNum:500,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋外",season:"通年",duration:"2〜4時間"},
  {category:"ミュージアム・展示施設",subCategory:"展望台",name:"北仲ノット展望台",budget:"0円",budgetNum:0,area:"神奈川",areaRaw:"神奈川（横浜）",time:"夕方",indoor:"屋外",season:"通年",duration:"1〜3時間"},

  // テーマパーク
  {category:"テーマパーク",subCategory:"",name:"富士急ハイランド",budget:"5000円〜",budgetNum:5000,area:"その他",areaRaw:"山梨（富士急）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"ユニバーサルスタジオジャパン",budget:"10000円〜",budgetNum:10000,area:"その他",areaRaw:"大阪（USJ）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"ジブリパーク",budget:"5000円〜",budgetNum:5000,area:"その他",areaRaw:"愛知（ジブリパーク）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},
  {category:"テーマパーク",subCategory:"",name:"ちいかわパーク",budget:"3000円〜",budgetNum:3000,area:"東京",areaRaw:"東京都内",time:"昼",indoor:"屋内",season:"通年",duration:"2〜4時間"},

  // プチ旅行
  {category:"プチ旅行",subCategory:"神奈川エリア",name:"江ノ島",budget:"3000円〜",budgetNum:3000,area:"神奈川",areaRaw:"神奈川（江ノ島）",time:"昼",indoor:"屋外",season:"通年",duration:"半日〜1日"},

  // 季節限定イベント
  {category:"季節限定イベント",subCategory:"秋",name:"焼き芋フェア",budget:"1000円〜",budgetNum:1000,area:"東京",areaRaw:"全国",time:"昼",indoor:"屋外",season:"春",duration:"2〜4時間"},

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
];
