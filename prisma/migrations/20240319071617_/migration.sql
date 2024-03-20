/*
  Warnings:

  - You are about to drop the `Galery` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_id_galery_fkey";

-- DropTable
DROP TABLE "Galery";
