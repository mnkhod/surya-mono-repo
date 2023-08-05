/*
  Warnings:

  - You are about to drop the `LessonP2P` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `lessonId` on the `SchedulesP2P` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "LessonP2P";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SchedulesP2P" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tutorId" INTEGER,
    "studentId" INTEGER,
    "meetingDate" DATETIME NOT NULL,
    "meetingLink" TEXT,
    "isDemo" BOOLEAN NOT NULL,
    "isPeer" BOOLEAN NOT NULL DEFAULT true,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "durationByMinutes" INTEGER NOT NULL DEFAULT 60,
    CONSTRAINT "SchedulesP2P_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "InformationTutor" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "SchedulesP2P_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "InformationStudent" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_SchedulesP2P" ("durationByMinutes", "id", "isAvailable", "isDemo", "isPeer", "meetingDate", "meetingLink") SELECT "durationByMinutes", "id", "isAvailable", "isDemo", "isPeer", "meetingDate", "meetingLink" FROM "SchedulesP2P";
DROP TABLE "SchedulesP2P";
ALTER TABLE "new_SchedulesP2P" RENAME TO "SchedulesP2P";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
