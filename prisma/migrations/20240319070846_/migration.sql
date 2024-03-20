/*
  Warnings:

  - Added the required column `id_galery` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "id_galery" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Galery" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Galery_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_galery_fkey" FOREIGN KEY ("id_galery") REFERENCES "Galery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
