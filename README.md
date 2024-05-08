## Getting Started

<br>
npm install<br>
npx prisma migrate dev --name init<br>
npm run dev<br>
---
<br>
## Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.<br>

- admin アカウント<br>
  - Account: vudungit92@gmail.com<br>
  - Password: admin<br>

### DB関連の更新を行った場合<br>

schema.prisma に model を追加・変更等した場合は<br>
以下を実行して DB と prisma-client が生成する型を更新する。<br>

## `<マイグレーションに名前を付ける>` は任意の名前を付ける。<br>

powershell<br>
npx prisma migrate dev --name <マイグレーションに名前を付ける><br>
npx prisma generate<br>

npm install --save @prisma/client<br>
npm install --save-dev prisma ts-node<br>

npx prisma migrate dev --name init<br>
npx tsx prisma/seed-dev.ts<br>

git merge origin main<br>
npx prisma generate<br>
npm run build<br>
