/*
  Warnings:

  - Added the required column `rootUserId` to the `InformationAdmin` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_InformationAdmin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "lastName" TEXT,
    "firstName" TEXT,
    "rootUserId" INTEGER NOT NULL,
    CONSTRAINT "InformationAdmin_rootUserId_fkey" FOREIGN KEY ("rootUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InformationAdmin" ("createdAt", "firstName", "id", "lastName", "updatedAt") SELECT "createdAt", "firstName", "id", "lastName", "updatedAt" FROM "InformationAdmin";
DROP TABLE "InformationAdmin";
ALTER TABLE "new_InformationAdmin" RENAME TO "InformationAdmin";
CREATE UNIQUE INDEX "InformationAdmin_rootUserId_key" ON "InformationAdmin"("rootUserId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
