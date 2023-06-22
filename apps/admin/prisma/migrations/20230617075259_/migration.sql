/*
  Warnings:

  - You are about to drop the column `isApproved` on the `InformationTutor` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_InformationTutor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "rootUserId" INTEGER NOT NULL,
    "lastName" TEXT,
    "firstName" TEXT,
    "shortInfo" TEXT,
    "videoLink" TEXT,
    "profileImageLink" TEXT,
    "nativeLanguage" INTEGER,
    "teachingLanguages" INTEGER,
    "approve" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "InformationTutor_rootUserId_fkey" FOREIGN KEY ("rootUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InformationTutor" ("createdAt", "firstName", "id", "lastName", "nativeLanguage", "profileImageLink", "rootUserId", "shortInfo", "teachingLanguages", "updatedAt", "videoLink") SELECT "createdAt", "firstName", "id", "lastName", "nativeLanguage", "profileImageLink", "rootUserId", "shortInfo", "teachingLanguages", "updatedAt", "videoLink" FROM "InformationTutor";
DROP TABLE "InformationTutor";
ALTER TABLE "new_InformationTutor" RENAME TO "InformationTutor";
CREATE UNIQUE INDEX "InformationTutor_rootUserId_key" ON "InformationTutor"("rootUserId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;