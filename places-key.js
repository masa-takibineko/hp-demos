/*
  役割: CTO
  目的: 実店舗デモで Google マップの写真を表示するための「ブラウザ用キー」を1か所で管理する
  日付: 2026-11-15

  ここに入れてよいのは、次の2つの制限をかけたキーだけです（Google Cloud Console で設定）。
    1. アプリケーションの制限: ウェブサイト → https://masa-takibineko.github.io/*
    2. API の制限: Places API のみ
  .env の GOOGLE_MAPS_API_KEY（スクリプト用・制限なし）は絶対に入れないでください。
  このファイルは公開されます。空のままだと実写真は表示されません。
*/
window.PLACES_KEY = '';
