-- CreateTable
CREATE TABLE "RescheduleRequests" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "updatedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reasonText" TEXT NOT NULL,
    "explanationText" TEXT
);
