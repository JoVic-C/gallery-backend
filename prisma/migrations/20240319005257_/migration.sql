/*
  Warnings:

  - You are about to drop the `Galery` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Galery" DROP CONSTRAINT "Galery_id_user_fkey";

-- DropTable
DROP TABLE "Galery";

-- CreateTable
CREATE TABLE "UserGalery" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "UserGalery_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserGalery" ADD CONSTRAINT "UserGalery_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
