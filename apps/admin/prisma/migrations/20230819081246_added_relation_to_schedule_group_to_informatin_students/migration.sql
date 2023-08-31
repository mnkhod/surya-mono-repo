/*
  Warnings:

  - You are about to drop the column `isDemo` on the `SchedulesGroup` table. All the data in the column will be lost.
  - You are about to drop the column `isPeer` on the `SchedulesGroup` table. All the data in the column will be lost.
  - Added the required column `studentId` to the `SchedulesGroup` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SchedulesGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lessonId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "meetingDate" DATETIME NOT NULL,
    "meetingLink" TEXT,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "SchedulesGroup_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "LessonGroup" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SchedulesGroup_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "InformationStudent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SchedulesGroup" ("id", "isAvailable", "lessonId", "meetingDate", "meetingLink") SELECT "id", "isAvailable", "lessonId", "meetingDate", "meetingLink" FROM "SchedulesGroup";
DROP TABLE "SchedulesGroup";
ALTER TABLE "new_SchedulesGroup" RENAME TO "SchedulesGroup";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
