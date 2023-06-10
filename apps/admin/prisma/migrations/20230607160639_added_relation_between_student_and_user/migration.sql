/*
  Warnings:

  - Added the required column `rootUserId` to the `InformationStudent` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_InformationStudent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "lastName" TEXT,
    "firstName" TEXT,
    "profileImageLink" TEXT,
    "nativeLanguage" INTEGER,
    "learningLanguages" INTEGER,
    "remainingPurchase" INTEGER,
    "rootUserId" INTEGER NOT NULL,
    CONSTRAINT "InformationStudent_rootUserId_fkey" FOREIGN KEY ("rootUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InformationStudent" ("createdAt", "firstName", "id", "lastName", "learningLanguages", "nativeLanguage", "profileImageLink", "updatedAt") SELECT "createdAt", "firstName", "id", "lastName", "learningLanguages", "nativeLanguage", "profileImageLink", "updatedAt" FROM "InformationStudent";
DROP TABLE "InformationStudent";
ALTER TABLE "new_InformationStudent" RENAME TO "InformationStudent";
CREATE UNIQUE INDEX "InformationStudent_rootUserId_key" ON "InformationStudent"("rootUserId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
