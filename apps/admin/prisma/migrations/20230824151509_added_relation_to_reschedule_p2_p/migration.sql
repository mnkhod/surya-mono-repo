/*
  Warnings:

  - You are about to drop the `RescheduleRequests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "RescheduleRequests";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "RescheduleRequestsP2P" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "updatedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reasonText" TEXT NOT NULL,
    "explanationText" TEXT,
    "scheduleId" INTEGER NOT NULL,
    CONSTRAINT "RescheduleRequestsP2P_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "SchedulesP2P" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
