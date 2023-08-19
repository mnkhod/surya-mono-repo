/*
  Warnings:

  - You are about to drop the column `durationByMinutes` on the `SchedulesGroup` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LessonGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "information" TEXT NOT NULL,
    "tutorId" INTEGER NOT NULL,
    "endDate" DATETIME NOT NULL,
    "registrationEndDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "durationByMinutes" INTEGER NOT NULL DEFAULT 60,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "LessonGroup_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "InformationTutor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_LessonGroup" ("createdAt", "endDate", "id", "information", "registrationEndDate", "title", "tutorId", "updatedAt") SELECT "createdAt", "endDate", "id", "information", "registrationEndDate", "title", "tutorId", "updatedAt" FROM "LessonGroup";
DROP TABLE "LessonGroup";
ALTER TABLE "new_LessonGroup" RENAME TO "LessonGroup";
CREATE TABLE "new_SchedulesGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lessonId" INTEGER NOT NULL,
    "meetingDate" DATETIME NOT NULL,
    "meetingLink" TEXT,
    "isDemo" BOOLEAN NOT NULL,
    "isPeer" BOOLEAN NOT NULL DEFAULT true,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "SchedulesGroup_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "LessonGroup" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SchedulesGroup" ("id", "isAvailable", "isDemo", "isPeer", "lessonId", "meetingDate", "meetingLink") SELECT "id", "isAvailable", "isDemo", "isPeer", "lessonId", "meetingDate", "meetingLink" FROM "SchedulesGroup";
DROP TABLE "SchedulesGroup";
ALTER TABLE "new_SchedulesGroup" RENAME TO "SchedulesGroup";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
