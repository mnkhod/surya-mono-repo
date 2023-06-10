/*
  Warnings:

  - Made the column `firstName` on table `InformationTutor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastName` on table `InformationTutor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `shortInfo` on table `InformationTutor` required. This step will fail if there are existing NULL values in that column.
  - Made the column `videoLink` on table `InformationTutor` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_InformationTutor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "shortInfo" TEXT NOT NULL,
    "videoLink" TEXT NOT NULL,
    "profileImageLink" TEXT
);
INSERT INTO "new_InformationTutor" ("createdAt", "firstName", "id", "lastName", "profileImageLink", "shortInfo", "updatedAt", "videoLink") SELECT "createdAt", "firstName", "id", "lastName", "profileImageLink", "shortInfo", "updatedAt", "videoLink" FROM "InformationTutor";
DROP TABLE "InformationTutor";
ALTER TABLE "new_InformationTutor" RENAME TO "InformationTutor";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
