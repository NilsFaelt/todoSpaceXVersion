/*
  Warnings:

  - The primary key for the `Todos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `UserId` to the `Todos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `done` to the `Todos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `todo` to the `Todos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todos" DROP CONSTRAINT "Todos_pkey",
ADD COLUMN     "UserId" TEXT NOT NULL,
ADD COLUMN     "colab" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "done" BOOLEAN NOT NULL,
ADD COLUMN     "todo" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Todos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Todos_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AddForeignKey
ALTER TABLE "Todos" ADD CONSTRAINT "Todos_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
