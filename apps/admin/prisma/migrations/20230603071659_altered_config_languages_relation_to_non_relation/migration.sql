/*
  Warnings:

  - You are about to drop the `_TutorTeachingLanguages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `tutorNativeLanguageId` on the `ConfigLanguages` table. All the data in the column will be lost.
  - Added the required column `nativeLanguage` to the `InformationTutor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teachingLanguages` to the `InformationTutor` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_TutorTeachingLanguages_B_index";

-- DropIndex
DROP INDEX "_TutorTeachingLanguages_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_TutorTeachingLanguages";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ConfigLanguages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "flagSVGLink" TEXT NOT NULL
);
INSERT INTO "new_ConfigLanguages" ("flagSVGLink", "id", "name") SELECT "flagSVGLink", "id", "name" FROM "ConfigLanguages";
DROP TABLE "ConfigLanguages";
ALTER TABLE "new_ConfigLanguages" RENAME TO "ConfigLanguages";
CREATE TABLE "new_InformationTutor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "rootUserId" INTEGER NOT NULL,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "shortInfo" TEXT NOT NULL,
    "videoLink" TEXT NOT NULL,
    "profileImageLink" TEXT,
    "nativeLanguage" INTEGER NOT NULL,
    "teachingLanguages" INTEGER NOT NULL,
    CONSTRAINT "InformationTutor_rootUserId_fkey" FOREIGN KEY ("rootUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InformationTutor" ("createdAt", "firstName", "id", "lastName", "profileImageLink", "rootUserId", "shortInfo", "updatedAt", "videoLink") SELECT "createdAt", "firstName", "id", "lastName", "profileImageLink", "rootUserId", "shortInfo", "updatedAt", "videoLink" FROM "InformationTutor";
DROP TABLE "InformationTutor";
ALTER TABLE "new_InformationTutor" RENAME TO "InformationTutor";
CREATE UNIQUE INDEX "InformationTutor_rootUserId_key" ON "InformationTutor"("rootUserId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
