/*
  Warnings:

  - Added the required column `userId` to the `InformationTutor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_InformationTutor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "shortInfo" TEXT NOT NULL,
    "videoLink" TEXT NOT NULL,
    "profileImageLink" TEXT,
    CONSTRAINT "InformationTutor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InformationTutor" ("createdAt", "firstName", "id", "lastName", "profileImageLink", "shortInfo", "updatedAt", "videoLink") SELECT "createdAt", "firstName", "id", "lastName", "profileImageLink", "shortInfo", "updatedAt", "videoLink" FROM "InformationTutor";
DROP TABLE "InformationTutor";
ALTER TABLE "new_InformationTutor" RENAME TO "InformationTutor";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
