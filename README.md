This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
============
============
============
# 保育園比較ダッシュボード

## Overview
本プロジェクトは、Google Maps JavaScript API を利用して保育園の位置情報を表示し、比較するためのダッシュボードです。
主な機能:
- 地図の表示（中心座標、ズームレベルの設定が可能）
- 保育園マーカーの表示（今後実装予定）
- クラスタリングと情報ポップアップ（将来的な拡張）

## Setup

### 1. 環境変数の設定
プロジェクトルートに `.env.local` ファイルを作成し、以下のように API キーを設定します:
```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_ACTUAL_API_KEY

============
## Usage

### MapView コンポーネントの使い方

`MapView` コンポーネントは、地図の表示を行う再利用可能なコンポーネントです。

**Props:**

- `center`: オブジェクト `{ lat: number, lng: number }`（例: 東京の中心: `{ lat: 35.6895, lng: 139.6917 }`）
- `zoom`: 数値（例: `12`）

### サンプルコード
import MapView from "./components/MapView";

export default function Home() {
  return (
    <div>
      <h1>保育園比較ダッシュボード</h1>
      <MapView center={{ lat: 35.6895, lng: 139.6917 }} zoom={12} />
    </div>
  );
}

## Troubleshooting

- **InvalidKeyMapError**
    - 原因: API キーが間違っているか、設定されていない。
    - 対策: `.env.local` のキーを確認し、Google Cloud Platform でキーが有効か確認する。
- **google is not defined**
    - 原因: ブートストラップスクリプトが正しく読み込まれていない可能性。
    - 対策: `page.tsx` の先頭に Dynamic Library Import 用の `<Script>` が正しく配置されているか確認する。

## Conceptual Diagrams

### データフロー図

[ユーザー操作]
       ↓
[MapView コンポーネント]
       ↓
[Google Maps API (Dynamic Library Import)]
       ↓
[地図とマーカーの描画]

=======
ファイル構造（ディレクトリ風階層図）
=======
保育園比較ダッシュボード
├── node_modules
├── public
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components
│       └── MapView.tsx
├── .env.local
├── package.json
├── tsconfig.json
└── README.md


## Future Steps

- 保育園マーカーの表示と連携
- マーカーのクラスタリング機能の実装
- マーカークリック時に情報ポップアップ（InfoWindow）の実装

## License / References

- このプロジェクトは MIT ライセンスの下で公開されています。
- 詳細は Google Maps JavaScript API を参照してください。

---

## ステ 5: ドキュメントの更新・保守

- 機能拡張やエラー対応の際には、README の「Troubleshooting」や「Future Steps」の項目を更新します。
- プルリクエストやコミットの際に、README も併せて確認・更新する習慣をつけましょう。

---

## まとめ

- **目的:** 将来のために、プロジェクトのセットアップ、使い方、トラブルシューティング、全体の概念をまとめたドキュメントを作成する
- **方法:** README.md をプロジェクトルートに配置し、上記のアウトラインに沿って内容を記載する
- **教訓:** ドキュメントはコードと同様にメンテナンスが必要であり、開発者がスムーズにプロジェクトに参入できるように、常に最新の情報を反映させることが重要です。

以上の手順で README を作成すれば、将来の自分やチームメンバーがすぐにプロジェクトの全体像を把握できる状態になります。
何か不明点や追加したい項目があれば、遠慮なくご相談ください。