/*
  Warnings:

  - A unique constraint covering the columns `[rootUserId]` on the table `InformationTutor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "InformationTutor_rootUserId_key" ON "InformationTutor"("rootUserId");
