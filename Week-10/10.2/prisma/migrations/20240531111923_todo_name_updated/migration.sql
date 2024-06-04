/*
  Warnings:

  - You are about to drop the `Tode` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Tode";

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
