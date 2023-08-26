-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RescheduleRequestsP2P" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "updatedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reasonText" TEXT NOT NULL,
    "explanationText" TEXT,
    "scheduleId" INTEGER NOT NULL,
    "isPending" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "RescheduleRequestsP2P_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "SchedulesP2P" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RescheduleRequestsP2P" ("createdAt", "explanationText", "id", "reasonText", "scheduleId", "updatedAt") SELECT "createdAt", "explanationText", "id", "reasonText", "scheduleId", "updatedAt" FROM "RescheduleRequestsP2P";
DROP TABLE "RescheduleRequestsP2P";
ALTER TABLE "new_RescheduleRequestsP2P" RENAME TO "RescheduleRequestsP2P";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
