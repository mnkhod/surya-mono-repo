/*
  Warnings:

  - You are about to drop the column `tutorId` on the `SchedulesP2P` table. All the data in the column will be lost.
  - Added the required column `lessonId` to the `SchedulesP2P` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "LessonP2P" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "information" TEXT NOT NULL,
    "tutorId" INTEGER NOT NULL,
    CONSTRAINT "LessonP2P_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "InformationTutor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LessonGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "information" TEXT NOT NULL,
    "tutorId" INTEGER NOT NULL,
    "endDate" DATETIME NOT NULL,
    "registrationEndDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "LessonGroup_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "InformationTutor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SchedulesGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lessonId" INTEGER NOT NULL,
    "meetingDate" DATETIME NOT NULL,
    "meetingLink" TEXT,
    "isDemo" BOOLEAN NOT NULL,
    "isPeer" BOOLEAN NOT NULL DEFAULT true,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "durationByMinutes" INTEGER NOT NULL DEFAULT 60,
    CONSTRAINT "SchedulesGroup_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "LessonGroup" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SchedulesP2P" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "meetingDate" DATETIME NOT NULL,
    "meetingLink" TEXT,
    "lessonId" INTEGER NOT NULL,
    "isDemo" BOOLEAN NOT NULL,
    "isPeer" BOOLEAN NOT NULL DEFAULT true,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "durationByMinutes" INTEGER NOT NULL DEFAULT 60,
    CONSTRAINT "SchedulesP2P_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "LessonP2P" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SchedulesP2P" ("durationByMinutes", "id", "isAvailable", "isDemo", "isPeer", "meetingDate", "meetingLink") SELECT "durationByMinutes", "id", "isAvailable", "isDemo", "isPeer", "meetingDate", "meetingLink" FROM "SchedulesP2P";
DROP TABLE "SchedulesP2P";
ALTER TABLE "new_SchedulesP2P" RENAME TO "SchedulesP2P";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
