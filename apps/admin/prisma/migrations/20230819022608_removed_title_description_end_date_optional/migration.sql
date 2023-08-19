/*
  Warnings:

  - You are about to drop the column `information` on the `LessonGroup` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `LessonGroup` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LessonGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tutorId" INTEGER NOT NULL,
    "endDate" DATETIME,
    "registrationEndDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "durationByMinutes" INTEGER NOT NULL DEFAULT 60,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "LessonGroup_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "InformationTutor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_LessonGroup" ("createdAt", "durationByMinutes", "endDate", "id", "registrationEndDate", "tutorId", "updatedAt") SELECT "createdAt", "durationByMinutes", "endDate", "id", "registrationEndDate", "tutorId", "updatedAt" FROM "LessonGroup";
DROP TABLE "LessonGroup";
ALTER TABLE "new_LessonGroup" RENAME TO "LessonGroup";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
