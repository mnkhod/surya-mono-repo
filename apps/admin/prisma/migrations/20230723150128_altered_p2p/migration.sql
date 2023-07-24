/*
  Warnings:

  - You are about to drop the column `duration_by_minutes` on the `SchedulesP2P` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SchedulesP2P" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tutorId" INTEGER NOT NULL,
    "meetingDate" DATETIME NOT NULL,
    "meetingLink" TEXT,
    "isDemo" BOOLEAN NOT NULL,
    "isLesson" BOOLEAN NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "durationByMinutes" INTEGER NOT NULL DEFAULT 60,
    CONSTRAINT "SchedulesP2P_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "InformationTutor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SchedulesP2P" ("id", "isAvailable", "isDemo", "isLesson", "meetingDate", "meetingLink", "tutorId") SELECT "id", "isAvailable", "isDemo", "isLesson", "meetingDate", "meetingLink", "tutorId" FROM "SchedulesP2P";
DROP TABLE "SchedulesP2P";
ALTER TABLE "new_SchedulesP2P" RENAME TO "SchedulesP2P";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
