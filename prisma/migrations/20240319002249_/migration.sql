/*
  Warnings:

  - Added the required column `id_user` to the `Galery` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Galery" DROP CONSTRAINT "Galery_image_fkey";

-- AlterTable
ALTER TABLE "Galery" ADD COLUMN     "id_user" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Galery" ADD CONSTRAINT "Galery_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
