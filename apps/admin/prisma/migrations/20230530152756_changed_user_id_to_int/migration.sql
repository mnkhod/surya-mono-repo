/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
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
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    "isTutor" BOOLEAN NOT NULL,
    "isStudent" BOOLEAN NOT NULL,
    "name" TEXT
);
INSERT INTO "new_User" ("email", "id", "isAdmin", "isStudent", "isTutor", "name", "password") SELECT "email", "id", "isAdmin", "isStudent", "isTutor", "name", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
