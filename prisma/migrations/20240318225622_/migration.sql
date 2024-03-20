-- CreateTable
CREATE TABLE "Galery" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Galery_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Galery" ADD CONSTRAINT "Galery_image_fkey" FOREIGN KEY ("image") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
