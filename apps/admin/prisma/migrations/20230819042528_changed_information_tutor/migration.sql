/*
  Warnings:

  - Made the column `nativeLanguage` on table `InformationTutor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teachingLanguages` on table `InformationTutor` required. This step will fail if there are existing NULL values in that column.

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
    "nativeLanguage" INTEGER NOT NULL,
    "teachingLanguages" INTEGER NOT NULL,
    "isApproved" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "InformationTutor_rootUserId_fkey" FOREIGN KEY ("rootUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InformationTutor" ("createdAt", "firstName", "id", "isApproved", "lastName", "nativeLanguage", "profileImageLink", "rootUserId", "shortInfo", "teachingLanguages", "updatedAt", "videoLink") SELECT "createdAt", "firstName", "id", "isApproved", "lastName", "nativeLanguage", "profileImageLink", "rootUserId", "shortInfo", "teachingLanguages", "updatedAt", "videoLink" FROM "InformationTutor";
DROP TABLE "InformationTutor";
ALTER TABLE "new_InformationTutor" RENAME TO "InformationTutor";
CREATE UNIQUE INDEX "InformationTutor_rootUserId_key" ON "InformationTutor"("rootUserId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
