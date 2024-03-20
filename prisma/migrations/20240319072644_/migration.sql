/*
  Warnings:

  - You are about to drop the column `image` on the `UserGalery` table. All the data in the column will be lost.
  - Added the required column `title` to the `UserGalery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserGalery" DROP COLUMN "image",
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Pictures" (
    "id" TEXT NOT NULL,
    "id_galery" INTEGER NOT NULL,
    "id_user" TEXT NOT NULL,
    "image_title" TEXT NOT NULL,
    "image_description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pictures_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pictures" ADD CONSTRAINT "Pictures_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pictures" ADD CONSTRAINT "Pictures_id_galery_fkey" FOREIGN KEY ("id_galery") REFERENCES "UserGalery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
